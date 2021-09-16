import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellUserComponent } from './containers/shell-user/shell-user.component';

const routes: Routes = [{ path: "", component: ShellUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
