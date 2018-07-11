import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.loginForm = fb.group({
      defaultFormEmail: ['', Validators.required],
      defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

}
