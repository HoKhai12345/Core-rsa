import { createAction } from "@ngrx/store";

export const enabledToast = createAction(
    '[Toast] Enabled');
export const disabledToast = createAction('[Toast] Disabled');

