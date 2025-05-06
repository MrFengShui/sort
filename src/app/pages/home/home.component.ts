import { Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription, filter, interval, map } from "rxjs";

import moment from 'moment';

import { NGXLocaleConfigListener, NGXStyleConfigListener } from "../../interfaces/config.interface";

import { addClassSelectors } from "../../share/selector.utils";
import { assignHrefLink, APP_URL_HASH } from "../../share/location.utils";

import { StyleColorName, StyleConfigModel, StyleThemeName } from "../../models/style.model";
import { SelectorOptionModel } from "../../models/option.model";
import { LocaleConfigModel, LocaleName } from "../../models/locale.model";

import { NGXStyleConfigLoadDoneAction, NGXStyleConfigSaveAction } from "../../store/style.action";
import { NGXStyleFeatureSelector } from "../../store/style.selector";
import { NGXLocaleFeatureSelector } from "../../store/locale.selector";
import { NGXLocaleConfigLoadDoneAction } from "../../store/locale.action";

@Component({
    selector: 'ngx-home-page',
    templateUrl: './home.component.html'
})
export class NGXHomePageComponent implements OnInit, OnDestroy, NGXLocaleConfigListener, NGXStyleConfigListener {

    protected readonly I18N_FOOT_COPYRIGHT: string = $localize`:@@home.page.foot.copyright:Copyright All Reserved`;
    protected readonly I18N_FOOT_TECHNIQUE: string = $localize`:@@home.page.foot.technique:Technology Supported by Angular and PrimeNG`;
    protected readonly I18N_HEAD_LOCALE_EN: string = $localize`:@@home.page.head.locale.en:English`;
    protected readonly I18N_HEAD_LOCALE_ZH: string = $localize`:@@home.page.head.locale.zh:Chinese`;
    protected readonly I18N_HEAD_STYLE_COLOR_PLACEHOLDER: string = $localize`:@@home.page.head.style.color.placeholder:Select One Color`;
    protected readonly I18N_HEAD_STYLE_COLOR_AMBER: string = $localize`:@@home.page.head.style.color.amber:Amber`;
    protected readonly I18N_HEAD_STYLE_COLOR_EMERALD: string = $localize`:@@home.page.head.style.color.emerald:Emerald`;
    protected readonly I18N_HEAD_STYLE_COLOR_INDIGO: string = $localize`:@@home.page.head.style.color.indigo:Indigo`;
    protected readonly I18N_HEAD_STYLE_COLOR_ORANGE: string = $localize`:@@home.page.head.style.color.orange:Orange`;
    protected readonly I18N_HEAD_STYLE_COLOR_ROSE: string = $localize`:@@home.page.head.style.color.rose:Rose`;
    protected readonly I18N_HEAD_STYLE_COLOR_SKY: string = $localize`:@@home.page.head.style.color.sky:Sky`;
    protected readonly I18N_HEAD_STYLE_COLOR_VIOLET: string = $localize`:@@home.page.head.style.color.violot:Violet`;
    protected readonly I18N_HEAD_STYLE_MODE_OFF: string = $localize`:@@home.page.head.style.mode.off:Light Mode`;
    protected readonly I18N_HEAD_STYLE_MODE_ON: string = $localize`:@@home.page.head.style.mode.on:Dark Mode`;
    protected readonly I18N_HEAD_STYLE_THEME_PLACEHOLDER: string = $localize`:@@home.page.head.style.theme.placeholder:Select One Theme`;
    protected readonly I18N_HEAD_STYLE_THEME_AURA: string = $localize`:@@home.page.head.style.theme.aura:Aura`;
    protected readonly I18N_HEAD_STYLE_THEME_LARA: string = $localize`:@@home.page.head.style.theme.lara:Lara`;
    protected readonly I18N_HEAD_STYLE_THEME_MATERIAL: string = $localize`:@@home.page.head.style.theme.material:Material`;
    protected readonly I18N_HEAD_STYLE_THEME_NORA: string = $localize`:@@home.page.head.style.theme.nora:Nora`;
    protected readonly I18N_TOOLTIP_GITHUB: string = $localize`:@@home.page.tooltip.github:GitHub Repository`;
    protected readonly I18N_TOOLTIP_HELP: string = $localize`:@@home.page.tooltip.help:Help`;
    protected readonly I18N_TOOLTIP_PRIMENG: string = $localize`:@@home.page.tooltip.primeng:PrimeNG`;
    protected readonly I18N_TOOLTIP_USER_LOGIN: string = $localize`:@@home.page.tooltip.user.login:Sign In`;

    protected readonly githubHrefLink: string = 'https://github.com/MrFengShui/sort';
    protected readonly primengHrefLink: string = 'https://primeng.org/';

    protected isDarkMode: boolean = false;
    protected localeOption: LocaleName | string = '';
    protected localeOptions: SelectorOptionModel<LocaleName | string>[] = [
        { label: this.I18N_HEAD_LOCALE_EN, value: 'en-US' },
        { label: this.I18N_HEAD_LOCALE_ZH, value: 'zh-CN' }
    ];
    protected styleColorOptions: SelectorOptionModel<StyleColorName>[] = [
        { label: this.I18N_HEAD_STYLE_COLOR_AMBER, value: 'amber' },
        { label: this.I18N_HEAD_STYLE_COLOR_EMERALD, value: 'emerald' },
        { label: this.I18N_HEAD_STYLE_COLOR_INDIGO, value: 'indigo' },
        { label: this.I18N_HEAD_STYLE_COLOR_ORANGE, value: 'orange' },
        { label: this.I18N_HEAD_STYLE_COLOR_ROSE, value: 'rose' },
        { label: this.I18N_HEAD_STYLE_COLOR_SKY, value: 'sky' },
        { label: this.I18N_HEAD_STYLE_COLOR_VIOLET, value: 'violet' }
    ];
    protected styleThemeOptions: SelectorOptionModel<StyleThemeName>[] = [
        { label: this.I18N_HEAD_STYLE_THEME_AURA, value: 'aura' },
        { label: this.I18N_HEAD_STYLE_THEME_LARA, value: 'lara' },
        { label: this.I18N_HEAD_STYLE_THEME_MATERIAL, value: 'material' },
        { label: this.I18N_HEAD_STYLE_THEME_NORA, value: 'nora' }
    ];
    protected localeConfig: LocaleConfigModel = { locale: '' };
    protected styleConfig: StyleConfigModel | undefined;

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
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-home-page', 'flex');
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
                .select(NGXLocaleFeatureSelector)
                .pipe(filter(state => state.action === NGXLocaleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        const model: LocaleConfigModel = state.result as LocaleConfigModel;
                        this.localeOption = model.locale;
                    }));
        });
    }

    listenStyleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.styleConfigStore$ = this._store
                .select(NGXStyleFeatureSelector)
                .pipe(filter(state => state.action === NGXStyleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        const model: StyleConfigModel = state.result as StyleConfigModel;
                        this.isDarkMode = Boolean(model.darkMode);

                        if (this.styleConfig) {
                            this.styleConfig.color = model.color;
                            this.styleConfig.darkMode = model.darkMode;
                            this.styleConfig.theme = model.theme;
                        } else
                            this.styleConfig = { color: model.color, darkMode: Boolean(model.darkMode), theme: model.theme };
                    }));
        });
    }

    protected handleChangeLocaleEvent(value: LocaleName | string): void {
        window.location.replace(assignHrefLink(value, APP_URL_HASH));
    }

    protected handleGoToLoginEvent(): void {
        this._router.navigate(['/login']);
    }

    protected listenStyleColorChange(name: StyleColorName): void {
        if (this.styleConfig)
            this._store.dispatch(NGXStyleConfigSaveAction({
                ...this.styleConfig,
                color: name
            }));
    }

    protected listenStyleDarkModeChange(flag: boolean | undefined): void {
        if (this.styleConfig)
            this._store.dispatch(NGXStyleConfigSaveAction({
                ...this.styleConfig,
                darkMode: Boolean(flag)
            }));
    }

    protected listenStyleThemeChange(name: StyleThemeName): void {
        if (this.styleConfig)
            this._store.dispatch(NGXStyleConfigSaveAction({
                ...this.styleConfig,
                theme: name
            }));
    }

}
