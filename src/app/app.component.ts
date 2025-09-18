import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ToastState} from "./store/shared/toast/toast.reducer";
import {LoadingService} from "./services/loading.service";
import {AuthenticationService} from "./pages/auth/services/authentication.service";
import {selectIsLoading} from "./store/shared/loading/loading.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string;
  loading: boolean = false;
  showLoading: Observable<boolean> = this.store.select(selectIsLoading);
  showToast!: Observable<ToastState>

  constructor(
    public readonly loadingService: LoadingService,
    private readonly translate: TranslateService,
    private readonly store: Store,
    private authService: AuthenticationService
  ) {
    this.title = this.translate.instant('common.title');

    this.showLoading.subscribe(loading => {
/*
      this.loading = loading;
      console.log('Loading state changed:====', loading);
*/
    });

    this.store.subscribe(state => {
      console.log('Current state:', state);
    });
  }

  ngOnInit(): void {
    this.authService.restoreAuth();
  }

  ngAfterViewInit(): void {}
}
