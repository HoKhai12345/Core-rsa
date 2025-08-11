import {Component, Input, OnInit} from '@angular/core';
import {BreadCrumbs} from "../../../models/bread-crumbs.model";

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css']
})

export class BreadCrumbsComponent implements OnInit {
  @Input() listBreadCrumbs: BreadCrumbs[] = [];

  constructor() {}

  ngOnInit(): void {}

}
