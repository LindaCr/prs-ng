import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  title: string='User-Detail';
  user: User= new User();
  userId: number=0;
  loggedInUser: User= new User();

  constructor(
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.sysSvc.checkLogin();

    this.loggedInUser=this.sysSvc.loggedInUser;

    this.route.params.subscribe(parms => this.userId = parms["id"]);
    this.userSvc.get(this.userId).subscribe(
      resp => {
          this.user= resp as User;},
      err => {console.log(err);}        
    );
  }

  delete() {
    this.userSvc.delete(this.userId).subscribe(
      resp =>{
        this.user= resp as User;
        this.router.navigateByUrl('/user-list');
      },
      err => {
        console.log(err);
      }
    );
  }
}
