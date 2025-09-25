import {Injectable} from "@angular/core";
import {HttpService} from "../../../../../services/http.service";
import {RoleModel} from "../../../../../models/role.model";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Role} from "../models/role.model";
import {HttpMongoService} from "../../../../../services/httpMongo.service";

@Injectable({providedIn: 'root'})

export class RoleService {
  apiService = this.httpService.apiServer;
  _role = new BehaviorSubject<any[]>([]);
  public readonly role$ = this._role.asObservable();
  constructor(
    private httpService: HttpMongoService
  ) {}

  createRole(body = {}) {
    const options = {};
    const path = this.apiService.paths.admin.role.create;
    return this.httpService.post<any>(path, body, options).pipe(map(rs => {
      if (rs.status == 200) {
        const current = this._role.getValue();
        console.log("current", current);
        const updated = [...current, body];
        this._role.next(updated);
      }
      return rs;
    }))
  }

  index(params = {}): Observable<any> {
    const options = {
      params: params
    }
    const path = this.apiService.paths.admin.role.list;
    return this.httpService.get<any>(path, options).pipe(map(rs => {
      if (rs.status == 200) {
        this._role.next(rs?.data?.role?.items);
      }
      return rs;
    }))
  }

  create(body = {}): Observable<any> {
    const options = {};
    const path = this.apiService.paths.admin.role.create;
    return this.httpService.post<any>(path, body, options).pipe(map(rs => {
      console.log("rs====", rs);
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
