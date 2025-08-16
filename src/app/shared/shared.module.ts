import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    RouterModule
  ],
  exports: [
    SvgIconComponent,
    BreadCrumbsComponent,
    CorePaginationComponent
  ]
})
export class SharedModule { }
