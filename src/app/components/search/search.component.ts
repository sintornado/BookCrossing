import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book/book.service';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/book/models/book';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
