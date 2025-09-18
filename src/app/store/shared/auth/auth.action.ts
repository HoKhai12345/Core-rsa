import {createAction, props} from "@ngrx/store";

export const login = createAction(
  'Auth Login',
  props<{username: string, password: string }>()
)

export const switchUser = createAction(
  'Auth Switch',
  props<{id: number}>()
)

export const logout = createAction(
  'Auth Logout',
)

export const loginSuccess = createAction(
  'Auth Login Success',
  props<{ user: any; token: string }>()
)

export const loginFailed = createAction(
  'Auth Login Failed',
  props<{ error: any }>()
)

export const switchSuccess = createAction(
  'Auth Switch Success',
  props<{ user: any; token: string }>()
)

export const restoreData = createAction(
  'Auth Restore Success',
  props<{ user: any; token: string, originUser: any, originToken: string }>()
)
