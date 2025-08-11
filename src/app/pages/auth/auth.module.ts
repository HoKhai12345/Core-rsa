import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ]),
    TranslateModule,
    ReactiveFormsModule
  ]

})

export class AuthModule {}
