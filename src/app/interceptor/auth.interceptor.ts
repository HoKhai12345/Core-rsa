import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {mergeMap, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import * as AuthSelectors from "../store/shared/auth/auth.selectors";
@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Chỗ này lấy user từ store
    return this.store.select(AuthSelectors.selectToken).pipe(
      take(1),
      mergeMap(token => {
        if (token) {
          req = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          });
        }
        return next.handle(req);
      })
    );
  }

}
