import { createReducer, on } from "@ngrx/store";
import * as AuthActions from './auth.action';
import {restoreData} from "./auth.action";

export interface AuthState {
  user: any;
  token: string | null;
  isAuthenticated: boolean;
  originUser: any;
  originToken: string | null
}

export const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  originUser: null,
  originToken: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user, token }) => {
      return ({
        ...state,
        user,
        token,
        isAuthenticated: true,
        originUser: user,
        originToken: token
      })
  }
  ),
  on(AuthActions.switchSuccess, (state, { user, token }) => {
      return ({
        ...state,
        isAuthenticated: true,
        user,
        token
      })
    }
  ),
  on(AuthActions.restoreData, (state, { user, token, originUser, originToken }) => {
      return ({
        ...state,
        isAuthenticated: true,
        user,
        token,
        originUser,
        originToken
      })
    }
  ),
  on(AuthActions.loginFailed, (state, action) => {
    console.log('Reducer loginFailed triggered with action:', (action as any).type, action);
  return ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    originUser: null,
    originToken: null
  })
}),
  on(AuthActions.logout, (state, action) => {
    console.log('Reducer Logout triggered with action:', (action as any).type, action);
    return ({
      ...state,
      user: null,
      token: null,
      isAuthenticated: false,
      originUser: null,
      originToken: null
    })
  })
)
