import { render, screen } from '@testing-library/angular';
import userEvent from "@testing-library/user-event";
import { UserViewComponent } from './user-view.component';
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { ShellUserViewComponent } from '../../containers/shell-user-view/shell-user-view.component';
import { of } from 'rxjs';


describe('ShellUserViewComponent', () => {

  beforeEach(async () => {
    await render(ShellUserViewComponent, {
      componentProperties: {
        title: "welcome to Chennai",
        newTitle: "new title for test",
        users$: of([])
      },
      imports: [RouterTestingModule],
      declarations: [UserViewComponent],
      providers: [provideMockStore({})]
    });
  })

  it('should find the welcome as title', () => {
    expect(screen.findByText(/welcome to Chennai/i)).toBeTruthy();
  });

  it('should find the updateTitle button and update the title', () => {
    expect(screen.getByTestId("updateTitle")).toBeTruthy();
  });

});