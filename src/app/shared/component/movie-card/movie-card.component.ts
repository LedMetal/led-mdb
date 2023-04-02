import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  EmptyMovieDetails,
  IMovieDetails,
} from 'src/app/data/omdb/schema/movie-details';
import { IFilterInfo, Theme } from '../../constants';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movieDetails: IMovieDetails = new EmptyMovieDetails();
  @Input() theme: Theme = Theme.large;
  @Output() searchByFilter: EventEmitter<IFilterInfo> = new EventEmitter();
  @Output() openMovieModal: EventEmitter<IMovieDetails> = new EventEmitter();

  openModal() {
    this.openMovieModal.emit(this.movieDetails);
  }
}
