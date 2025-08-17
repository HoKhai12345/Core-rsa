import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {select, Store} from "@ngrx/store";
import {selectUser} from "../../store/shared/auth/auth.selectors";
import {globalConfig} from "../../global";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  currentUser$: Observable<UserModel> = this.store.pipe(select(selectUser));
  constructor(
    public router: Router,
    public store: Store,
  ) {
    this.currentUser$.subscribe((user) => {
        console.log("user", user);
    })
  }
  ngOnInit(): void {}

  redirect(url: string) {
    this.router.navigate([url], {});
    // tắt sidebar
    const drawerToggle = document.getElementById('my-drawer') as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false; // Đóng drawer
    }
  }

  public readonly globalConfig = globalConfig;
}
