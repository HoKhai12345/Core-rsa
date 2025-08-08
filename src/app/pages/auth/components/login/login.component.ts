import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {startLoading, stopLoading} from "../../../../store/shared/loading/loading.action";
import {Router} from "@angular/router";
import {ToastService} from "../../../../services/toast.service";
import {TranslateService} from "@ngx-translate/core";
import {LoadingService} from "../../../../services/loading.service";
import {AuthenticationService} from "../../services/authentication.service";

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
    private loadingService: LoadingService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {}

  login() {
    const data = {
      "username": "hoquangkhai",
      "password": "123456"
    }
    this.authenticationService.login(data).then((result) => {
        if (result) {
          this.router.navigate(['/dashboard'], {});
        }
    })
  }

}
