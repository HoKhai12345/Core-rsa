import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ToastActions from './toast.action';
import {delay, exhaustMap, tap} from 'rxjs';
import {AuthenticationService} from "../../../pages/auth/services/authentication.service";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../services/toast.service";

@Injectable()
export class ToastEffects {

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
}
