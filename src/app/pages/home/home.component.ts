import { Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription, filter, interval, map } from "rxjs";

import moment from 'moment';

import { AppLocaleConfigListener, AppStyleConfigListener } from "../../interfaces/config.interface";

import { addClassSelectors } from "../../share/selector.utils";
import { assignHrefLink, APP_URL_HASH } from "../../share/location.utils";

import { AppStyleConfigModel } from "../../models/style.model";
import { SelectorOptionModel } from "../../models/option.model";
import { AppLocaleConfigModel, AppLocaleName } from "../../models/locale.model";

import { AppStyleConfigLoadDoneAction, AppStyleConfigSaveAction } from "../../store/style.action";
import { AppStyleFeatureSelector } from "../../store/style.selector";
import { AppLocaleFeatureSelector } from "../../store/locale.selector";
import { AppLocaleConfigLoadDoneAction } from "../../store/locale.action";

@Component({
    selector: 'ngx-home-page',
    templateUrl: './home.component.html'
})
export class AppHomePageComponent implements OnInit, OnDestroy, AppLocaleConfigListener, AppStyleConfigListener {

    protected readonly I18N_FOOT_COPYRIGHT: string = $localize`:@@home.page.foot.copyright:Copyright All Reserved`;
    protected readonly I18N_FOOT_TECHNIQUE: string = $localize`:@@home.page.foot.technique:Technology Supported by Angular and PrimeNG`;
    protected readonly I18N_HEAD_LOCALE_EN: string = $localize`:@@home.page.head.locale.en:English`;
    protected readonly I18N_HEAD_LOCALE_ZH: string = $localize`:@@home.page.head.locale.zh:Chinese`;
    protected readonly I18N_HEAD_MODE_OFF: string = $localize`:@@home.page.head.mode.off:Light Mode`;
    protected readonly I18N_HEAD_MODE_ON: string = $localize`:@@home.page.head.mode.on:Dark Mode`;

    protected logoHrefLink: string = '';
    protected localeOption: AppLocaleName | string = '';
    protected localeOptions: SelectorOptionModel<AppLocaleName | string>[] = [
        { label: this.I18N_HEAD_LOCALE_EN, value: 'en-US' },
        { label: this.I18N_HEAD_LOCALE_ZH, value: 'zh-CN' }
    ];
    protected localeConfig: AppLocaleConfigModel = { locale: '' };
    protected styleConfig: AppStyleConfigModel = { color: undefined, darkMode: false, theme: undefined };

    protected datetime$: Observable<string> = interval(250).pipe(map(() => moment(Date.now()).format('LLLL')));

    private localeConfigStore$: Subscription = Subscription.EMPTY;
    private styleConfigStore$: Subscription = Subscription.EMPTY;

    constructor(
        protected _element: ElementRef,
        protected _renderer: Renderer2,
        protected _router: Router,
        protected _zone: NgZone,
        protected _store: Store,
    ) {
        this.listenLocaleConfigChange();
        this.listenStyleConfigChange();
    }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-home-page');
    }

    ngOnDestroy(): void {
        if (!this.localeConfigStore$.closed)
            this.localeConfigStore$.unsubscribe();

        if (!this.styleConfigStore$.closed)
            this.styleConfigStore$.unsubscribe();
    }

    listenLocaleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.localeConfigStore$ = this._store
                .select(AppLocaleFeatureSelector)
                .pipe(filter(state => state.action === AppLocaleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        const model: AppLocaleConfigModel = state.result as AppLocaleConfigModel;
                        this.localeOption = model.locale;
                    }));
        });
    }

    listenStyleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.styleConfigStore$ = this._store
                .select(AppStyleFeatureSelector)
                .pipe(filter(state => state.action === AppStyleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        const model: AppStyleConfigModel = state.result as AppStyleConfigModel;
                        this.styleConfig.color = model.color;
                        this.styleConfig.darkMode = model.darkMode;
                        this.styleConfig.theme = model.theme;
                    }));
        });
    }

    protected handleLocaleSelectEvent(value: AppLocaleName | string): void {
        window.location.replace(assignHrefLink(value, APP_URL_HASH));
    }

    protected listenDarkModeChange(flag: boolean | undefined): void {
        this._store.dispatch(AppStyleConfigSaveAction({
            ...this.styleConfig,
            darkMode: Boolean(flag)
        }));
    }

}
