import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Type } from '@angular/core';
import {DialogComponent} from "../components/dialog/dialog.component";

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open<T>(component: Type<T>): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogFactory = this.resolver.resolveComponentFactory(DialogComponent);
      const dialogRef = dialogFactory.create(this.injector);

      // attach dialog to DOM
      this.appRef.attachView(dialogRef.hostView);
      document.body.appendChild(dialogRef.location.nativeElement);

      // render custom component into dialog
      const contentFactory = this.resolver.resolveComponentFactory(component);
      const contentRef = dialogRef.instance.contentHost.createComponent(contentFactory);

      dialogRef.instance.closed.subscribe((result: boolean) => {
        resolve(result);
        this.appRef.detachView(dialogRef.hostView);
        dialogRef.destroy();
        contentRef.destroy();
      });
    });
  }
}
