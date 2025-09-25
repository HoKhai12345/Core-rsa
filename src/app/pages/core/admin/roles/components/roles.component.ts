import { Component, OnInit } from '@angular/core';
import {BreadCrumbs} from "../../../../../models/bread-crumbs.model";
import {RoleService} from "../services/role.service";
import {RoleModel} from "../../../../../models/role.model";
import {CorePaginationConfig} from "../../../../../models/pagination.model";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {DialogService} from "../../../../../services/dialog.service";
import {DialogRoleCreateComponent} from "../dialog/create/create.component";
import {ActivatedRoute, Router} from "@angular/router";

interface Filter {
    page: number,
    limit: number,
    name: string | undefined;
    status: number | undefined
}
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  statuses: any[] = [
    { id: 1, name: 'Đang xử lý' },
    { id: 2, name: 'Đã hoàn thành' },
    { id: 3, name: 'Đã hủy' }
  ];

  breadcrumbs: BreadCrumbs[] = [
    { label: 'Home', nameIcon: 'home', url: 'core/admin/dashboard' },
    { label: 'Roles', nameIcon: 'adjustments-horizontal', url: 'core/admin/roles' },
  ]
  listRole: RoleModel[] = [];
  listItemPerPage: number[] = [10, 20, 30];
  filter: Filter = {
    page: 1,
    limit: 10,
    name: '',
    status: undefined
  }

  activeDropdown: number | null = null;
  config: CorePaginationConfig = {
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1,
    maxPages: 5,
    showFirstLast: true,
    showPageNumbers: true,
    showItemsPerPage: true,
    showTotal: true
  };
  private dataSubcription: Subscription;
  constructor(
    private dialogService: DialogService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router,
  private translate: TranslateService
  ) {
    this.dataSubcription = this.roleService.role$.subscribe(value => {
      this.listRole = value;
    })
  }

  ngOnInit(): void {
    this.getListRole();
    this.setParams();
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.action-dropdown')) {
        this.activeDropdown = null;
      }
    });
  }

  setParams() {
     this.route.queryParams.subscribe(params => {
       this.filter.page = parseInt(params['page'], 10) || 1;
       this.filter.limit = parseInt(params['limit'], 10) || 10;
       // Đọc các trường tùy chọn. Nếu không có, giữ nguyên giá trị mặc định ('') hoặc undefined.
       this.filter.name = params['name'] || '';
       this.getListRole(); // Tải dữ liệu sau khi filter được cập nhật
    });
  }

  getListRole() {
    const queries: {
      page: number;
      limit: number;
      name?: string;
      status?: number;
    } = {
      page: this.filter.page,
      limit: this.filter.limit,
    };
    if (this.filter.name !== '') {
      queries.name = this.filter.name
    }

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queries,
        queryParamsHandling: 'merge'
      }
  );
    this.roleService.index(queries).subscribe((result: any) => {
      this.listRole = result.data.role?.items ?? [];
      this.config.totalItems = result.data.role.totalCount ?? 0;
      this.config = { ...this.config };
    })
  }

  pageChange(page: number) {
      this.filter.page = page;
      this.getListRole();
  }

  itemsPerPageChange(limit: number) {
    this.filter.limit = limit;
    this.getListRole();
  }

  // Action dropdown methods
  toggleActionDropdown(roleId: number, event?: Event) {
    if (event) {
      event.stopPropagation();
    }

    if (this.activeDropdown === roleId) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = roleId;
      // Tính toán vị trí cho dropdown
      this.positionDropdown(event);
    }
  }

  positionDropdown(event: Event | undefined) {
    if (!event) return;

    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    // Tìm dropdown element
    setTimeout(() => {
      const dropdown = document.querySelector('.action-dropdown-menu') as HTMLElement;
      if (dropdown) {
        // Đặt vị trí chính xác
        dropdown.style.left = (rect.right - dropdown.offsetWidth) + 'px';
        dropdown.style.top = (rect.top - dropdown.offsetHeight - 8) + 'px';
      }
    }, 0);
  }

  async openDialog() {
    const result = await this.dialogService.open(DialogRoleCreateComponent);
    if (result) {
      console.log('Role created:', result);
    }

  }

  closeAllDropdowns() {
    this.activeDropdown = null;
  }

  editRole(role: RoleModel) {
    console.log('Edit role:', role);
    // TODO: Implement edit functionality
    this.closeAllDropdowns();
  }

  deleteRole(role: RoleModel) {
    console.log('Delete role:', role);
    // TODO: Implement delete functionality
    this.closeAllDropdowns();
  }
}
