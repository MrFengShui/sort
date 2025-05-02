import { Component, Inject, LOCALE_ID, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';

import { StyleColorName, StyleConfigModel, StyleThemeName } from './models/style.model';
import { LocaleName } from './models/locale.model';

import { addClassSelectors, removeClassSelectors } from './share/selector.utils';
import { updateLocaleToChinese, updateLocaleToEnglish } from './share/datetime.utils';
import { assignHrefLink, APP_URL_HASH } from './share/location.utils';

import { NGXLocaleConfigListener, NGXStyleConfigListener } from './interfaces/config.interface';

import { NGXStyleFeatureSelector } from './store/style.selector';
import { NGXStyleConfigInitAction, NGXStyleConfigInitDoneAction, NGXStyleConfigLoadAction, NGXStyleConfigLoadDoneAction, NGXStyleConfigSaveAction, NGXStyleConfigSaveDoneAction } from './store/style.action';
import { NGXLocaleFeatureSelector } from './store/locale.selector';
import { NGXLocaleConfigInitDoneAction, NGXLocaleConfigLoadAction, NGXLocaleConfigLoadDoneAction, NGXLocaleConfigSaveAction, NGXLocaleConfigSaveDoneAction } from './store/locale.action';

import { selectAuraPreset } from './theme/aura.theme';
import { selectLaraPreset } from './theme/lara.theme';
import { selectMaterialPreset } from './theme/material.theme';
import { selectNoraPreset } from './theme/nora.theme';

@Component({
    selector: 'ngx-entry',
    template: `<router-outlet></router-outlet>`
})
export class AppEntryComponent implements OnInit, OnDestroy, NGXLocaleConfigListener, NGXStyleConfigListener {

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
        this._store.dispatch(NGXLocaleConfigLoadAction());
        this._store.dispatch(NGXStyleConfigLoadAction());
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
                .pipe(filter(state => state.action.length > 0))
                .subscribe(state =>
                    this._zone.run(() => {
                        if (state.action === NGXLocaleConfigInitDoneAction.type && Boolean(state.result))
                            window.location.replace(assignHrefLink('en-US', APP_URL_HASH));

                        if (state.action === NGXLocaleConfigLoadDoneAction.type && Boolean(state.result))
                            this._store.dispatch(NGXLocaleConfigSaveAction({
                                locale: this._localeID
                            }));

                        if (state.action === NGXLocaleConfigSaveDoneAction.type && Boolean(state.result))
                            this.matchDatetimeByLocale(this._localeID);
                    }))
        });
    }

    listenStyleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.styleConfigStore$ = this._store
                .select(NGXStyleFeatureSelector)
                .pipe(filter(state => state.action.length > 0))
                .subscribe(state =>
                    this._zone.run(() => {
                        if (state.action === NGXStyleConfigInitDoneAction.type && Boolean(state.result))
                            this._store.dispatch(NGXStyleConfigLoadAction());

                        if (state.action === NGXStyleConfigLoadDoneAction.type && Boolean(state.result)) {
                            const model: StyleConfigModel = state.result as StyleConfigModel;
                            this.selectDarkMode(model.darkMode);
                            this.selectColorAndTheme(model.color, model.theme);
                        }

                        if (state.action === NGXStyleConfigSaveDoneAction.type && Boolean(state.result))
                            this._store.dispatch(NGXStyleConfigLoadAction());
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

    private selectColorAndTheme(color: StyleColorName, theme: StyleThemeName): void {
        switch (theme) {
            default:
            case 'aura': selectAuraPreset(color); break;
            case 'lara': selectLaraPreset(color); break;
            case 'material': selectMaterialPreset(color); break;
            case 'nora': selectNoraPreset(color); break;
        }
    }

    private matchDatetimeByLocale(locale: LocaleName | string): void {
        if (locale === 'en-US') updateLocaleToEnglish();

        if (locale === 'zh-CN') updateLocaleToChinese();
    }

}
