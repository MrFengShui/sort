import { createReducer, on } from "@ngrx/store";

import { NGXLocaleConfigInitDoneAction, NGXLocaleConfigLoadDoneAction, NGXLocaleConfigSaveDoneAction } from "./locale.action";
import { NGXStoreReducerState } from "./store.state";

import { LocaleConfigModel } from "../models/locale.model";

export const NGXLocaleConfigReducer = createReducer<NGXStoreReducerState<LocaleConfigModel | boolean>>(
    { action: '', result: undefined },
    on(NGXLocaleConfigInitDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
    on(NGXLocaleConfigLoadDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
    on(NGXLocaleConfigSaveDoneAction, (state, props) =>
        ({ ...state, action: props.action, result: props.result })),
);
