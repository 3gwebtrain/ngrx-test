import { Component, OnInit, Output } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PropUser } from '../../store/reducer';
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
  @Output() users$: Observable<PropUser[]>;

  title = "Welcome to user!!";
  countString = "countLogic";
  count: number;

  constructor(private store: Store<AppState>) {
    this.count = 0;
    this.newTitle = this.count + this.countString;
    this.users$ = of([]);
  }

  ngOnInit(): void {
    this.OutwellcomeMsg = this.title;
    this.users$ = this.store.select(selectUsers);
  }

  getNewUpdate() {
    this.count++ + this.countString;
    this.newTitle = this.count + this.countString;
  }

  setNewUsers() {
    console.log('call');
    this.store.select(selectUsers).subscribe(data => {
      if (!data.length) {
        this.store.dispatch(actions.actionGetUsers());
      }
    });

  }

}

