import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {loadingReducer} from "../../../store/shared/loading/loading.reducer";
import {toastReducer} from "../../../store/shared/toast/toast.reducer";
import {authReducer} from "../../../store/shared/auth/auth.reducer";
import {AuthEffects} from "../../../store/shared/auth/auth.effects";
import {SharedModule} from "../../../shared/shared.module";
import {BookingLocationComponent} from "./components/booking-location.component";

@NgModule({
  declarations: [BookingLocationComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('booking-location', {
      auth: authReducer,
      loading: loadingReducer,
      toast: toastReducer
    }),
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forChild([
      {path: '', component: BookingLocationComponent}
    ])
  ],
  exports: [BookingLocationComponent]
})

export class BookingLocationModule {}
