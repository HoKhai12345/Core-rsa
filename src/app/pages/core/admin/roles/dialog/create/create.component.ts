import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-dialog-role-create',
  templateUrl: './create.component.html'
})
export class DialogRoleCreateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private roleService: RoleService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: [1]
    });
  }

  close() {
    (this as any).close();
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const role = this.form.value;
    this.roleService.createRole(role);
    (this as any).close();
  }
}
