import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";
import {LoadingService} from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/')) {
      if (this.requests.length === 0) {
        this.loadingService.show();
      }
    }

    this.requests.push(req);

    return next.handle(req).pipe(
      finalize(() => {
        this.requests = this.requests.filter(r => r !== req);
        if (this.requests.length === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
