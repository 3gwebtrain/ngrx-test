import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from "./components/user/user.component";
import { ShellUserComponent } from "./containers/shell-user/shell-user.component";
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [ShellUserComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
})
export class UserModule { }
