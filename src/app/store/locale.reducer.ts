import { createReducer, on } from "@ngrx/store";

import { AppLocaleConfigLoadDoneAction, AppLocaleConfigSaveDoneAction } from "./locale.action";

import { AppLocaleConfigModel } from "../models/locale.model";

export interface AppLocaleReducerState<T = AppLocaleConfigModel | boolean> {

    action: string;
    result: T | null | undefined;

}

export const AppLocaleConfigReducer = createReducer<AppLocaleReducerState>(
    { action: '', result: undefined },
    on(AppLocaleConfigLoadDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
    on(AppLocaleConfigSaveDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
);
