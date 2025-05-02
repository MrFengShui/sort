import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs";

import { NGXConfigurationContentService } from "../services/config.service";

import { NGXConfigurationLoadAction, NGXConfigurationLoadFailureAction, NGXConfigurationLoadSuccessAction } from "./config.action";

@Injectable()
export class NGXConfigurationEffect {

    load$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXConfigurationLoadAction),
            exhaustMap(action =>
                this._service.read(action.url)
                    .pipe(
                        map(value => NGXConfigurationLoadSuccessAction({
                            action: NGXConfigurationLoadSuccessAction.type,
                            result: value
                        })),
                        catchError(async () => NGXConfigurationLoadFailureAction({
                            action: NGXConfigurationLoadFailureAction.type,
                            message: ''
                        }))
                    ))
        ));

    constructor(
        protected _actions: Actions,
        protected _service: NGXConfigurationContentService
    ) { }

}


