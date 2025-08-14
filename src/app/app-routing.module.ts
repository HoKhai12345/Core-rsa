import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {NgModule} from "@angular/core";
import {AuthGuards} from "./guards/auth.guards";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
  {
    path: 'core',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuards],
        loadChildren: () => import('./pages/core/core.module').then(m => m.CoreModule)
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
