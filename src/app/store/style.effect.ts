import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs";

import { NGXStyleConfigService } from "../services/style.service";

import { NGXStyleConfigInitAction, NGXStyleConfigInitDoneAction, NGXStyleConfigLoadAction, NGXStyleConfigLoadDoneAction, NGXStyleConfigSaveAction, NGXStyleConfigSaveDoneAction } from "./style.action";

@Injectable()
export class NGXStyleConfigEffect {

    init$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXStyleConfigInitAction),
            exhaustMap(() =>
                this._service.saveStyleConfig({ color: 'violet', darkMode: false, theme: 'lara' })
                    .pipe(
                        map(value => NGXStyleConfigInitDoneAction({
                            action: NGXStyleConfigInitDoneAction.type, result: value
                        })),
                        catchError(async () => NGXStyleConfigInitDoneAction({
                            action: NGXStyleConfigInitDoneAction.type, result: false
                        }))
                    ))
        ));

    load$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXStyleConfigLoadAction),
            exhaustMap(() =>
                this._service.loadStyleConfig()
                    .pipe(
                        map(value => NGXStyleConfigLoadDoneAction({
                            action: NGXStyleConfigLoadDoneAction.type, result: value || undefined
                        })),
                        catchError(async () => NGXStyleConfigLoadDoneAction({
                            action: NGXStyleConfigLoadDoneAction.type, result: undefined
                        }))
                    ))
        ));

    save$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXStyleConfigSaveAction),
            exhaustMap(action =>
                this._service.saveStyleConfig({ color: action.color, darkMode: action.darkMode, theme: action.theme })
                    .pipe(
                        map(value => NGXStyleConfigSaveDoneAction({
                            action: NGXStyleConfigSaveDoneAction.type, result: value
                        })),
                        catchError(async () => NGXStyleConfigSaveDoneAction({
                            action: NGXStyleConfigSaveDoneAction.type, result: false
                        }))
                    ))
        ));

    constructor(
        protected _actions: Actions,
        protected _service: NGXStyleConfigService
    ) { }

}

