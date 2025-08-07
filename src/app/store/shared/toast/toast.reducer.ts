import * as ToastAction from "./toast.action"
import {createReducer, on} from "@ngrx/store"

// 1. Khai báo interface trước
export interface ToastState {
  enabled: boolean;
  message: string;
}

// 2. Gán kiểu rõ ràng cho initialState
export const initialState: ToastState = {
  enabled: false,
  message: ''
};

// 3. Viết lại reducer
export const toastReducer = createReducer<ToastState>(
  initialState,
  on(ToastAction.enabledToast, (state: ToastState): ToastState => ({ ...state, enabled: true, message: 'Bật Toast' })),
  on(ToastAction.disabledToast, (state: ToastState): ToastState => ({ ...state, enabled: false, message: 'Tắt Toast' }))
);
