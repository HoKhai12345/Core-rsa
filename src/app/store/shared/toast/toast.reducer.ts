import { TranslateService } from "@ngx-translate/core"
import { on } from "events"
import * as toastAction from "./toast.action"
import { createReducer } from "@ngrx/store"
export interface ToastState {
    enabled: boolean,
    message: string
}

export class ToastComponent {
    constructor(
        private translate: TranslateService
    ) {

    }
}

export const initialState: ToastState = {
    enabled: false,
    message: ''
}

export const toastReducer = createReducer(
    initialState,
    on(toastAction.enabledToast, (state, action) => ({
      ...state,
      enabled: true,
      message: action.message
    })),
    on(toastAction.disabledToast, state => ({
      ...state,
      enabled: false,
      message: ''
    }))
  );