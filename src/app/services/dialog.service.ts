import {Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Type, ComponentRef} from '@angular/core';
import {DialogComponent} from "../components/dialog/dialog.component";

@Injectable({ providedIn: 'root' })
export class DialogService {
  private dialogRef?: ComponentRef<DialogComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open<T>(component: Type<T>): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogFactory = this.resolver.resolveComponentFactory(DialogComponent);
      this.dialogRef = dialogFactory.create(this.injector);

      // attach dialog to DOM
      this.appRef.attachView(this.dialogRef.hostView);
      document.body.appendChild(this.dialogRef.location.nativeElement);

      // render custom component into dialog
      const contentFactory = this.resolver.resolveComponentFactory(component);
      const contentRef = this.dialogRef.instance.contentHost.createComponent(contentFactory);

      // listen close event
      this.dialogRef.instance.closed.subscribe((result: boolean) => {
        resolve(result);
        this.cleanup(contentRef);
      });
    });
  }

  close(result: boolean = false) {
    if (this.dialogRef) {
      // Gọi thẳng close() của DialogComponent
      this.dialogRef.instance.close(result);
    }
  }

  private cleanup(contentRef: any) {
    if (this.dialogRef) {
      this.appRef.detachView(this.dialogRef.hostView);
      this.dialogRef.destroy();
      contentRef.destroy();
      this.dialogRef = undefined;
    }
  }
}
