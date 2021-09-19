import { Component, Input, OnInit, ChangeDetectionStrategy, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { PropUser } from '../../store/reducer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit, OnChanges {

  @Input() userProfile: PropUser | null;
  @Input() studyAt: string;

  constructor() {
    this.userProfile = { userId: 0, id: 0, title: "", body: "" };
    this.studyAt = "";
  }

  ngOnInit(): void {
    console.log(this.userProfile);
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.userProfile) {
      console.log(this.userProfile);
    }
  }

}
