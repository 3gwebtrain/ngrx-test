import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { PropUser } from '../../store/reducer';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserViewComponent implements OnInit, OnChanges {

  @Input()
  InwelcomeMsg!: string | undefined;

  @Input() title: string;
  @Input() newUsers: PropUser[] | null;

  @Output() newUpdate = new EventEmitter();
  @Output() getNewUsers = new EventEmitter();

  constructor(private cdRef: ChangeDetectorRef) {
    this.title = "";
    this.newUsers = [];
  }

  ngOnInit(): void {
    // this.cdRef.detach();
    this.getUsers();
  }

  ngOnChanges(changes: SimpleChanges) { }

  updateTitle() {
    this.newUpdate.emit();
  }

  getUsers() {
    this.getNewUsers.emit();
    // this.cdRef.detectChanges();
  }

  trackByFn(index: number, item: PropUser) {
    return item.id;
  }

}
