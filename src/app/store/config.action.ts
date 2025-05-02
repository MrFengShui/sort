import { createAction, props } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

import { ConfigurationContentModel } from "../models/config.model";

export const NGXConfigurationLoadAction = createAction(
    '[NGX Configuration File] Load Action',
    props<{ url: string }>()
);

export const NGXConfigurationLoadSuccessAction = createAction(
    '[NGX Configuration File] Load Success Action',
    props<NGXStoreReducerState<ConfigurationContentModel>>()
);

export const NGXConfigurationLoadFailureAction = createAction(
    '[NGX Configuration File] Load Failure Action',
    props<NGXStoreReducerState>()
);
