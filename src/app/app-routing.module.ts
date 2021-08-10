import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/user-list', pathMatch:'full'},
  {path:'user-list', component:UserListComponent},
  {path:'user-detail/:id', component:UserDetailComponent},
  {path:'user-create', component:UserCreateComponent},
  {path:'user-edit/:id', component:UserEditComponent},
  {path:'**', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
