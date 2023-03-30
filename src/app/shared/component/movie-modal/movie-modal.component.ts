import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faBullhorn,
  faClock,
  faMasksTheater,
  faPencil,
  faTrophy,
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

  faClock = faClock;
  faBullhorn = faBullhorn;
  faMasksTheater = faMasksTheater;
  faPencil = faPencil;
  faTrophy = faTrophy;
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
        return '#f70084';
      case 'Action':
        return '#041e42';
      case 'Adventure':
        return '#53c57f';
      case 'Crime':
        return '#640404';
      case 'Music':
        return '#00d2ff';
      case 'Biography':
        return '#cb2f66';
      case 'Mystery':
        return '#876524';
      case 'Animation':
        return '#3a8e9d';
      case 'Fantasy':
        return '#be8cff';
      case 'Family':
        return '#dbacac';
      case 'Documentary':
        return '#892b1a';
      case 'Musical':
        return '#85ff00';
      case 'Sport':
        return '#4f77a5';
      case 'Thriller':
        return '#1f3e5b';
      case 'History':
        return '#a78686';
      default:
        return '';
    }
  }

  selectActor(actor: string) {
    this.activeModal.close(actor);
  }
}
