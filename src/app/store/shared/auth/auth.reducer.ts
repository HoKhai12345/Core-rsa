import { createReducer, on } from "@ngrx/store";
import * as AuthActions from './auth.action';

export interface AuthState {
  user: any;
  token: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user, token }) => {
      return ({
        ...state,
        user,
        token,
        isAuthenticated: true,
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
  })
}),
  on(AuthActions.logout, (state, action) => {
    console.log('Reducer Logout triggered with action:', (action as any).type, action);
    return ({
      ...state,
      user: null,
      token: null,
      isAuthenticated: false,
    })
  })
)
