import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';
import { SystemService } from 'src/app/service/system.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: '../vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  title: string= 'Vendor-Edit';
  vendor: Vendor= new Vendor();
  submitBtnTitle: string= 'Edit';
  vendorId: number= 0;
  loggedInUser: User= new User();

  constructor(
    private vendorSvc: VendorService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.sysSvc.checkLogin();

    this.loggedInUser=this.sysSvc.loggedInUser;

    this.route.params.subscribe(parms => this.vendorId = parms["id"]);
    this.vendorSvc.get(this.vendorId).subscribe(
      resp => {
          this.vendor= resp as Vendor;},
      err => {console.log(err);}        
    );
  }

  save() {
    this.vendorSvc.edit(this.vendor).subscribe(
      resp => {this.vendor= resp as Vendor;
              this.router.navigateByUrl('/vendor-list')},
      err => {console.log(err);}
    );

  }
}
