import {Injectable} from "@angular/core";
import {HttpService} from "../../../../../services/http.service";
import {RoleModel} from "../../../../../models/role.model";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Role} from "../models/role.model";

@Injectable({providedIn: 'root'})

export class RoleService {
  apiService = this.httpService.apiServer;
  _role = new BehaviorSubject<any[]>([]);
  public readonly role$ = this._role.asObservable();
  constructor(
    private httpService: HttpService
  ) {}

  createRole(data: any) {
    const current = this._role.getValue();
    const updated = [...current, data];
    this._role.next(updated);
  }

  index(params = {}): Observable<any> {
    const options = {
      params: params
    }
    const path = this.apiService.paths.admin.role;
    return this.httpService.get<Role[]>(path, options).pipe(map(rs => {
      console.log("rs", rs[0]);
      return rs;
    }))
  }

  // index(params = {}): Promise<any> {
  //   const options = {
  //     params: params
  //   }
  //   const path = this.apiService.paths.admin.role;
  //   return this.httpService.get(path, options).then((result: any) => {
  //     if (result.status === 1) {
  //       const roles: Role[] = [];
  //       const total = result.data.total;
  //       result.data.roles.forEach((item: any) => {
  //         roles.push(new RoleModel(item));
  //       });
  //       this._role.next(result.data.roles);
  //       return {
  //         total,
  //         roles,
  //       }
  //     } else {
  //       throw new Error(result.message);
  //       return null;
  //     }
  //   }).catch((err) => {
  //     console.warn("err", err);
  //     return null;
  //   });
  // }

}
