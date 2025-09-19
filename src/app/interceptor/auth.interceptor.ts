import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {mergeMap, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import * as AuthSelectors from "../store/shared/auth/auth.selectors";
import {environment} from "../../environments/environment";
@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  apiServiceMysql = environment.apiServer.mysql ?? {};

  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(AuthSelectors.selectToken).pipe(
      take(1),
      mergeMap(token => {
        let tokenCustom = null;
        if (req.url.includes(this.apiServiceMysql.host)) {
          tokenCustom = token;
        }
        if (tokenCustom) {
          req = req.clone({
            setHeaders: { Authorization: `Bearer ${tokenCustom}` }
          });
        }
        return next.handle(req);
      })
    );
  }

}
