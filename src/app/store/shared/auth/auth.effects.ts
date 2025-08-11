import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.action';
import {catchError, from, map, mergeMap, of, tap} from 'rxjs';
import {AuthenticationService} from "../../../pages/auth/services/authentication.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ username, password }: { username: string, password: string}) =>
        from(this.authService.login({username, password})).pipe(
          map(res => AuthActions.loginSuccess({ user: res.user, token: res.token })),
          catchError(error => of(AuthActions.loginFailed({ error })))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  // /** LOGOUT */
  // logout$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.logout),
  //       tap(() => {
  //         localStorage.removeItem('token');
  //         localStorage.removeItem('user');
  //       })
  //     ),
  //   { dispatch: false }
  // );
  //
  // /** INIT AUTH STATE KHI F5 */
  // initAuth$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.initAuth), // action này mình sẽ dispatch ở APP_INITIALIZER
  //     map(() => {
  //       const token = localStorage.getItem('token');
  //       const userStr = localStorage.getItem('user');
  //       if (token && userStr) {
  //         const user = JSON.parse(userStr);
  //         return AuthActions.loginSuccess({ user, token });
  //       }
  //       return AuthActions.logout();
  //     })
  //   )
  // );
}
