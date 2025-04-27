import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, Subscription } from "rxjs";

import { AppStyleConfigModel } from "../../models/style.model";

import { AppStyleConfigListener } from "../../interfaces/config.interface";

import { AppStyleFeatureSelector } from "../../store/style.selector";
import { AppStyleConfigLoadDoneAction, AppStyleConfigSaveAction } from "../../store/style.action";

@Component({
    selector: 'ngx-main-page',
    templateUrl: './main.component.html'
})
export class AppMainPageComponent implements OnInit, OnDestroy, AppStyleConfigListener {

    protected styleConfig: AppStyleConfigModel | undefined;

    private theme$: Subscription = Subscription.EMPTY;

    constructor(
        protected _zone: NgZone,
        protected _store: Store
    ) {
        this.listenStyleConfigChange();
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        if (!this.theme$.closed) this.theme$.unsubscribe();
    }

    listenStyleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.theme$ = this._store.select(AppStyleFeatureSelector)
                .pipe(filter(state => state.action === AppStyleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        if (this.styleConfig) {
                            const model: AppStyleConfigModel = state.result as AppStyleConfigModel;
                            this.styleConfig.color = model.color;
                            this.styleConfig.darkMode = model.darkMode;
                            this.styleConfig.theme = model.theme;
                        }
                    }));
        });
    }

    protected listenDarkModeChange(flag: boolean | undefined): void {
        if (this.styleConfig)
            this._store.dispatch(AppStyleConfigSaveAction({
                ...this.styleConfig,
                darkMode: Boolean(flag)
            }));
    }

}
