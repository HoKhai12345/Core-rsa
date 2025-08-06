import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import { selectIsLoading } from './store/shared/loading/loading.selector';
import { startLoading, stopLoading } from './store/shared/loading/loading.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  showLoading!: Observable<boolean>;

  constructor(
    private readonly translate: TranslateService,
    private readonly store: Store
  ) {
    this.title = this.translate.instant('common.title');
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(selectIsLoading);
    console.log("this.showLoading", this.showLoading);

    setTimeout(() => {
      console.log(1111);
      this.store.dispatch(stopLoading())

    }, 2000)
    console.log(2222);
    this.store.dispatch(startLoading())


  }

}
