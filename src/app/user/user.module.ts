import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { ShellUserComponent } from "./containers/shell-user/shell-user.component";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [ShellUserComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
})
export class UserModule { }
