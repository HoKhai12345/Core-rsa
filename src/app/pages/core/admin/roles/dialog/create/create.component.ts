import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-dialog-role-create',
  templateUrl: './create.component.html'
})
export class DialogRoleCreateComponent {

  @Output() closeDialog = new EventEmitter<any>();


  form: FormGroup;

  constructor(private fb: FormBuilder,
              private roleService: RoleService) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  close() {
    this.closeDialog.emit();
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const role = this.form.value;
    this.roleService.createRole(role).subscribe((result) => {
      console.log("____result____", result);
      this.closeDialog.emit(result);
    });

  }
}
