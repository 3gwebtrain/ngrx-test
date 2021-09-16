import { render, screen } from '@testing-library/angular';
import { UserComponent } from './user.component';
import { ShellUserComponent } from './../../containers/shell-user/shell-user.component';

describe('UserComponent', () => {
  it('should find the paragrap text "Hi Adil"', async () => {

    await render(UserComponent, {
      declarations: [],
      componentProperties: {
        InwelcomeMsg: "Hi Adil"
      } as any
    });

    expect(await screen.findByText(/Hi Adil/i)).toBeTruthy();

  });

});

describe('ShellUserComponent', () => {
  it('should find the paragrap text "Hi Adil"', async () => {

    const component = await render(ShellUserComponent, {
      componentProperties: { countString: "CTS" },
      declarations: [UserComponent],
    });

    const button = component.getByText("Update Title");
    button.click();
    expect(await screen.findByText(/1CTS/i)).toBeTruthy();
    screen.debug();
  });

});