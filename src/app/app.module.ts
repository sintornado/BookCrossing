import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
// import { RequestComponent } from 'src/app/book/request/request.component';
// import { BookModule } from 'src/app/book/book.module';
// import { DashboardComponent } from 'src/app/book/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ContactComponent,
    SearchComponent,
    LogInComponent,
    RegistrationComponent,
    AboutUsComponent,
    // DashboardComponent
    // RequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
