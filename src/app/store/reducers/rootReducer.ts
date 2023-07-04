import { messageReducer } from './appReducer';
import { ActionReducerMap } from '@ngrx/store';
import { IAppStore } from '../IAppStore';

export const RootReducer: ActionReducerMap<IAppStore> = {
    messageState: messageReducer
};
