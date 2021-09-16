import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, startWith, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GitHubService } from './../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  search = new FormControl('');
  user$ = this.search.valueChanges.pipe(
    switchMap((value) =>
      this.service.getUser(value).pipe(
        tap(console.log),
        catchError(({ error }) => of(error.errorMessage))
      )
    ),
    startWith('')
  );

  constructor(private service: GitHubService) { }
}