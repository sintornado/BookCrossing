import { Injectable } from '@angular/core';
import { Book } from 'src/app/book/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';

const url = "http://localhost:9696/api/books";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getListOfBooks(): Observable<Book[]>{

    let q = this.http.get<Book[]>(url + '/all');
    q.subscribe(() => {console.log("GET list of Books!!!");});
    return q;
  }

  addBook(book: Book): Observable<Book> {
    console.log(book);
    var t = this.http.post<Book>(url, book);
    t.subscribe(function() { console.log("POST for books executed!");});
    return t;
  }

  searchForBookByAuthor(author: any): Observable<any>{ 
    console.log(author);
    
    var y = this.http.get<Book>(url + '/author/' + author);
    y.subscribe(() => {console.log("Search by Author executed");});
    console.log(y);
    return y;
  }

  searchForBookByTitle(title: any): Observable<any>{ 
    console.log(title);
    
    var y = this.http.get<Book>(url + '/title/' + title);
    y.subscribe(() => {console.log("Search by Title executed");});
    console.log(y);
    return y;
  }

  requestedBook: Book[] = [];



  searchText: string;
  

  saveRequestedBook(data: Book){
    this.requestedBook.push(data);
  }

}
