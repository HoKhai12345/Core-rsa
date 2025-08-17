import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {NgModule} from "@angular/core";
import {AuthGuards} from "./guards/auth.guards";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";
import {RoleGuards} from "./guards/role.guards";

export const routes: Routes = [
  {
    path: 'core',
    component: MainLayoutComponent,
    canActivate: [AuthGuards],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/core/dashboard/dahboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'admin/roles',
        canActivate: [RoleGuards],
        loadChildren: () => import('./pages/core/admin/roles/role.modules').then(m => m.RolesModule)
      },
      {
        path: 'booking-location',
        loadChildren: () => import('./pages/core/booking-location/booking-location.module').then(m => m.BookingLocationModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },

  {
    path: '',
    redirectTo: '/core/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'error-403',
    component: ForbiddenComponent,
  },

  {
    path: 'error-404',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'error-404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
