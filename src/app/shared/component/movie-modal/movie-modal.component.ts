import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faBullhorn,
  faCalendar,
  faClock,
  faMars,
  faMasksTheater,
  faPencil,
  faStopwatch,
  faTrophy,
  faVenus,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  EmptyMovieDetails,
  IMovieDetails,
} from 'src/app/data/omdb/schema/movie-details';
import { Constants } from '../../constants';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent {
  @Input() movieDetails: IMovieDetails = new EmptyMovieDetails();
  @Output() selectedActor: EventEmitter<string> = new EventEmitter();

  faCalendar = faCalendar;
  faClock = faClock;
  faBullhorn = faBullhorn;
  faMars = faMars;
  faMasksTheater = faMasksTheater;
  faPencil = faPencil;
  faStopwatch = faStopwatch;
  faTrophy = faTrophy;
  faVenus = faVenus;
  faVideo = faVideo;

  constructor(public activeModal: NgbActiveModal) {}

  openImdbLink(imdbID: string): void {
    window.open(`${Constants.IMDB_PREFIX}/${imdbID}`, '_blank');
  }

  setGenreBgColor(genre: string): string {
    switch (genre) {
      case 'Comedy':
        return '#b00b69';
      case 'Romance':
        return '#d40c0c';
      case 'Drama':
        return '#8d56b1';
      case 'Horror':
        return '#3a1717';
      case 'Sci-Fi':
        return '#E60078';
      case 'Action':
        return '#041e42';
      case 'Adventure':
        return '#2E854E';
      case 'Crime':
        return '#640404';
      case 'Music':
        return '#007E99';
      case 'Biography':
        return '#cb2f66';
      case 'Mystery':
        return '#876524';
      case 'Animation':
        return '#36808B';
      case 'Fantasy':
        return '#9647FF';
      case 'Family':
        return '#B55959';
      case 'Documentary':
        return '#892b1a';
      case 'Musical':
        return '#408500';
      case 'Sport':
        return '#4f77a5';
      case 'Thriller':
        return '#1f3e5b';
      case 'History':
        return '#946B6B';
      default:
        return '';
    }
  }

  setFilter(filterBy: string, filterTerm: string): void {
    this.activeModal.close({ filterBy: filterBy, filterTerm: filterTerm });
  }
}
