import { Component, Input, OnInit } from '@angular/core';
import {
  EmptyMovieDetails,
  IMovieDetails,
} from 'src/app/data/omdb/schema/movie-details';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movieDetails: IMovieDetails = new EmptyMovieDetails();
}
