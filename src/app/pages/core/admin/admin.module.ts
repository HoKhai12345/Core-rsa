import {NgModule} from "@angular/core";
import {RolesComponent} from "./roles/components/roles.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [RolesComponent],
  imports: [RouterModule],
  exports: []
})

export class AdminModule {}
