import { createAction, props } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

import { AuthorizationStatusModel, AuthenticationMetainfoModel } from "../models/auth.model";

export const NGXAuthorizationFetchAction = createAction(
    '[NGX Authorization] Fetch Action'
);

export const NGXAuthorizationFetchDoneAction = createAction(
    '[NGX Authorization] Fetch Done Action',
    props<NGXStoreReducerState<AuthorizationStatusModel>>()
);

export const NGXAuthorizationStoreAction = createAction(
    '[NGX Authorization] Store Action',
    props<{ data: AuthorizationStatusModel }>()
);

export const NGXAuthorizationStoreDoneAction = createAction(
    '[NGX Authorization] Store Done Action',
    props<NGXStoreReducerState<boolean>>()
);

export const NGXAuthorizationInitializeAction = createAction(
    '[NGX Authorization] Initialize Action',
    props<{ data: number }>()
);

export const NGXAuthorizationInitializeDoneAction = createAction(
    '[NGX Authorization] Initialize Done Action',
    props<NGXStoreReducerState<boolean>>()
);

export const NGXAuthenticationAction = createAction(
    '[NGX Authentication] Action',
    props<{ data: AuthenticationMetainfoModel }>()
);

export const NGXAuthenticationDoneAction = createAction(
    '[NGX Authentication] Done Action',
    props<NGXStoreReducerState<string | undefined>>()
);

export const NGXAuthenticationFetchAction = createAction(
    '[NGX Authentication] Fetch Action',
    props<{ data: number }>()
);

export const NGXAuthenticationFetchDoneAction = createAction(
    '[NGX Authentication] Fetch Done Action',
    props<NGXStoreReducerState<AuthenticationMetainfoModel>>()
);

export const NGXAuthorizationAction = createAction(
    '[NGX Authorization] Action',
    props<{ data: string }>()
);

export const NGXAuthorizationDoneAction = createAction(
    '[NGX Authorization] Done Action',
    props<NGXStoreReducerState<AuthorizationStatusModel>>()
);
