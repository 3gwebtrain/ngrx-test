import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shell-user',
  templateUrl: './shell-user.component.html',
  styleUrls: ['./shell-user.component.scss']
})
export class ShellUserComponent implements OnInit {

  @Output() OutwellcomeMsg: string | undefined;
  @Output() newTitle: string;

  title = "Welcome to user!!";
  countString = "countLogic";
  count: number;


  constructor() {
    this.count = 0;
    this.newTitle = this.count + this.countString;
  }

  ngOnInit(): void {
    this.OutwellcomeMsg = this.title;
  }

  newUpdate() {
    this.count++ + this.countString;
    this.newTitle = this.count + this.countString;
  }

}
