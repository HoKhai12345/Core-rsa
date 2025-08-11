import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {ToastService} from "../../../../services/toast.service";
import {AuthenticationService} from "../../services/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as AuthActions from "../../../../store/shared/auth/auth.action";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(
    private router: Router,
    private toastService: ToastService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.createFormLogin();
  }

  ngOnInit(): void {}

  createFormLogin(): void {
    this.myForm = this.fb.group({
      username: ['hoquangkhai', [Validators.required, Validators.minLength(3)]],
      password: ['123456', [Validators.required, Validators.minLength(3)]],
    })
  }

  get username() {
    return this.myForm.get('username');
  }

  get password() {
    return this.myForm.get('password');
  }

  login() {
    const data = this.myForm.value;
    console.log("data", data);
    this.store.dispatch(AuthActions.login(this.myForm.value));
    //
    // this.authenticationService.login(data).then((result) => {
    //     if (result) {
    //       this.toastService.success("Đăng nhập thành công", 'Thông báo đăng nhập');
    //       this.router.navigate(['/dashboard'], {});
    //     } else {
    //       this.toastService.error("Đăng nhập thất bại", 'Thông báo đăng nhập');
    //     }
    // })
  }

}
