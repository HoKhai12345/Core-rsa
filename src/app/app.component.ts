import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import { selectIsLoading } from './store/shared/loading/loading.selector';
import {ToastState} from "./store/shared/toast/toast.reducer";
import {selectIsToast} from "./store/shared/toast/toast.selector";
import {LoadingService} from "./services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  showLoading!: Observable<boolean>;
  showToast!: Observable<ToastState>

  constructor(
    public readonly loadingService: LoadingService,
    private readonly translate: TranslateService,
    private readonly store: Store,
  ) {
    this.title = this.translate.instant('common.title');
  }

  ngOnInit(): void {
    // this.showLoading = this.store.select(selectIsLoading);
    this.showToast = this.store.select(selectIsToast);
    setTimeout(() => {
      // this.store.dispatch(stopLoading())
      // this.toastService.success(this.translate.instant('common.title'), 'Success');
      // this.toastService.error(this.translate.instant('common.title'), 'Error');
      // this.toastService.warning(this.translate.instant('common.title'), 'Warning');
    }, 2000)
    // this.store.dispatch(startLoading())
  }

}
