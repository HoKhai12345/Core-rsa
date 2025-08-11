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
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
  })),
  on(AuthActions.loginFailed, state => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
  })));
