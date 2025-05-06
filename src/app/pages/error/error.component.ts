import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { fromEvent, interval, Subscription } from "rxjs";

import { addClassSelectors } from "../../share/selector.utils";
import { DOCUMENT } from "@angular/common";
import { drawMatrixRainEffectOnCanvas } from "../../share/effect.utils";

@Component({
    selector: 'ngx-error-page',
    templateUrl: './error.component.html'
})
export class NGXErrorPageComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('canvas', { read: ElementRef, static: true })
    private canvas?: ElementRef<HTMLCanvasElement>;

    protected readonly I18N_LABEL_BUTTON: string = $localize`:@@error.page.label.button:Back to Home Page`;
    protected readonly I18N_TITLE: string = $localize`:@@error.page.title:ERROR 404`;
    protected readonly I18N_SUBTITLE: string = $localize`:@@error.page.subtitle:Page Not Found`;
    protected readonly I18N_MESSAGE: string = $localize`:@@error.page.message:Oops...The page you are desired to visit IS NOT found yet, because it DOES NOT exist. Please click any link button to visit the relevant page, instead of entering any url in the browser's input field, even though you remember what the url is. Now, click the button below to go to the home page please. `;

    private readonly letters: string = 'あかさたなはまやらわいきしちにひみりうくすつぬふむゆるえけせてねへめれおこそとのほもよろをABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    private readonly size: number = 24;

    private matrixRainEffect$: Subscription = Subscription.EMPTY;
    private windowResize$: Subscription = Subscription.EMPTY;

    constructor(
        protected _element: ElementRef,
        protected _renderer: Renderer2,
        protected _router: Router,
        protected _zone: NgZone,

        @Inject(DOCUMENT)
        protected _document: Document
    ) { }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-error-page');
    }

    ngOnDestroy(): void {
        if (!this.matrixRainEffect$.closed)
            this.matrixRainEffect$.unsubscribe();

        if (!this.windowResize$.closed)
            this.windowResize$.unsubscribe();
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

    protected handleGoToHomePageEvent(): void {
        this._router.navigate(['/home']);
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

}
