import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ToastState} from "./toast.reducer";

export const selectToastState = createFeatureSelector<ToastState>('toast')



export const selectIsToast = createSelector(
  selectToastState,
  (state: ToastState) => {
    return { enabled: state.enabled, message: ''}
  }
)

