import { Component, OnInit } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-site-toast',
  templateUrl: './site-toast.component.html',
  styleUrls: ['./site-toast.component.css']
})
export class SiteToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  createNotification(): void {}
}
