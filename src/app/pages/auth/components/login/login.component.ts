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
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.createFormLogin();
  }

  ngOnInit(): void {
    console.log("vào lại cpn");
  }

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
  }

}
