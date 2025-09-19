import {Injectable} from "@angular/core";
import {HttpService} from "../../../services/http.service";
import {LoadingService} from "../../../services/loading.service";
import {BehaviorSubject, Observable} from "rxjs";
import {LocalStorageService} from "../../../services/local-storage.service";
import {select, Store} from "@ngrx/store";
import * as AuthActions from "../../../store/shared/auth/auth.action"
import {UserModel} from "../../../models/user.model";
import {BaseComponent} from "../../../components/base/base.component";
import {selectAuthState, selectOriginUser, selectUser} from "../../../store/shared/auth/auth.selectors";

@Injectable({providedIn: 'root'})

export class AuthenticationService{
  apiService = this.httpService.apiServer;
  private currentUserSubject: BehaviorSubject<UserModel> | undefined;
  currentUser = null;
  originUser = null;
  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {
    this.store.select(selectAuthState).pipe().subscribe(result => {
      this.currentUser = result.user;
      this.originUser = result.originUser;
      console.log("result", result);
    })
  }

  login(data: { username: string, password: string }): Promise<any> {
    const path = this.apiService.paths.auth.login;
    return this.httpService.post(path, data, {}).then((result: any) => {
      if (result.status === 1) {
        return result
      } else {
        throw new Error(result.message);
        return null;
      }
    }).catch((err) => {
      console.warn("err", err);
      return null;
    });
  }

  switch(data: { id: number }): Promise<any> {
    const path = this.apiService.paths.auth.switch;
    return this.httpService.post(path, data, {}).then((result: any) => {
      if (result.status === 1) {
        return result
      } else {
        throw new Error(result.message);
        return null;
      }
    }).catch((err) => {
      console.warn("err", err);
      return null;
    });
  }

  restoreAuth() {
    const userInfo = this.localStorageService.getCurrentUser();
    const originUserInfo = this.localStorageService.getOriginUser();
    const originUser = originUserInfo?.user;
    const originToken = originUserInfo?.token;
    const user = userInfo?.user;
    const token = userInfo?.token;
    if (user && token) {
      if (this.currentUser === this.originUser) {
        this.store.dispatch(AuthActions.restoreData({ user, token, originUser, originToken }));
      } else {
        this.store.dispatch(AuthActions.loginSuccess({ user, token }));
      }
    }

  }

  restoreAuthSwitch() {
    const user = this.localStorageService.getCurrentUser();
    const token = user?.token;
    if (user && token) {
      this.store.dispatch(AuthActions.switchSuccess({ user, token }));
    }
  }

  getUserFromLocalStorage() {

  }
}
