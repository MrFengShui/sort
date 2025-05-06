import { createFeatureSelector, createSelector } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

export const NGX_AUTH_USER_INFO_KEY: string = window.btoa('NGX_AUTH_USER_INFO_KEY');

export interface NGXAuthUserInfoFeatureState {

    feature: NGXStoreReducerState;

}

export const NGXAuthUserInfoFeatureSelector = createSelector(
    createFeatureSelector(NGX_AUTH_USER_INFO_KEY),
    (state: NGXAuthUserInfoFeatureState) => state.feature
);
