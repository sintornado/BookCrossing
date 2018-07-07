import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { SharedBooksComponent } from './shared-books/shared-books.component';
import { ReturnedBooksComponent } from './returned-books/returned-books.component';
import { ShareComponent } from './share/share.component';
import { RequestComponent } from './request/request.component';
import { ReturnComponent } from './return/return.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookRoutingModule } from 'src/app/book/book-routing-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MDB Angular Free
import { InputsModule, WavesModule } from 'angular-bootstrap-md'


@NgModule({
  imports: [
    CommonModule, 
    BookRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    WavesModule
  ],
  declarations: [RequestedBooksComponent, 
                SharedBooksComponent, 
                ReturnedBooksComponent, 
                ShareComponent, 
                RequestComponent, 
                ReturnComponent, 
                DashboardComponent,
                // SearchComponent
                ]
})
export class BookModule { }
