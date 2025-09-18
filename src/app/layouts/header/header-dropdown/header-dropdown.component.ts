import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {startLoading, stopLoading} from "../../../store/shared/loading/loading.action";
import {select, Store} from "@ngrx/store";
import {ToastService} from "../../../services/toast.service";
import {Router} from "@angular/router";
import {logout, switchUser} from "../../../store/shared/auth/auth.action";
import {BaseComponent} from "../../../components/base/base.component";
import {Observable, publish} from "rxjs";
import {AppState} from "../../../store/app.state";
import {UserModel} from "../../../models/user.model";
import {selectOriginUser, selectUser} from "../../../store/shared/auth/auth.selectors";

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.css']
})
export class HeaderDropdownComponent implements OnInit {
  currentUser$: Observable<UserModel> = this.store.pipe(select(selectUser));
  originUser$: Observable<UserModel> = this.store.pipe(select(selectOriginUser))
  @Input()
  type: 'chat' | 'notification' | 'setupUser' | 'setting' | null = null;
  @Output() close = new EventEmitter<void>();
  constructor(
    public  store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {}

  switch() {
    this.store.dispatch(switchUser({id: 2}))
  }

  logOut() {
    this.store.dispatch(startLoading())
    this.store.dispatch(logout())
    this.store.dispatch(stopLoading())
  }

}
