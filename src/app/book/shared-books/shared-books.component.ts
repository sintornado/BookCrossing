import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from 'src/app/book/book.service';



 
@Component({
  selector: 'app-shared-books',
  templateUrl: './shared-books.component.html',
  styleUrls: ['./shared-books.component.scss']
})





export class SharedBooksComponent implements OnInit {

  constructor( private bookService: BookService) { }

  sharedBooks: Book[];

  ngOnInit() {
    this.sharedBooks = this.bookService.getSharedBooks();
  }

   

}
