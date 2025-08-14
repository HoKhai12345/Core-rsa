import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.action';
import {catchError, from, map, mergeMap, of, switchMap, tap} from 'rxjs';
import {AuthenticationService} from "../../../pages/auth/services/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => console.log('Reducer login, type=', (action as any).type, action)),
      switchMap(({username, password}: { username: string, password: string }) =>
        from(this.authService.login({username, password})).pipe(
          map(res => {
            return AuthActions.loginSuccess({user: res.data.user, token: res.data.accessToken})
          }),
          tap(() => {
            this.router.navigate(['core/dashboard']);
          }),
          catchError((error: HttpErrorResponse) => {
              console.log("error", error);
              return of(AuthActions.loginFailed({error: error.message}))
            }
          )
        )
      )
    )
    // ,{dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  saveAuthData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ user, token }) => {
      this.localStorage.set('current_user', JSON.stringify(user));
      this.localStorage.set('token', token);
      })
    ),
    { dispatch: false } // Đặt dispatch là false vì effect này không cần dispatch action mới
  )

  /** LOGOUT */
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.localStorage.delete('token');
          this.localStorage.delete('current_user');
          this.router.navigate(['/auth/login']);
        })
      ),
    { dispatch: false }
  );

  /** INIT AUTH STATE KHI F5 */
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
