import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {UserModel} from "../models/user.model";

@Injectable({providedIn: 'root'})

export class LocalStorageService {
  originUser = 'origin_user';
  userKey = 'current_user';
  tokenKey = 'token';
  prefix = environment.appPrefix

  public getKeyName(key: string) {
    return `${this.prefix}_${key}`;
  }

  public get(key: string) {
    return localStorage.getItem(this.getKeyName(key));
  }

  public set(key: string, value: string) {
    return localStorage.setItem(this.getKeyName(key), value);
  }

  public delete(key: string) {
    return localStorage.removeItem(this.getKeyName(key));
  }

  public removeUser() {
    return localStorage.removeItem(this.getKeyName(this.userKey));
  }

  public getToken(){
    return localStorage.getItem(this.getKeyName(this.tokenKey));
  }

  public getCurrentUser() {
    const currentUser: string | null = this.get(this.userKey);
    return currentUser ? JSON.parse(currentUser) : null;
  }

  public getOriginUser() {
    const currentUser: string | null = this.get(this.originUser);
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
