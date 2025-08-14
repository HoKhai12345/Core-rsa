import { Component, OnInit } from '@angular/core';
import {BreadCrumbs} from "../../../../models/bread-crumbs.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  breadcrumbs: BreadCrumbs[] = [
    { label: 'Home', nameIcon: 'home', url: '/dashboard' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
