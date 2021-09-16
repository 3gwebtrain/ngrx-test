import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  InwelcomeMsg!: string | undefined;

  @Input() title!: string;

  @Output() newUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  updateTitle() {
    this.newUpdate.emit();
  }

}
