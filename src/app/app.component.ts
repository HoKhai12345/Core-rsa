import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ToastState} from "./store/shared/toast/toast.reducer";
import {LoadingService} from "./services/loading.service";
import {AuthenticationService} from "./pages/auth/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string;
  showLoading: Observable<boolean> = this.loadingService.isSelectLoading;
  showToast!: Observable<ToastState>

  constructor(
    public readonly loadingService: LoadingService,
    private readonly translate: TranslateService,
    private readonly store: Store,
    private authService: AuthenticationService
  ) {
    this.title = this.translate.instant('common.title');
    this.store.subscribe(state => {
      console.log('Current state:', state);
    });
  }

  ngOnInit(): void {
    this.authService.restoreAuth();
  }

  ngAfterViewInit(): void {
  }
}
