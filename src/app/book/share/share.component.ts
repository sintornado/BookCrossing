import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/book/book.service';
import { Book } from 'src/app/book/models/book';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  contactForm: FormGroup;
  book: Book = new Book();

  constructor(public fb: FormBuilder, private bookService: BookService) {
      this.contactForm = fb.group({
          contactFormName: ['', Validators.required],
          contactFormAuthor: ['', [Validators.required]],
          contactFormYear: ['', Validators.required],
          contactFormGenre: ['', Validators.required]
          
      });
  }
  ngOnInit() {
  
  }

  onClickSave(contactForm: FormGroup){
    let book = contactForm.value;

    this.bookService.addBook(this.shareBook(book));

    // this.bookService.saveShareBook(this.shareBook(book));
    // console.log(this.contactForm.value);
  }
  shareBook(share: any){
    let qwe = share;
      // this.book.Id = Date.now();
      this.book.Title = qwe.contactFormName;
      this.book.Author = qwe.contactFormAuthor;
      this.book.Year = qwe.contactFormYear;
      this.book.Genre = qwe.contactFormGenre;
      return this.book;
  }


}
