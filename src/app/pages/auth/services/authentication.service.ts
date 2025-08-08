import {Injectable} from "@angular/core";
import {HttpService} from "../../../services/http.service";
import {LoadingService} from "../../../services/loading.service";

@Injectable({providedIn: 'root'})

export class AuthenticationService {
  apiService = this.httpService.apiServer;


  constructor(
    private httpService: HttpService,
  ) {
  }

  login(data: { username: string, password: string }): Promise<any> {
    const path = this.apiService.paths.auth.login
    return this.httpService.post(path, data, {}).then((result: any) => {
      if (result.status === 1) {
        return result.data
      } else {
        throw new Error(result.message)
      }
    }).catch((err) => {
      console.warn("err", err);
    });
  }
}
