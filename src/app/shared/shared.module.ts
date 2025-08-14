import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SvgIconComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
