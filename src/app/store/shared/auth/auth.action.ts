import {createAction, props} from "@ngrx/store";

export const login = createAction(
  'Auth Login',
  props<{username: string, password: string }>()
)

export const loginSuccess = createAction(
  'Auth Login Success',
  props<{ user: any; token: string }>()
)

export const loginFailed = createAction(
  'Auth Login Failed',
  props<{ error: any }>()
)
