import { createReducer, on } from "@ngrx/store";

import { NGXConfigurationLoadFailureAction, NGXConfigurationLoadSuccessAction } from "./config.action";
import { NGXStoreReducerState } from "./store.state";

import { ConfigurationContentModel } from "../models/config.model";

export const NGXConfigurationReducer = createReducer<NGXStoreReducerState<ConfigurationContentModel>>(
    { action: '', result: undefined },
    on(NGXConfigurationLoadSuccessAction, (state, props) =>
        ({ ...state, action: props.action, message: undefined, result: props.result })),
    on(NGXConfigurationLoadFailureAction, (state, props) =>
        ({ ...state, action: props.action, message: props.message, result: undefined })),
);
