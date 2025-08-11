import {Injectable} from "@angular/core";
import {HttpService} from "../../../services/http.service";
import {LoadingService} from "../../../services/loading.service";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthenticationService {
  apiService = this.httpService.apiServer;


  constructor(
    private httpService: HttpService,
  ) {
  }

  login(data: { username: string, password: string }): Promise<any> {
    const path = this.apiService.paths.auth.login;
    return this.httpService.post(path, data, {}).then((result: any) => {
      console.log("result", result);
      if (result.status === 1) {
        return result.data
      } else {
        throw new Error(result.message);
        return null;
      }
    }).catch((err) => {
      console.warn("err", err);
      return null;
    });
  }
}
