import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './http/http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
