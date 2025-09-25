import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from "../../services/role.service";
import {DialogService} from "../../../../../../services/dialog.service";
import {ToastService} from "../../../../../../services/toast.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dialog-role-create',
  templateUrl: './create.component.html'
})
export class DialogRoleCreateComponent {

  @Output() closeDialog = new EventEmitter<any>();


  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogService: DialogService,
              private toastService: ToastService,
              private trans: TranslateService,
              private roleService: RoleService) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  close() {
    this.dialogService.close(false);
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const role = this.form.value;
    this.roleService.createRole(role).subscribe((result) => {
      if(result.status === 200) {
        this.toastService.success('Tạo role thành công!', this.trans.instant('common.alert'));
        this.dialogService.close(result?.data?.role);
      }
    });

  }
}
