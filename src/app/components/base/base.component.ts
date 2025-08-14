import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {UserModel} from "../../models/user.model";
import {AppState} from "../../store/app.state";
@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy {
  currentUser: UserModel | undefined;
  constructor(
    public store: Store<AppState>
  ) {
    this.store.subscribe((state) => {
      this.currentUser = state?.auth.user
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
