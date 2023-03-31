import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { IMovie } from '../data/movies2019/schema/movie';
import { MoviesApiService } from '../data/movies2019/service/movies-api.service';
import { IMovieDetails } from '../data/omdb/schema/movie-details';
import { OmdbApiService } from '../data/omdb/service/omdb-api.service';
import { IFilterInfo, Month } from '../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedMonth: Month | null = Month.January;

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

  setDisplayMovies() {
    this._displayMovies = [];

    if (this.selectedMonth !== null) {
      this.moviesApi
        .getMoviesByMonth(this.selectedMonth)
        .subscribe((movie: IMovie) => {
          this.omdbApi
            .getMovie(movie)
            .subscribe((movie: IMovieDetails) =>
              this._displayMovies.push(movie)
            );
        });
    }
  }

  filterDisplayMovies(filterInfo: IFilterInfo): void {
    this._displayMovies = [];

    this.moviesApi.getAllMovies().subscribe((movie: IMovie) => {
      this.omdbApi
        .getMovie(movie)
        .pipe(
          filter((movie: IMovieDetails) => {
            switch (filterInfo.filterBy) {
              case 'actors':
                return movie.actors.includes(filterInfo.filterTerm);
              case 'director':
                return movie.director.includes(filterInfo.filterTerm);
              case 'writers':
                return movie.writers.includes(filterInfo.filterTerm);
              case 'genres':
                return movie.genres.includes(filterInfo.filterTerm);
              default:
                return false;
            }
          })
        )
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
      default:
        this.selectedMonth = null;
        break;
    }

    this.setDisplayMovies();
  }
}
