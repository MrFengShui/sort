import { createReducer, on } from "@ngrx/store";

import { NGXStyleConfigInitDoneAction, NGXStyleConfigLoadDoneAction, NGXStyleConfigSaveDoneAction } from "./style.action";
import { NGXStoreReducerState } from "./store.state";

import { StyleConfigModel } from "../models/style.model";

export const NGXStyleConfigReducer = createReducer<NGXStoreReducerState<StyleConfigModel | boolean>>(
    { action: '', result: undefined },
    on(NGXStyleConfigInitDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
    on(NGXStyleConfigLoadDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
    on(NGXStyleConfigSaveDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result }))
);
