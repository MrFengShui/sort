import { createReducer, on } from "@ngrx/store";

import { AppStyleConfigLoadDoneAction, AppStyleConfigSaveDoneAction } from "./style.action";

import { AppStyleConfigModel } from "../models/style.model";

export interface AppStyleReducerState<T = AppStyleConfigModel | boolean> {

    action: string;
    default: boolean;
    result: T | undefined;

}

export const AppStyleConfigReducer = createReducer<AppStyleReducerState>(
    { action: '', default: true, result: undefined },
    on(AppStyleConfigLoadDoneAction, (state, props) =>
        ({ ...state, action: props.action, default: props.default, result: props.result })),
    on(AppStyleConfigSaveDoneAction, (state, props) =>
        ({ ...state, action: props.action, default: props.default, result: props.result }))
);
