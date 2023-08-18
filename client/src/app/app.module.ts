import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http'


//Taiga UI
import {TuiDropdownModule} from '@taiga-ui/core';



import { SharedModule } from './shared/shared/shared.module';
import { LoadingComponent } from './components/loading/loading.component';
import { WarningComponent } from './components/warning/warning.component';
import { ErrorComponent } from './components/error/error.component';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { SubNavbarMainComponent } from './components/sub-navbar-main/sub-navbar-main.component';
import { NavbarUserManagementComponent } from './components/navbar-user-management/navbar-user-management.component';
// import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    WarningComponent,
    ErrorComponent,
    SecondNavbarComponent,
    SubNavbarMainComponent,
    NavbarUserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      SharedModule,
    TuiDropdownModule,

],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
