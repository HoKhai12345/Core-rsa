import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "./store/app.state";
import {getLoading} from "./store/shared/shared.selector";

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
    private readonly store: Store<AppState>
  ) {
    this.title = this.translate.instant('common.title');
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    console.log("this.showLoading", this.showLoading);
  }

}
