import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";
import { PropUser } from '../../store/reducer';
import { actionGetProfile } from './../../store/actions';
import { selectProfile } from "./../../store/selectors";

@Component({
  selector: 'app-shell-user-profile',
  templateUrl: './shell-user-profile.component.html',
  styleUrls: ['./shell-user-profile.component.scss']
})
export class ShellUserProfileComponent implements OnInit {

  @Output() userProfile$: Observable<PropUser> = new EventEmitter<PropUser>();
  @Output() standClass: string;

  constructor(private readonly store: Store) {
    this.standClass = '12th';
  }

  ngOnInit(): void {
    this.store.dispatch(actionGetProfile());
    this.userProfile$ = this.store.pipe(select(selectProfile));
  }

}
