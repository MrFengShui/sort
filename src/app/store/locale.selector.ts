import { createFeatureSelector, createSelector } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

import { LocaleConfigModel } from "../models/locale.model";

export const NGX_LOCALE_FEATURE_KEY: string = window.btoa('NGX_LOCALE_FEATURE_KEY');

export interface NGXLocaleFeatureState {

    feature: NGXStoreReducerState<LocaleConfigModel | boolean>;

}

export const NGXLocaleFeatureSelector = createSelector(
    createFeatureSelector(NGX_LOCALE_FEATURE_KEY),
    (state: NGXLocaleFeatureState) => state.feature
);
