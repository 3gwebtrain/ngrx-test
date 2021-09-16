import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUserComponent } from './shell-user.component';

describe('ShellUserComponent', () => {
  let component: ShellUserComponent;
  let fixture: ComponentFixture<ShellUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
