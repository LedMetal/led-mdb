import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  EmptyMovieDetails,
  IMovieDetails,
} from 'src/app/data/omdb/schema/movie-details';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movieDetails: IMovieDetails = new EmptyMovieDetails();
  @Output() searchByActor: EventEmitter<string> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(MovieModalComponent, {
      modalDialogClass: 'modal-dialog-class',
    });
    modalRef.componentInstance.movieDetails = this.movieDetails;
    modalRef.result
      .then((actor: string) => this.searchByActor.emit(actor))
      .catch(() => console.log());
  }
}
