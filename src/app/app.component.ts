import {AfterViewInit, Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
  title: string;
  showLoading: Observable<boolean> = this.loadingService.isSelectLoading;
  showToast!: Observable<ToastState>

  constructor(
    public readonly loadingService: LoadingService,
    private readonly translate: TranslateService,
    private readonly store: Store,
  ) {
    this.title = this.translate.instant('common.title');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }
}
