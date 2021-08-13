import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  title: string= 'Request-Detail';
  request: Request= new Request();
  requestId: number= 0;

  constructor(
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    console.log('requestId= '+this.requestId);
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
          this.request= resp as Request;},
      err => {console.log(err);}        
    );
  }

  delete() {
    this.requestSvc.delete(this.requestId).subscribe(
      resp =>{
        this.request= resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => {
        console.log(err);
      }
    );
  }
}
