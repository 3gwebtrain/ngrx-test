import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellUserViewComponent } from './containers/shell-user-view/shell-user-view.component';
import { ShellUserModuleComponent } from './user-module/container/shell-user-module.component';
import { ShellUserProfileComponent } from './containers/shell-user-profile/shell-user-profile.component';


const routes: Routes = [
  {
    path: "", component: ShellUserModuleComponent, children: [
      { path: "", component: ShellUserViewComponent },
      { path: "profile/:id", component: ShellUserProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
