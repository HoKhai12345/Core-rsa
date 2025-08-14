import { Component, OnInit } from '@angular/core';
import {BreadCrumbs} from "../../../../../models/bread-crumbs.model";
import {RoleService} from "../services/role.service";
import {RoleModel} from "../../../../../models/role.model";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  // Mảng dữ liệu cho ô select
  statuses: any[] = [
    { id: 1, name: 'Đang xử lý' },
    { id: 2, name: 'Đã hoàn thành' },
    { id: 3, name: 'Đã hủy' }
  ];

  // Biến để lưu giá trị trạng thái đã chọn
  selectedStatusId: number | null = null;
  breadcrumbs: BreadCrumbs[] = [
    { label: 'Home', nameIcon: 'home', url: 'core/admin/dashboard' },
    { label: 'Roles', nameIcon: 'adjustments-horizontal', url: 'core/admin/roles' },
  ]
  listRole: RoleModel[] = [];
  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.getListRole();
  }

  getListRole() {
    this.roleService.index({}).then((result: any) => {
      console.log("result", result);
      this.listRole = result.roles;
    })
  }

}
