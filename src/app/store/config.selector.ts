import { createFeatureSelector, createSelector } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

import { ConfigurationContentModel } from "../models/config.model";

export const NGX_CONFIGURATION_KEY: string = window.btoa('NGX_CONFIGURATION_KEY');

export interface NGXConfigurationFeatureState<D = unknown> {

    feature: NGXStoreReducerState<ConfigurationContentModel<D>>;

}

export const NGXConfigurationFeatureSelector = createSelector(
    createFeatureSelector(NGX_CONFIGURATION_KEY),
    (state: NGXConfigurationFeatureState) => state.feature
);
