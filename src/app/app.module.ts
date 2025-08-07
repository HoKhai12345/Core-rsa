import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SiteLoaderComponent } from './shared/components/site-loader/site-loader.component';
import {StoreModule} from "@ngrx/store";
import { loadingReducer } from './store/shared/loading/loading.reducer';
import { toastReducer } from "./store/shared/toast/toast.reducer";
import {SiteToastComponent} from "./shared/components/site-toast/site-toast.component";
import {NzNotificationModule} from "ng-zorro-antd/notification";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {CoreModule} from "./pages/core/core.module";
import {AuthModule} from "./pages/auth/auth.module";
import {RouterModule} from "@angular/router";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzNotificationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    RouterModule,
    NzLayoutModule,
    StoreModule.forRoot({
      loading: loadingReducer,
      toast: toastReducer
    }),
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
    MainLayoutComponent
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [TranslateService],
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
