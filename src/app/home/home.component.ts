import { Component } from '@angular/core';
import {
  faCircleCheck,
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { IMethod } from '../data/movies2019/schema/method';
import { IMovie } from '../data/movies2019/schema/movie';
import { MoviesApiService } from '../data/movies2019/service/movies-api.service';
import { IMovieDetails } from '../data/omdb/schema/movie-details';
import { OmdbApiService } from '../data/omdb/service/omdb-api.service';
import { MovieModalComponent } from '../shared/component/movie-modal/movie-modal.component';
import {
  EmptyIFilterInfo,
  IFilterInfo,
  Month,
  Theme,
} from '../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedMonth: Month | null = Month.January;
  faMars = faMars;
  faVenus = faVenus;
  faCircleCheck = faCircleCheck;

  private _currentTheme: Theme = Theme.large;
  get currentTheme(): Theme {
    return this._currentTheme;
  }

  private _activeFilter: IFilterInfo = new EmptyIFilterInfo();
  get activeFilter(): IFilterInfo {
    return this._activeFilter;
  }

  private _displayMovies: IMovieDetails[] = [];
  get displayMovies(): IMovieDetails[] {
    return this._displayMovies.sort(
      (a: IMovieDetails, b: IMovieDetails) =>
        a.watchDate.getDate() - b.watchDate.getDate()
    );
  }

  constructor(
    private moviesApi: MoviesApiService,
    private omdbApi: OmdbApiService,
    private modalService: NgbModal
  ) {}

  filterDisplayMovies(filterInfo: IFilterInfo): void {
    this._displayMovies = [];
    this._activeFilter = filterInfo;

    if (filterInfo.filterBy !== '' && filterInfo.filterTerm !== '') {
      if (filterInfo.filterBy === 'month') {
        this.moviesApi
          .getMoviesByMonth(this.mapMonthStringToIndex(filterInfo.filterTerm))
          .subscribe((movie: IMovie) => {
            this.omdbApi
              .getMovie(movie)
              .subscribe((movie: IMovieDetails) =>
                this._displayMovies.push(movie)
              );
          });
      } else if (filterInfo.filterBy === 'watcher') {
        this.moviesApi
          .getMoviesByWatcher(filterInfo.filterTerm)
          .subscribe((movie: IMovie) => {
            this.omdbApi
              .getMovie(movie)
              .subscribe((movie: IMovieDetails) =>
                this._displayMovies.push(movie)
              );
          });
      } else {
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
            .subscribe((movie: IMovieDetails) =>
              this._displayMovies.push(movie)
            );
        });
      }
    }
  }

  mapMonthStringToIndex(month: string): number {
    switch (month) {
      case 'January':
        return Month.January;
      case 'February':
        return Month.February;
      case 'March':
        return Month.March;
      case 'April':
        return Month.April;
      case 'May':
        return Month.May;
      case 'June':
        return Month.June;
      case 'July':
        return Month.July;
      case 'August':
        return Month.August;
      case 'September':
        return Month.September;
      case 'October':
        return Month.October;
      case 'November':
        return Month.November;
      case 'December':
        return Month.December;
      default:
        return -1;
    }
  }

  setResultsTitle(): string {
    let title = `${this._displayMovies.length} Movies `;

    if (this._activeFilter.filterBy === 'month') {
      return (title += `Watched In: "${this._activeFilter.filterTerm}"`);
    } else if (this._activeFilter.filterBy === 'watcher') {
      return (title += `Watched By: "${this._activeFilter.filterTerm}"`);
    } else if (this._activeFilter.filterBy === 'actors') {
      return (title += `Starring: "${this._activeFilter.filterTerm}"`);
    } else if (this._activeFilter.filterBy === 'director') {
      return (title += `Directed By: "${this._activeFilter.filterTerm}"`);
    } else if (this._activeFilter.filterBy === 'writers') {
      return (title += `Written By: "${this._activeFilter.filterTerm}"`);
    } else if (this._activeFilter.filterBy === 'genres') {
      return (title += `From the Genre: "${this._activeFilter.filterTerm}"`);
    } else {
      return '';
    }
  }

  changeTheme(selectedTheme: Theme): void {
    this._currentTheme = selectedTheme;
  }

  getMethodString(method: IMethod): string {
    return IMethod[method];
  }

  openModal(movieDetails: IMovieDetails) {
    const modalRef = this.modalService.open(MovieModalComponent, {
      ariaLabelledBy: 'movie-title',
      modalDialogClass: 'modal-dialog-class',
    });
    modalRef.componentInstance.movieDetails = movieDetails;
    modalRef.result
      .then((filterInfo: IFilterInfo) => this.filterDisplayMovies(filterInfo))
      .catch(() => console.log());
  }
}
