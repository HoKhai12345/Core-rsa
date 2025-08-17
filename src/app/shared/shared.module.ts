import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { CorePaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    BreadCrumbsComponent,
    CorePaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule,
    NzLayoutModule,
    NzNotificationModule
  ],
  exports: [
    SvgIconComponent,
    BreadCrumbsComponent,
    CorePaginationComponent,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule,
    NzLayoutModule,
    NzNotificationModule
  ]
})
export class SharedModule { }
