import { Component, Inject, LOCALE_ID, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';

import { AppStyleColorName, AppStyleConfigModel, AppStyleThemeName } from './models/style.model';
import { AppLocaleName } from './models/locale.model';

import { addClassSelectors, removeClassSelectors } from './share/selector.utils';
import { updateLocaleToChinese, updateLocaleToEnglish } from './share/datetime.utils';

import { AppLocaleConfigListener, AppStyleConfigListener } from './interfaces/config.interface';

import { AppStyleFeatureSelector } from './store/style.selector';
import { AppStyleConfigLoadAction, AppStyleConfigLoadDoneAction, AppStyleConfigSaveAction, AppStyleConfigSaveDoneAction } from './store/style.action';
import { AppLocaleFeatureSelector } from './store/locale.selector';
import { AppLocaleConfigLoadAction, AppLocaleConfigLoadDoneAction, AppLocaleConfigSaveAction, AppLocaleConfigSaveDoneAction } from './store/locale.action';

import { selectAuraPreset } from './theme/aura.theme';
import { selectLaraPreset } from './theme/lara.theme';
import { selectMaterialPreset } from './theme/material.theme';
import { selectNoraPreset } from './theme/nora.theme';

@Component({
    selector: 'ngx-entry',
    template: `<router-outlet></router-outlet>`
})
export class AppEntryComponent implements OnInit, OnDestroy, AppLocaleConfigListener, AppStyleConfigListener {

    private localeConfigStore$: Subscription = Subscription.EMPTY;
    private styleConfigStore$: Subscription = Subscription.EMPTY;

    constructor(
        protected _renderer: Renderer2,
        protected _zone: NgZone,
        protected _store: Store,

        @Inject(LOCALE_ID)
        protected _localeID: string
    ) {
        this.listenLocaleConfigChange();
        this.listenStyleConfigChange();
    }

    ngOnInit(): void {
        this._store.dispatch(AppLocaleConfigLoadAction());
        this._store.dispatch(AppStyleConfigLoadAction());
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
                .pipe(filter(state => state.action.length > 0))
                .subscribe(state =>
                    this._zone.run(() => {
                        if (state.action === AppLocaleConfigLoadDoneAction.type)
                            this._store.dispatch(AppLocaleConfigSaveAction({
                                locale: this._localeID
                            }));

                        if (state.action === AppLocaleConfigSaveDoneAction.type)
                            this.matchDatetimeByLocale(this._localeID);
                    }))
        });
    }

    listenStyleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.styleConfigStore$ = this._store
                .select(AppStyleFeatureSelector)
                .pipe(filter(state => state.action.length > 0))
                .subscribe(state =>
                    this._zone.run(() => {
                        if (state.action === AppStyleConfigLoadDoneAction.type) {
                            const model: AppStyleConfigModel = state.result as AppStyleConfigModel;
                            this.selectDarkMode(model.darkMode);
                            this.selectColorAndTheme(model.color, model.theme);

                            if (state.default)
                                this._store.dispatch(AppStyleConfigSaveAction(model));
                        }

                        if (state.action === AppStyleConfigSaveDoneAction.type)
                            this._store.dispatch(AppStyleConfigLoadAction());
                    }))
        });
    }

    private selectDarkMode(flag: boolean): void {
        const element = document.documentElement;

        if (Boolean(flag))
            addClassSelectors(element, this._renderer, 'p-dark-mode');
        else
            removeClassSelectors(element, this._renderer, 'p-dark-mode');
    }

    private selectColorAndTheme(color: AppStyleColorName, theme: AppStyleThemeName): void {
        switch (theme) {
            default:
            case 'aura': selectAuraPreset(color); break;
            case 'lara': selectLaraPreset(color); break;
            case 'material': selectMaterialPreset(color); break;
            case 'nora': selectNoraPreset(color); break;
        }
    }

    private matchDatetimeByLocale(locale: AppLocaleName | string): void {
        if (locale === 'en-US') updateLocaleToEnglish();

        if (locale === 'zh-CN') updateLocaleToChinese();
    }

}
