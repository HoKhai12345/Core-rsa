import {RoleModel} from "./role.model";

export class UserModel {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public name: string,
    public roleId: number,
    public companyName: string,
    public isActive: string,
    public createdAt: string,
    public updatedAt: string,
    public role: RoleModel
  ) {
  }
}
