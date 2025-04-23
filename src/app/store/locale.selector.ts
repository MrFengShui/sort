import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppLocaleReducerState } from "./locale.reducer";

export const APP_LOCALE_FEATURE_KEY: string = 'APP_LOCALE_FEATURE';

export interface AppLocaleFeatureState {

    feature: AppLocaleReducerState;

}

export const AppLocaleFeatureSelector = createSelector(
    createFeatureSelector(APP_LOCALE_FEATURE_KEY),
    (state: AppLocaleFeatureState) => state.feature
);
