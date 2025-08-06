import { createReducer, on } from "@ngrx/store";
import * as LoadingActions from './loading.action';

export interface LoadingState {
  loading: boolean;
}

export const initialState: LoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(LoadingActions.startLoading, state => ({ ...state, loading: true })),
  on(LoadingActions.stopLoading, state => ({ ...state, loading: false }))
);