import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { actionGetProfile } from "./../../store/actions";
import { selectProfile } from "./../../store/selectors";
import { select, Store } from "@ngrx/store";
import { PropUser } from '../../store/reducer';
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-shell-user-profile',
  templateUrl: './shell-user-profile.component.html',
  styleUrls: ['./shell-user-profile.component.scss']
})
export class ShellUserProfileComponent implements OnInit {

  @Output() userProfile$: Observable<PropUser> = new EventEmitter<PropUser>();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.userProfile$ = this.store.select(selectProfile).pipe(map((data: PropUser) => data));
  }

}