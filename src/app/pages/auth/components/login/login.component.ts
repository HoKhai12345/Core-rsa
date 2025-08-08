import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {startLoading, stopLoading} from "../../../../store/shared/loading/loading.action";
import {Router} from "@angular/router";
import {ToastService} from "../../../../services/toast.service";
import {TranslateService} from "@ngx-translate/core";
import {LoadingService} from "../../../../services/loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private toastService: ToastService,
    private translate: TranslateService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {}

  login() {
    this.loadingService.show();
    setTimeout(() => {
      this.toastService.success(this.translate.instant('common.alert.loginSuccess'), 'Success');
      this.router.navigate(['/dashboard'], {});
      this.loadingService.hide()
    }, 2000)
  }

}
