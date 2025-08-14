import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as AuthActions from "../../../../store/shared/auth/auth.action";
import {BaseComponent} from "../../../../components/base/base.component";
import {AppState} from "../../../../store/app.state";
import {Router} from "@angular/router";
@Component({
  selector: 'app-base',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public override store: Store<AppState>,
    private router: Router
  ) {
    super(store);
    this.createFormLogin();

  }

  override ngOnInit(): void {
    if (this.currentUser) {
      this.router.navigate(['/core/dashboard']);
    }
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
    this.store.dispatch(AuthActions.login(this.myForm.value));
  }

}
