import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs";

import { NGXAuthUserInfoService } from "../services/auth.service";

import { NGXAuthenticationAction, NGXAuthenticationDoneAction, NGXAuthenticationFetchAction, NGXAuthenticationFetchDoneAction, NGXAuthorizationAction, NGXAuthorizationDoneAction, NGXAuthorizationFetchAction, NGXAuthorizationFetchDoneAction, NGXAuthorizationInitializeAction, NGXAuthorizationInitializeDoneAction, NGXAuthorizationStoreAction, NGXAuthorizationStoreDoneAction } from "./auth.action";

@Injectable()
export class NGXAuthUserInfoEffect {

    authentication$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXAuthenticationAction),
            exhaustMap(action =>
                this._service.authenticate(action.data)
                    .pipe(
                        map(value => NGXAuthenticationDoneAction({
                            action: NGXAuthenticationDoneAction.type,
                            message: value ? $localize`:@@login.page.authentication.success:Congratulations, you are authorized successfully.` : $localize`:@@login.page.authentication.failure:Sorry, the authentication is failed. Please check the username and/or the password you entered.`,
                            result: value
                        })),
                        catchError(async () => NGXAuthenticationDoneAction({
                            action: NGXAuthenticationDoneAction.type,
                            message: $localize`:@@login.page.authentication.error:Oops...something wrong happens during signing in.`,
                            result: undefined
                        }))
                    ))
        ));

    fetchAuthentication$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXAuthenticationFetchAction),
            exhaustMap(action =>
                this._service.fetchSelectedInfoByOrder(action.data)
                    .pipe(
                        map(value => NGXAuthenticationFetchDoneAction({
                            action: NGXAuthenticationFetchDoneAction.type,
                            message: value ? $localize`:@@login.page.authentication.fetch.success:Congratulations, you are authorized successfully.` : $localize`:@@login.page.authentication.fetch.failure:Sorry, the authentication is failed. Please check the username and/or the password you entered.`,
                            result: value
                        })),
                        catchError(async () => NGXAuthenticationFetchDoneAction({
                            action: NGXAuthenticationFetchDoneAction.type,
                            message: $localize`:@@login.page.authentication.fetch.error:Oops...something wrong happens during fetching authentication information`,
                            result: undefined
                        }))
                    ))
        ));

    authorization$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXAuthorizationAction),
            exhaustMap(action =>
                this._service.authorize(action.data)
                    .pipe(
                        map(value => NGXAuthorizationDoneAction({
                            action: NGXAuthorizationDoneAction.type,
                            result: value
                        })),
                        catchError(async () => NGXAuthorizationDoneAction({
                            action: NGXAuthorizationDoneAction.type,
                            message: $localize`:@@login.page.authorization.error:Oops...something wrong happens during authorizing.`,
                            result: undefined
                        }))
                    ))
        ));

    fetchAuthorization$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXAuthorizationFetchAction),
            exhaustMap(() =>
                this._service.fetch()
                    .pipe(
                        map(value => NGXAuthorizationFetchDoneAction({
                            action: NGXAuthorizationFetchDoneAction.type,
                            result: value
                        })),
                        catchError(async () => NGXAuthorizationFetchDoneAction({
                            action: NGXAuthorizationFetchDoneAction.type,
                            message: $localize`:@@login.page.authorization.fetch.error:Oops...something wrong happens during fetching authorization infomation.`,
                            result: undefined
                        }))
                    ))
        ));

    storeAuthorization$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXAuthorizationStoreAction),
            exhaustMap(action =>
                this._service.store(action.data)
                    .pipe(
                        map(value => NGXAuthorizationStoreDoneAction({
                            action: NGXAuthorizationStoreDoneAction.type,
                            result: value
                        })),
                        catchError(async () => NGXAuthorizationStoreDoneAction({
                            action: NGXAuthorizationStoreDoneAction.type,
                            message: $localize`:@@login.page.authorization.store.error:Oops...something wrong happens during storing authorization infomation.`,
                            result: false
                        }))
                    ))
        ));

    initAuthorization$ = createEffect(() =>
        this._actions.pipe(
            ofType(NGXAuthorizationInitializeAction),
            exhaustMap(action =>
                this._service.store({ order: Math.floor(Math.random() * action.data), token: '', prevTime: -1, currTime: -1 })
                    .pipe(
                        map(value => NGXAuthorizationInitializeDoneAction({
                            action: NGXAuthorizationInitializeDoneAction.type,
                            result: value
                        })),
                        catchError(async () => NGXAuthorizationInitializeDoneAction({
                            action: NGXAuthorizationInitializeDoneAction.type,
                            message: $localize`:@@login.page.authorization.init.error:Oops...something wrong happens during initializing authorization information.`,
                            result: false
                        }))
                    ))
        ));

    constructor(
        protected _actions: Actions,
        protected _service: NGXAuthUserInfoService
    ) { }

}


