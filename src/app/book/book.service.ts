import { Injectable } from '@angular/core';
import { Book } from 'src/app/book/models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  sharedBooks: Book[] = [
    {
      id: 1,
      title: 'First',
      author: 'Ivanov',
      year: 1985
    },
    {
      id: 2,
      title: 'Second',
      author: 'Petrov',
      year: 1990
    },
    {
      id: 3,
      title: 'Third',
      author: 'Sidorov',
      year: 2001
    }
  ]

  getSharedBooks(){
    return this.sharedBooks;
  }

  saveShareBook(book: Book){
    console.log(book);
  }

}
