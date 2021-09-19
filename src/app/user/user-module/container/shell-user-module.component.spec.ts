import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUserModuleComponent } from './shell-user-module.component';

describe('ShellUserModuleComponent', () => {
  let component: ShellUserModuleComponent;
  let fixture: ComponentFixture<ShellUserModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellUserModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellUserModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
