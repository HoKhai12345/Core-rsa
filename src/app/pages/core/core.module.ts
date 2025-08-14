import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {BookingLocationComponent} from "./booking-location/components/booking-location.component";
import {AuthGuards} from "../../guards/auth.guards";
import {SharedModule} from "../../shared/shared.module";
import {RolesComponent} from "./admin/roles/components/roles.component";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [DashboardComponent, BookingLocationComponent, RolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuards]},
      {path: 'admin/roles', component: RolesComponent, canActivate: [AuthGuards]},
      {path: 'booking-location', component: BookingLocationComponent}
    ]),
    NgSelectModule
  ]
})
export class CoreModule {}
