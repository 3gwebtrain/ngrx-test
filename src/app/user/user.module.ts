import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserViewComponent } from "./components/user-view/user-view.component";
import { ShellUserViewComponent } from "./containers/shell-user-view/shell-user-view.component";
import { UserRoutingModule } from './user-routing.module';
import { ShellUserModuleComponent } from './user-module/container/shell-user-module.component';
import { UserModuleComponent } from './user-module/component/user-module.component';
import { ShellUserProfileComponent } from './containers/shell-user-profile/shell-user-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [ShellUserViewComponent, UserViewComponent, ShellUserModuleComponent, UserModuleComponent, ShellUserProfileComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
})
export class UserModule { }
