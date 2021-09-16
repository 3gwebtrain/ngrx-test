import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shell-user',
  templateUrl: './shell-user.component.html',
  styleUrls: ['./shell-user.component.scss']
})
export class ShellUserComponent implements OnInit {

  @Output() OutwellcomeMsg: string | undefined;

  title = "Welcome to user!!"

  constructor() { }

  ngOnInit(): void {
    this.OutwellcomeMsg = this.title;
  }

}
