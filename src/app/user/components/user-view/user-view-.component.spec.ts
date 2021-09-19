import { render, screen } from '@testing-library/angular';
import { UserViewComponent } from './user-view.component';
import { ShellUserViewComponent } from '../../containers/shell-user-view/shell-user-view.component';

describe('UserComponent', () => {
  it('should find the paragrap text "Hi Adil"', async () => {

    await render(UserViewComponent, {
      declarations: [],
      componentProperties: {
        InwelcomeMsg: "Hi Adil"
      } as any
    });

    expect(await screen.findByText(/Hi Adil/i)).toBeTruthy();

  });

});

describe('ShellUserViewComponent', () => {
  it('should find the paragrap text "Hi Adil"', async () => {

    const component = await render(ShellUserViewComponent, {
      componentProperties: { countString: "CTS" },
      declarations: [UserViewComponent],
    });

    const button = component.getByText("Update Title");
    button.click();
    expect(await screen.findByText(/1CTS/i)).toBeTruthy();
    screen.debug();
  });

});