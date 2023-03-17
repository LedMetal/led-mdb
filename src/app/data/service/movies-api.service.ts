import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import moviesData from './json/movies_data.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor() {}

  getAll(): Observable<any> {
    return of(moviesData);
  }
}
