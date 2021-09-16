import { render, screen } from '@testing-library/angular';
import { UserComponent } from './user.component';

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
