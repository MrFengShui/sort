import { createAction, props } from '@ngrx/store';

import { NGXStoreReducerState } from './store.state';

import { StyleConfigModel } from '../models/style.model';

export const NGXStyleConfigInitAction = createAction(
    '[NGX Style Config] Initialize Action'
);

export const NGXStyleConfigInitDoneAction = createAction(
    '[NGX Style Config] Initialize Done Action',
    props<NGXStoreReducerState<boolean>>()
);

export const NGXStyleConfigLoadAction = createAction(
    '[NGX Style Config] Load Action'
);

export const NGXStyleConfigLoadDoneAction = createAction(
    '[NGX Style Config] Load Done Action',
    props<NGXStoreReducerState<StyleConfigModel>>()
);

export const NGXStyleConfigSaveAction = createAction(
    '[NGX Style Config] Save Action',
    props<StyleConfigModel>()
);

export const NGXStyleConfigSaveDoneAction = createAction(
    '[NGX Style Config] Save Done Action',
    props<NGXStoreReducerState<boolean>>()
);
