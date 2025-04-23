import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs";

import { AppLocaleConfigService } from "../services/locale.service";

import { AppLocaleConfigLoadAction, AppLocaleConfigLoadDoneAction, AppLocaleConfigSaveAction, AppLocaleConfigSaveDoneAction } from "./locale.action";

@Injectable()
export class AppLocaleConfigEffect {

    load$ = createEffect(() =>
        this._actions.pipe(
            ofType(AppLocaleConfigLoadAction),
            exhaustMap(() =>
                this._service.loadLocaleConfig()
                    .pipe(
                        map(value => AppLocaleConfigLoadDoneAction({
                            action: AppLocaleConfigLoadDoneAction.type,
                            result: value
                        })),
                        catchError(async () => AppLocaleConfigLoadDoneAction({
                            action: AppLocaleConfigLoadDoneAction.type,
                            result: null
                        }))
                    ))
        ));

    save$ = createEffect(() =>
        this._actions.pipe(
            ofType(AppLocaleConfigSaveAction),
            exhaustMap(action =>
                this._service.saveLocaleConfig({ locale: action.locale })
                    .pipe(
                        map(value => AppLocaleConfigSaveDoneAction({
                            action: AppLocaleConfigSaveDoneAction.type,
                            result: value
                        })),
                        catchError(async () => AppLocaleConfigSaveDoneAction({
                            action: AppLocaleConfigSaveDoneAction.type,
                            result: false
                        }))
                    ))
        ));

    constructor(
        protected _actions: Actions,

        @Inject(LOCALE_ID)
        protected _localeID: string,

        protected _service: AppLocaleConfigService
    ) { }

}

