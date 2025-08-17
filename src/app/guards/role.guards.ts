import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {selectAuthState} from "../store/shared/auth/auth.selectors";
import {Store} from "@ngrx/store";
import {map, take} from "rxjs";

@Injectable({providedIn: 'root'})
export class RoleGuards implements CanActivate {
  constructor(
    private router: Router,
    private store: Store,
  ) {}

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(selectAuthState).pipe(
      take(1),
      map(auth => {
        if (auth.isAuthenticated && auth.token) {
          if (auth.user.role.id === 1) {
              return true
          }
          return this.router.navigate(['error-403'])
        }
        return this.router.createUrlTree(['auth/login'], {
          queryParams: { returnUrl: state.url }
        });
      })
    );
  }
}
