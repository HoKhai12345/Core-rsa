export class RoleModel {
  public id: number;
  public name: string;
  public status: number | undefined;

  // Constructor nhận một đối tượng làm tham số
  constructor(data: { id: number; name: string, status: number }) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status
  }
}
