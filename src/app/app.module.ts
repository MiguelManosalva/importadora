import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './services/service.module';
import { PagesModule } from './pages/pages.module';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

// Imports Spanish language.
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
// Register Spanish language.
registerLocaleData(localeEs, 'es-ES', localeEsExtra);

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ServiceModule,
    PagesModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
