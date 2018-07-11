import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/models/book';
import { BookService } from 'src/app/book/book.service';

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.scss']
})
export class RequestedBooksComponent implements OnInit {

  requestedBooks: Book[]

  constructor(private bs: BookService) { }

  ngOnInit() {
    this.requestedBooks = this.bs.requestedBook;
  }

}
