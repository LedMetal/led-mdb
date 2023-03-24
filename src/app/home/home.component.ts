import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { IMovie } from '../data/movies2019/schema/movie';
import { MoviesApiService } from '../data/movies2019/service/movies-api.service';
import { IMovieDetails } from '../data/omdb/schema/movie-details';
import { OmdbApiService } from '../data/omdb/service/omdb-api.service';
import { Month } from '../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedMonth: Month = Month.January;

  private _displayMovies: IMovieDetails[] = [];
  get displayMovies(): IMovieDetails[] {
    return this._displayMovies.sort(
      (a: IMovieDetails, b: IMovieDetails) =>
        a.watchDate.getDate() - b.watchDate.getDate()
    );
  }

  constructor(
    private moviesApi: MoviesApiService,
    private omdbApi: OmdbApiService
  ) {}

  ngOnInit(): void {
    this.setDisplayMovies();
  }

  setDisplayMovies() {
    this._displayMovies = [];

    this.moviesApi
      .getMoviesByMonth(this.selectedMonth)
      .subscribe((movie: IMovie) => {
        this.omdbApi
          .getMovie(movie)
          .subscribe((movie: IMovieDetails) => this._displayMovies.push(movie));
      });
  }

  getMonthFilter(month: string): void {
    switch (month) {
      case 'January':
        this.selectedMonth = Month[month];
        break;
      case 'February':
        this.selectedMonth = Month[month];
        break;
      case 'March':
        this.selectedMonth = Month[month];
        break;
      case 'April':
        this.selectedMonth = Month[month];
        break;
      case 'May':
        this.selectedMonth = Month[month];
        break;
      case 'June':
        this.selectedMonth = Month[month];
        break;
      case 'July':
        this.selectedMonth = Month[month];
        break;
      case 'August':
        this.selectedMonth = Month[month];
        break;
      case 'September':
        this.selectedMonth = Month[month];
        break;
      case 'October':
        this.selectedMonth = Month[month];
        break;
      case 'November':
        this.selectedMonth = Month[month];
        break;
      case 'December':
        this.selectedMonth = Month[month];
        break;
    }

    this.setDisplayMovies();
  }
}
