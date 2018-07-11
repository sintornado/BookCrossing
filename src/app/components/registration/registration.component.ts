import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../book/models/user';
import { UserService } from 'src/app/book/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();

  constructor(public fb: FormBuilder, private us: UserService) {
    this.registerForm = fb.group({
        orangeFormFirstName: ['', Validators.required],
        orangeFormLastName: ['', Validators.required],
        orangeFormEmail: ['', [Validators.required, Validators.email]],
        orangeFormPass: ['', [Validators.required, Validators.minLength(5)]]
    });
}

  onClickRegistration(data: User){
    console.log(data); 
    this.us.userForDashboard = data;
    this.us.addUser(this.saveUser(data));
  }

  saveUser(data: any){
    
      this.user.FirstName = data.orangeFormFirstName;
      this.user.LastName = data.orangeFormLastName;
      this.user.Email = data.orangeFormEmail; 
      this.user.PasswordHash = data.orangeFormPass;
      console.log(this.user);
      return this.user;
  }

  ngOnInit() {
  }

}
