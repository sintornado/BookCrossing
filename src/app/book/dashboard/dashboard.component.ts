import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/book/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = ''; 

  constructor( private  us: UserService) {}

  ngOnInit() {
    this.user = this.us.userForDashboard;
    console.log(this.user)
  }

}
