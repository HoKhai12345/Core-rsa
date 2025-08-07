import {Injectable, OnInit} from "@angular/core";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable({providedIn: 'root'})
export class ToastService implements OnInit{
  constructor(private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  success(message: string, title: string): void {
    this.notification.success(title, message, {nzDuration: 3000});
  }

  error(message: string, title: string): void {
    this.notification.error(title, message, {nzDuration: 3000});
  }

  info(message: string, title: string = 'Info'): void {
    this.notification.info(title, message, { nzDuration: 4000 });
  }

  warning(message: string, title: string = 'Warning'): void {
    this.notification.warning(title, message, { nzDuration: 4000 });
  }

  custom(type: 'success' | 'error' | 'info' | 'warning', message: string, title: string = ''): void {
    this.notification.create(type, title, message, { nzDuration: 3000 });
  }

}
