import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStyleReducerState } from "./style.reducer";

export const APP_STYLE_FEATURE_KEY: string = 'APP_STYLE_FEATURE';

export interface AppStyleFeatureState {

    feature: AppStyleReducerState;

}

export const AppStyleFeatureSelector = createSelector(
    createFeatureSelector(APP_STYLE_FEATURE_KEY),
    (state: AppStyleFeatureState) => state.feature
);
