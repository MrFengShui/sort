import { createAction, props } from "@ngrx/store";

import { NGXStoreReducerState } from "./store.state";

import { LocaleConfigModel } from "../models/locale.model";

export const NGXLocaleConfigInitAction = createAction(
    '[NGX Locale Config] Initialize Action'
);

export const NGXLocaleConfigInitDoneAction = createAction(
    '[NGX Locale Config] Initialize Done Action',
    props<NGXStoreReducerState<boolean>>()
);

export const NGXLocaleConfigLoadAction = createAction(
    '[NGX Locale Config] Load Action'
);

export const NGXLocaleConfigLoadDoneAction = createAction(
    '[NGX Locale Config] Load Done Action',
    props<NGXStoreReducerState<LocaleConfigModel>>()
);

export const NGXLocaleConfigSaveAction = createAction(
    '[NGX Locale Config] Save Action',
    props<LocaleConfigModel>()
);

export const NGXLocaleConfigSaveDoneAction = createAction(
    '[NGX Locale Config] Save Done Action',
    props<NGXStoreReducerState<boolean>>()
);
