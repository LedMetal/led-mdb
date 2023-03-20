import { Component, OnInit } from '@angular/core';
import { IMovie } from '../data/movies2019/schema/movie';
import { MoviesApiService } from '../data/movies2019/service/movies-api.service';
import { OmdbApiService } from '../data/omdb/service/omdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private moviesApi: MoviesApiService,
    private omdbApi: OmdbApiService
  ) {}

  ngOnInit(): void {
    this.moviesApi
      .getAllMovies()
      .subscribe((data: IMovie[]) => console.log('data: ', data));

    // this.omdbApi
    //   .get('http://www.omdbapi.com/?i=tt3896198&apikey=88e57f3b')
    //   .subscribe((data) => console.log('data: ', data));
  }
}
