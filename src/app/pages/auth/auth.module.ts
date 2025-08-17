import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "../../store/shared/auth/auth.reducer";
import {loadingReducer} from "../../store/shared/loading/loading.reducer";
import {toastReducer} from "../../store/shared/toast/toast.reducer";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ]),
    TranslateModule.forChild()
  ]

})

export class AuthModule {}
