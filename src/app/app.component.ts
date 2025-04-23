import { Component, Inject, LOCALE_ID, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { usePreset } from '@primeng/themes';
import { filter, Subscription } from 'rxjs';

import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import Material from '@primeng/themes/material';
import Nora from '@primeng/themes/nora';

import { AppStyleConfigModel, AppStyleName } from './models/style.model';
import { AppLocaleName } from './models/locale.model';

import { addClassSelectors, removeClassSelectors } from './share/selector.utils';
import { updateLocaleToChinese, updateLocaleToEnglish } from './share/datetime.utils';

import { AppLocaleConfigListener, AppStyleConfigListener } from './interfaces/config.interface';

import { AppStyleFeatureSelector } from './store/style.selector';
import { AppStyleConfigLoadAction, AppStyleConfigLoadDoneAction, AppStyleConfigSaveAction, AppStyleConfigSaveDoneAction } from './store/style.action';
import { AppLocaleFeatureSelector } from './store/locale.selector';
import { AppLocaleConfigLoadAction, AppLocaleConfigLoadDoneAction, AppLocaleConfigSaveAction, AppLocaleConfigSaveDoneAction } from './store/locale.action';

@Component({
<<<<<<< Updated upstream
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sort';
=======
    selector: 'ngx-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy, AppLocaleConfigListener, AppStyleConfigListener {

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
                            this.selectAndLoadTheme(model.theme);

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

        if (Boolean(flag).valueOf())
            addClassSelectors(element, this._renderer, 'ngx-dark-mode');
        else
            removeClassSelectors(element, this._renderer, 'ngx-dark-mode');
    }

    private selectAndLoadTheme(type: AppStyleName | undefined): void {
        switch (type) {
            case 'aura': usePreset(Aura); break;
            case 'lara': usePreset(Lara); break;
            case 'material': usePreset(Material); break;
            case 'nora': usePreset(Nora); break;
        }
    }

    private matchDatetimeByLocale(locale: AppLocaleName | string): void {
        if (locale === 'en-US') updateLocaleToEnglish();

        if (locale === 'zh-CN') updateLocaleToChinese();
    }

>>>>>>> Stashed changes
}
