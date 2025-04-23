import { createAction, props } from '@ngrx/store';

import { AppStyleConfigModel } from '../models/style.model';
import { AppStyleReducerState } from './style.reducer';

export const AppStyleConfigLoadAction = createAction(
    '[App Style Config] Load Action'
);

export const AppStyleConfigLoadDoneAction = createAction(
    '[App Style Config] Load Done Action',
    props<AppStyleReducerState<AppStyleConfigModel>>()
);

export const AppStyleConfigSaveAction = createAction(
    '[App Style Config] Save Action',
    props<AppStyleConfigModel>()
);

export const AppStyleConfigSaveDoneAction = createAction(
    '[App Style Config] Save Done Action',
    props<AppStyleReducerState<boolean>>()
);
