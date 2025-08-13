import {Injectable} from "@angular/core";
import {HttpService} from "../../../services/http.service";
import {LoadingService} from "../../../services/loading.service";
import {Observable} from "rxjs";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Store} from "@ngrx/store";
import * as AuthActions from "../../../store/shared/auth/auth.action"

@Injectable({providedIn: 'root'})

export class AuthenticationService {
  apiService = this.httpService.apiServer;


  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {
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

  restoreAuth() {
    const user = this.localStorageService.getCurrentUser();
    const token = this.localStorageService.getToken();
    console.log("token", token);
    if (user && token) {
      this.store.dispatch(AuthActions.loginSuccess({ user, token }));
    }

  }

  getUserFromLocalStorage() {

  }
}
