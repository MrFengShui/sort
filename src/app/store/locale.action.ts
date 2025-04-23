import { createAction, props } from "@ngrx/store";

import { AppLocaleReducerState } from "./locale.reducer";

import { AppLocaleConfigModel } from "../models/locale.model";

export const AppLocaleConfigLoadAction = createAction(
    '[App Locale Config] Load Action'
);

export const AppLocaleConfigLoadDoneAction = createAction(
    '[App Locale Config] Load Done Action',
    props<AppLocaleReducerState<AppLocaleConfigModel>>()
);

export const AppLocaleConfigSaveAction = createAction(
    '[App Locale Config] Save Action',
    props<AppLocaleConfigModel>()
);

export const AppLocaleConfigSaveDoneAction = createAction(
    '[App Locale Config] Save Done Action',
    props<AppLocaleReducerState<boolean>>()
);
