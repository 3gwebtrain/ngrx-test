import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { HomeComponent } from './home.component';

it('should search on username', async () => {
  await render(HomeComponent, {
    imports: [HttpClientModule, ReactiveFormsModule],
  });

  await userEvent.type(screen.getByRole('searchbox'), 'jbarif');

  await screen.findByText(/mocked-jbarif/i);
});