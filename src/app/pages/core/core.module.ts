import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {BookingLocationComponent} from "./booking-location/components/booking-location.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
      { path: 'booking-location', component: BookingLocationComponent }
    ])
  ]

})

export class CoreModule {}
