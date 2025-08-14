export class RoleModel {
  public id: number;
  public name: string;

  // Constructor nhận một đối tượng làm tham số
  constructor(data: { id: number; name: string }) {
    this.id = data.id;
    this.name = data.name;
  }
}
