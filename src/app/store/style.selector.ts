import { createFeatureSelector, createSelector } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

import { StyleConfigModel } from "../models/style.model";

export const NGX_STYLE_FEATURE_KEY: string = window.btoa('NGX_STYLE_FEATURE_KEY');

export interface NGXStyleFeatureState {

    feature: NGXStoreReducerState<StyleConfigModel | boolean>;

}

export const NGXStyleFeatureSelector = createSelector(
    createFeatureSelector(NGX_STYLE_FEATURE_KEY),
    (state: NGXStyleFeatureState) => state.feature
);
