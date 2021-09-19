import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUserProfileComponent } from './shell-user-profile.component';

describe('ShellUserProfileComponent', () => {
  let component: ShellUserProfileComponent;
  let fixture: ComponentFixture<ShellUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
