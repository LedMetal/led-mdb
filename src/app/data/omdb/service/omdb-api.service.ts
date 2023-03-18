import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IApiMovie } from '../schema/api-movie';

@Injectable({
  providedIn: 'root',
})
export class OmdbApiService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<IApiMovie> {
    return this.http
      .get(url)
      .pipe(map((movie) => this.mapJsonApiMovieToIApiMovie(movie)));
  }

  mapJsonApiMovieToIApiMovie(movie: any): IApiMovie {
    return {
      actors: movie.Actors.split(', '),
      director: movie.Director,
      genres: movie.Genre.split(', '),
      language: movie.Language,
      metascore: parseInt(movie.Metascore),
      plot: movie.Plot,
      poster: movie.Poster,
      rated: movie.Rated,
      ratings: movie.Ratings,
      released: new Date(movie.Released),
      runtime: movie.Runtime,
      title: movie.Title,
      writers: movie.Writer.split(', '),
      year: parseInt(movie.Year),
    };
  }
}
