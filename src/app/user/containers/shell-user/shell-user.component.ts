import { Component, OnInit, Output } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PropUsers } from '../../store/reducer';
import { AppReducer, AppState } from "./../../../appStore/app.reduer";
import * as actions from "./../../store/actions";
import { selectUsers } from "./../../store/selectors";



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
  users$: Observable<PropUsers[]>;


  constructor(private store: Store<AppState>) {
    this.count = 0;
    this.newTitle = this.count + this.countString;
    this.users$ = of([]);
  }

  ngOnInit(): void {
    this.OutwellcomeMsg = this.title;
    this.users$ = this.store.pipe(select(selectUsers));
  }

  getNewUpdate() {
    this.count++ + this.countString;
    this.newTitle = this.count + this.countString;
  }

  getNewUsers() {
    console.log('call');
    this.store.dispatch(actions.actionGetUsers());
  }

}

