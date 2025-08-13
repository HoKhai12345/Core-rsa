import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LocalStorageService} from "../services/local-storage.service";
import {selectAuthState} from "../store/shared/auth/auth.selectors";
import {Store} from "@ngrx/store";
import {map, take} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuards implements CanActivate {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private store: Store,
  ) {}

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(selectAuthState).pipe(
      take(1),
      map(auth => {
        if (auth.isAuthenticated && auth.token) {
            return true
        }
        return this.router.createUrlTree(['/login'], {
          queryParams: { returnUrl: state.url }
        });
      })
    );
  }
}
