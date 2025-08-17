import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.action';
import {catchError, exhaustMap, from, map, of, switchMap, tap} from 'rxjs';
import {AuthenticationService} from "../../../pages/auth/services/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";
import * as ToggleAction from '../toast/toast.action'
import {ToastService} from "../../../services/toast.service";
import {TranslateService} from "@ngx-translate/core";
import {LoadingService} from "../../../services/loading.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action =>  this.loadingService.show()),
      tap(action => console.log('Reducer login, type=', (action as any).type, action)),
      exhaustMap(({username, password}: { username: string, password: string }) =>
        from(this.authService.login({username, password})).pipe(
          map(res => {
            if (res) {
              this.toastService.success(this.trans.instant('common.auth.login.notification.loginSuccess'), this.trans.instant('common.alert'));
            }
            return AuthActions.loginSuccess({user: res.data.user, token: res.data.accessToken})
          }),
          tap(() => {
            this.router.navigate(['core/dashboard']);
          }),
          catchError((error: HttpErrorResponse) => {
              console.log("error", error);
            this.toastService.error(this.trans.instant('common.auth.login.notification.loginFailed'), this.trans.instant('common.alert'));
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
    private toastService: ToastService,
    private loadingService: LoadingService,
    private trans: TranslateService,
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
