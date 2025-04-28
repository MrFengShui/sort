import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs";

import { NGXLocaleConfigService } from "../services/locale.service";

import { NGXLocaleConfigInitAction, NGXLocaleConfigInitDoneAction, NGXLocaleConfigLoadAction, NGXLocaleConfigLoadDoneAction, NGXLocaleConfigSaveAction, NGXLocaleConfigSaveDoneAction } from "./locale.action";

@Injectable()
export class NGXLocaleConfigEffect {

    init$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXLocaleConfigInitAction),
            exhaustMap(() =>
                this._service.saveLocaleConfig({ locale: 'en-US' })
                    .pipe(
                        map(value => NGXLocaleConfigInitDoneAction({
                            action: NGXLocaleConfigInitDoneAction.type,
                            result: value
                        })),
                        catchError(async () => NGXLocaleConfigInitDoneAction({
                            action: NGXLocaleConfigInitDoneAction.type,
                            result: false
                        }))
                    ))
        ));

    load$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXLocaleConfigLoadAction),
            exhaustMap(() =>
                this._service.loadLocaleConfig()
                    .pipe(
                        map(value => NGXLocaleConfigLoadDoneAction({
                            action: NGXLocaleConfigLoadDoneAction.type,
                            result: value || undefined
                        })),
                        catchError(async () => NGXLocaleConfigLoadDoneAction({
                            action: NGXLocaleConfigLoadDoneAction.type,
                            result: undefined
                        }))
                    ))
        ));

    save$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXLocaleConfigSaveAction),
            exhaustMap(action =>
                this._service.saveLocaleConfig({ locale: action.locale })
                    .pipe(
                        map(value => NGXLocaleConfigSaveDoneAction({
                            action: NGXLocaleConfigSaveDoneAction.type,
                            result: value
                        })),
                        catchError(async () => NGXLocaleConfigSaveDoneAction({
                            action: NGXLocaleConfigSaveDoneAction.type,
                            result: false
                        }))
                    ))
        ));

    constructor(
        protected _actions: Actions,

        @Inject(LOCALE_ID)
        protected _localeID: string,

        protected _service: NGXLocaleConfigService
    ) { }

}

