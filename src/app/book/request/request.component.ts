import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book/book.service';
import { Book } from 'src/app/book/models/book';
import { Observable } from 'rxjs/internal/Observable';
// MDB Angular Free
// import { InputsModule, WavesModule  } from 'angular-bootstrap-md';
// Forms Module
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  searchInput: any;
  searchResult: Observable<Book>
  show: boolean = true
  searchWay = 'Author'

  constructor( public bs: BookService) { }

  onClickSearchByAuthor(searchInput: any){
    console.log(searchInput);
    if(this.searchWay === 'Author'){
      this.bs.searchForBookByAuthor(searchInput).subscribe((t) => {this.searchResult = t});
    }else if(this.searchWay === 'Title'){
      this.bs.searchForBookByTitle(searchInput).subscribe((t) => {this.searchResult = t});
    }
    
  }

  ngOnInit() {
  }

}
 
  // onClickRequest(data: Book){
  //   this.bs.saveRequestedBook(data);
  //   console.log(data);
  // }

  // filterIt(arr: any, searchKey: any) {
  //   return arr.filter((obj: any) => {
  //     return Object.keys(obj).some((key) => {
  //       return obj[key].includes(searchKey);
  //     });
  //   });
  // }

  // search() {
  //   if (!this.bs.searchText) {
  //     console.log(this.bs.searchForBookByAuthor(this.bs.searchText));
  //     return this.bs.searchForBookByAuthor(this.bs.searchText);
  //   }
  //   if (this.bs.searchText) {
  //     console.log(this.bs.searchForBookByAuthor(this.bs.searchText));
  //     return this.filterIt(this.bs.searchForBookByAuthor(this.bs.searchText), this.bs.searchText);
      
  //   }
  // }

}
