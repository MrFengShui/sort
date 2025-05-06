import { createReducer, on } from "@ngrx/store";

import { NGXAuthenticationDoneAction, NGXAuthenticationFetchDoneAction, NGXAuthorizationDoneAction, NGXAuthorizationFetchDoneAction, NGXAuthorizationInitializeDoneAction, NGXAuthorizationStoreDoneAction, } from "./auth.action";
import { NGXStoreReducerState } from "./store.state";

export const NGXAuthUserInfoReducer = createReducer<NGXStoreReducerState<unknown>>(
    { action: '', message: undefined, result: undefined },
    on(NGXAuthenticationDoneAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: props.result })),
    on(NGXAuthenticationFetchDoneAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: props.result })),
    on(NGXAuthorizationDoneAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: props.result })),
    on(NGXAuthorizationFetchDoneAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: props.result })),
    on(NGXAuthorizationStoreDoneAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: props.result })),
    on(NGXAuthorizationInitializeDoneAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: props.result }))
);
