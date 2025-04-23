import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs";

import { AppStyleConfigService } from "../services/style.service";

import { AppStyleConfigLoadAction, AppStyleConfigLoadDoneAction, AppStyleConfigSaveAction, AppStyleConfigSaveDoneAction } from "./style.action";

import { AppStyleConfigModel } from "../models/style.model";

@Injectable()
export class AppStyleConfigEffect {

    private readonly APP_STYLE_DEFAULT_CONFIG: AppStyleConfigModel = { color: '', darkMode: false, theme: 'nora' };

    load$ = createEffect(() =>
        this._actions.pipe(
            ofType(AppStyleConfigLoadAction),
            exhaustMap(() =>
                this._service.loadStyleConfig()
                    .pipe(
                        map(value => AppStyleConfigLoadDoneAction({
                            action: AppStyleConfigLoadDoneAction.type,
                            default: !Boolean(value),
                            result: value || this.APP_STYLE_DEFAULT_CONFIG
                        })),
                        catchError(async () => AppStyleConfigLoadDoneAction({
                            action: AppStyleConfigLoadDoneAction.type,
                            default: true,
                            result: this.APP_STYLE_DEFAULT_CONFIG
                        }))
                    ))
        ));

    save$ = createEffect(() =>
        this._actions.pipe(
            ofType(AppStyleConfigSaveAction),
            exhaustMap(action =>
                this._service.saveStyleConfig({ color: action.color, darkMode: action.darkMode, theme: action.theme })
                    .pipe(
                        map(value => AppStyleConfigSaveDoneAction({
                            action: AppStyleConfigSaveDoneAction.type,
                            default: false, result: value
                        })),
                        catchError(async () => AppStyleConfigSaveDoneAction({
                            action: AppStyleConfigSaveDoneAction.type,
                            default: true, result: false
                        }))
                    ))
        ));

    constructor(
        protected _actions: Actions,
        protected _service: AppStyleConfigService
    ) { }

}

