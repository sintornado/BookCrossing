import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/book/user.service';
// import { Observable } from 'rxjs/internal/Observable';
// import { User } from '../models/user';
// import { Router } from '@angular/router/src/router';
// import { ActivatedRoute } from '@angular/router/src/router_state';
// import { SearchComponent } from '../../components/search/search.component';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // user: Observable<User>
  // let qwe = '';
  

  constructor(
    // private  userService: UserService
  ) {  

  }

  ngOnInit() {
    // this.user = 
    // this.userService.get(1).subscribe((r)=> console.log(r));
    // debugger;
    // console.log(this.user);
    //  let qwe = this.user.name;
  }

  

}
