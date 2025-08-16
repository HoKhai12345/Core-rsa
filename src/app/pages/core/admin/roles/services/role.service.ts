import {Injectable} from "@angular/core";
import {HttpService} from "../../../../../services/http.service";
import {RoleModel} from "../../../../../models/role.model";

@Injectable({providedIn: 'root'})

export class RoleService {
  apiService = this.httpService.apiServer;

  constructor(
    private httpService: HttpService
  ) {

  }

  index(params = {}): Promise<any> {
    const options = {
      params: params
    }
    const path = this.apiService.paths.admin.role;
    return this.httpService.get(path, options).then((result: any) => {
      if (result.status === 1) {
        const roles: RoleModel[] = [];
        const total = result.data.total;
        result.data.roles.forEach((item: any) => {
          roles.push(new RoleModel(item));
        });
        return {
          total,
          roles,
        }
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
