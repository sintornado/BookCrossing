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
  book: Book;

  constructor(private fb: FormBuilder, private bookService: BookService) {
      this.contactForm = fb.group({
          contactFormName: ['', Validators.required],
          contactFormAuthor: ['', [Validators.required]],
          contactFormYear: ['', Validators.required]
          
      });
  }
  ngOnInit() {
  
    
  }

 

  onClickSave(contactForm: FormGroup){
    let book = contactForm.value;

    this.bookService.saveShareBook(this.shareBook(book));
    console.log(this.contactForm.value);
  }
  shareBook(share: any){
    let qwe = share;
      this.book.id = Date.now();
      this.book.title = qwe.contactFormName;
      this.book.author = qwe.contactFormAuthor;
      this.book.year = qwe.contactFormYear;
      return this.book;
  }


}
