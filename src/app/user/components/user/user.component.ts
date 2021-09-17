import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PropUser } from '../../store/reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  @Input()
  InwelcomeMsg!: string | undefined;

  @Input() title: string;
  @Input() newUsers: PropUser[] | null;

  @Output() newUpdate = new EventEmitter();
  @Output() getNewUsers = new EventEmitter();

  constructor() {
    this.title = "";
    this.newUsers = [];
  }

  ngOnInit(): void { }

  updateTitle() {
    this.newUpdate.emit();
  }

  getUsers() {
    console.log('get users called');
    this.getNewUsers.emit();
  }

}
