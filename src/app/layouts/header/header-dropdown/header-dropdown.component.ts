import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {startLoading, stopLoading} from "../../../store/shared/loading/loading.action";
import {Store} from "@ngrx/store";
import {ToastService} from "../../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.css']
})
export class HeaderDropdownComponent implements OnInit {
  @Input()
  type: 'chat' | 'notification' | 'setupUser' | 'setting' | null = null;
  @Output() close = new EventEmitter<void>();
  constructor(
    private readonly store: Store,
    private toastService: ToastService,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch(startLoading())
    setTimeout(() => {
      this.toastService.warning(this.translate.instant('common.alert.signUp'), 'Success');
      this.router.navigate(['/login'], {});
      this.store.dispatch(stopLoading())
    }, 2000)
  }

}
