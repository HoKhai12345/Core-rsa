import {createAction, props} from "@ngrx/store";

export const login = createAction(
  'Auth Login',
  props<{username: string, password: string }>()
)

export const loginSuccess = createAction(
  'Auth Login',
  props<{ user: any; token: string }>()
)

export const loginFailed = createAction(
  'Auth Login',
  props<{ error: any }>()
)
