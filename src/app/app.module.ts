import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { MenuComponent } from './core/menu/menu.component';
import { VendorListComponent } from './features/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './features/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './features/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './features/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { UserLoginComponent } from './features/user/user-login/user-login.component';
import { RequestListComponent } from './features/request/request-list/request-list.component';
import { RequestCreateComponent } from './features/request/request-create/request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    UserLoginComponent,
    RequestListComponent,
    RequestCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
