import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../data/service/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private moviesApi: MoviesApiService) {}

  ngOnInit(): void {
    this.moviesApi.getAll().subscribe((data) => console.log('data: ', data));
  }
}
