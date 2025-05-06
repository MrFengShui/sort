import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { MessageService } from "primeng/api";
import { filter, fromEvent, interval, map, Subscription, take } from "rxjs";
import { HmacSHA256 } from 'crypto-js';

import { addClassSelectors } from "../../share/selector.utils";
import { drawMatrixRainEffectOnCanvas } from "../../share/effect.utils";
import { saveDataToFile } from "../../share/auth.utils";

import { AuthenticationMetainfoModel, AuthorizationStatusModel } from "../../models/auth.model";

import { NGXAuthUserInfoFeatureSelector } from "../../store/auth.selector";
import { NGXAuthenticationAction, NGXAuthenticationDoneAction, NGXAuthenticationFetchAction, NGXAuthenticationFetchDoneAction, NGXAuthorizationAction, NGXAuthorizationDoneAction, NGXAuthorizationFetchAction, NGXAuthorizationFetchDoneAction, NGXAuthorizationInitializeAction, NGXAuthorizationInitializeDoneAction, NGXAuthorizationStoreAction, NGXAuthorizationStoreDoneAction } from "../../store/auth.action";
import { Router } from "@angular/router";
import { NGXAuthTokenGenerationAndVerificationService } from "../../services/auth.service";

@Component({
    selector: 'ngx-login-page',
    templateUrl: './login.component.html'
})
export class NGXLoginPageComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('canvas', { read: ElementRef, static: true })
    private canvas?: ElementRef<HTMLCanvasElement>;

    protected readonly I18N_USERNAME_LABEL: string = $localize`:@@login.page.username.label:Username`;
    protected readonly I18N_USERNAME_PLACEHOLDER: string = $localize`:@@login.page.username.placeholder:Enter your username here.`;
    protected readonly I18N_PASSWORD_LABEL: string = $localize`:@@login.page.password.label:Password`;
    protected readonly I18N_PASSWORD_PLACEHOLDER: string = $localize`:@@login.page.password.placeholder:Enter your password here.`;
    protected readonly I18N_LABEL_TELL_ME: string = $localize`:@@login.page.tell.me:Tell Me`;
    protected readonly I18N_LABEL_SIGN_IN: string = $localize`:@@login.page.sign.in:Sign In`;

    private readonly I18N_TOAST_SUMMARY: string = $localize`:@@login.page.toast.summary:Clipboard`;
    private readonly I18N_TOAST_DETAIL: string = $localize`:@@login.page.toast.detail:TIP: Please click two buttons above to copy and paste each value into the relevant input field. Then, you need to close this popover manually by clicking the close button`;
    private readonly size: number = 100;

    protected readonly toastKey: string = 'authentication_metainfo_toast_key';

    private order: number = -1;

    private matrixRainEffect$: Subscription = Subscription.EMPTY;
    private windowResize$: Subscription = Subscription.EMPTY;
    private store$: Subscription = Subscription.EMPTY;

    protected group: FormGroup = this._builder.group({
        usernameControl: new FormControl('', { validators: [Validators.required] }),
        passwordControl: new FormControl('', { validators: [Validators.required] })
    });

    constructor(
        protected _builder: FormBuilder,
        protected _element: ElementRef,
        protected _renderer: Renderer2,
        protected _router: Router,
        protected _zone: NgZone,
        protected _store: Store,
        protected _msgService: MessageService,
        protected _service: NGXAuthTokenGenerationAndVerificationService,

        @Inject(DOCUMENT)
        protected _document: Document
    ) {
        this.listenAuthUserInfoChange();
    }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-login-page');
        // this._service.generate('3f9e3015eeb10e8eb0d62efb645cc004cee182dc4d099a6af99ac14d6376aa06').subscribe(value => console.debug(value, this._service.verify(value)));
        // this._service.verify();
        this._store.dispatch(NGXAuthorizationFetchAction());
        // this.generate(this.size);
    }

    ngOnDestroy(): void {
        if (!this.matrixRainEffect$.closed)
            this.matrixRainEffect$.unsubscribe();

        if (!this.windowResize$.closed)
            this.windowResize$.unsubscribe();

        if (!this.store$.closed)
            this.store$.unsubscribe();
    }

    ngAfterViewInit(): void {
        const canvas: HTMLCanvasElement | undefined = this.canvas?.nativeElement;

        if (canvas) {
            let task = setTimeout(() => {
                clearTimeout(task);

                const context: CanvasRenderingContext2D | null = canvas.getContext('2d', { alpha: false });
                const width: number = canvas.clientWidth, height: number = canvas.clientHeight;
                const flag: boolean = this._document.documentElement.classList.contains('p-dark-mode');

                this._renderer.setAttribute(canvas, 'width', `${width}`);
                this._renderer.setAttribute(canvas, 'height', `${height}`);

                this.matrixRainEffect$ = drawMatrixRainEffectOnCanvas(context, width, height, 24, flag);
                this.listenBodyResizeChange(context, width, height, 24, flag);
            });
        }
    }

    protected handleUserSignInEvent(): void {
        if (this.group.valid)
            this._store.dispatch(NGXAuthenticationAction({
                data: {
                    username: this.group.controls['usernameControl'].value,
                    password: this.group.controls['passwordControl'].value
                }
            }));
    }

    protected handleInfoTellMeEvent(): void {
        this._store.dispatch(NGXAuthenticationFetchAction({ data: this.order }));
    }

    protected handleCopyInputTextEvent(value: string): void {
        window.navigator.clipboard.writeText(value);
    }

    private listenBodyResizeChange(context: CanvasRenderingContext2D | null, width: number, height: number, size: number, flag: boolean): void {
        this._zone.runOutsideAngular(() => {
            this.windowResize$ = fromEvent(window, 'resize').subscribe(() => {
                this.matrixRainEffect$.unsubscribe();

                if (this.matrixRainEffect$.closed)
                    this.matrixRainEffect$ = drawMatrixRainEffectOnCanvas(context, width, height, size, flag);
            });
        });
    }

    private listenAuthUserInfoChange(): void {
        this._zone.runOutsideAngular(() => {
            this.store$ = this._store
                .select(NGXAuthUserInfoFeatureSelector)
                .pipe(filter(state => state.action.length > 0))
                .subscribe(state => {
                    console.debug(state);
                    if (state.action === NGXAuthorizationFetchDoneAction.type) {
                        if (state.result) {
                            const model: AuthorizationStatusModel = state.result as AuthorizationStatusModel;
                            this.order = model.order;
                        } else
                            this._store.dispatch(NGXAuthorizationInitializeAction({ data: this.size }));
                    }

                    if (state.action === NGXAuthorizationStoreDoneAction.type && Boolean(state.result))
                        this._router.navigate(['/home']);

                    if (state.action === NGXAuthenticationFetchDoneAction.type)
                        this._msgService.add({
                            data: state.result, key: this.toastKey,
                            summary: this.I18N_TOAST_SUMMARY, detail: this.I18N_TOAST_DETAIL,
                            severity: 'secondary', sticky: true
                        });

                    if (state.action === NGXAuthenticationDoneAction.type && state.result)
                        this._store.dispatch(NGXAuthorizationAction({ data: state.result as string }));

                    if (state.action === NGXAuthorizationDoneAction.type && state.result)
                        this._store.dispatch(NGXAuthorizationStoreAction({ data: state.result as AuthorizationStatusModel }));
                });
        });
    }

    private generate(size: number = 10): void {
        this._zone.runOutsideAngular(() => {
            const models: AuthenticationMetainfoModel[] = [];
            let values$ = interval(10)
                .pipe(
                    map(() => Date.now()),
                    take(size),
                    map(value => {
                        const username: string = `username_${value}`;
                        const password: string = `password_${value}`;
                        return {
                            username: HmacSHA256(username, `${username}_${password}`).toString(),
                            password: HmacSHA256(password, `${password}_${username}`).toString()
                        };
                    })
                )
                .subscribe({
                    next: model => models.push(model),
                    complete: () => {
                        console.debug('completed');
                        saveDataToFile(this._renderer, 'auth-info.data.json', models);
                        saveDataToFile(this._renderer, 'user-info.data.json',
                            models.map((model, index) => ({
                                avatar: `${Math.random() < 0.5 ? 'male' : 'female'}-00${(index % 6) + 1}.png`,
                                name: window.btoa(model.password.slice(0, 6) + model.username.slice(0, 6))
                            })));
                        values$.unsubscribe();
                    }
                });
        });
    }

}
