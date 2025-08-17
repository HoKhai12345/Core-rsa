import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {SiteLoaderComponent} from './shared/components/site-loader/site-loader.component';
import {StoreModule} from "@ngrx/store";
import {loadingReducer} from './store/shared/loading/loading.reducer';
import {toastReducer} from "./store/shared/toast/toast.reducer";
import {SiteToastComponent} from "./shared/components/site-toast/site-toast.component";
import {NzNotificationModule} from "ng-zorro-antd/notification";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {AuthModule} from "./pages/auth/auth.module";
import {RouterModule} from "@angular/router";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './layouts/header/header.component';
import {HeaderDropdownComponent} from "./layouts/header/header-dropdown/header-dropdown.component";
import {SideBarComponent} from "./layouts/side-bar/side-bar.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {LoadingInterceptor} from "./interceptor/loading.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthEffects} from "./store/shared/auth/auth.effects";
import {EffectsModule} from "@ngrx/effects";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {authReducer} from "./store/shared/auth/auth.reducer";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {BaseComponent} from "./components/base/base.component";
import { NgSelectModule } from '@ng-select/ng-select';
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('vi');
    return translate.use('vi').toPromise();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SiteLoaderComponent,
    SiteToastComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    HeaderDropdownComponent,
    NotFoundComponent,
    ForbiddenComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzNotificationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    RouterModule,
    NzLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    StoreModule.forRoot({
      auth: authReducer,
      loading: loadingReducer,
      toast: toastReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AuthEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderDropdownComponent,
    BaseComponent,
    HeaderComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
