import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string= 'User-List';
  users: User[]= [];
  user: User= new User();
  loggedInUser: User= new User();

  constructor(
    private userSvc: UserService,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {

    this.sysSvc.checkLogin();

    this.loggedInUser=this.sysSvc.loggedInUser;

    this.userSvc.list()
    .subscribe(
      resp => {
        this.users = resp as User[];
        console.log("list of users: ", this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

}
