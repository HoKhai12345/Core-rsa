import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/components/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ]

})

export class CoreModule {}
