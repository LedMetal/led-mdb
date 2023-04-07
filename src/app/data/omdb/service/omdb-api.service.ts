import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { IMovie } from '../../movies2019/schema/movie';
import { IMovieDetails, JsonMovieDetails } from '../schema/movie-details';

@Injectable({
  providedIn: 'root',
})
export class OmdbApiService {
  constructor(private http: HttpClient) {}

  public getMovie(iMovie: IMovie): Observable<IMovieDetails> {
    const url = `${Constants.URL_PREFIX}&t=${iMovie.title}&type=movie&plot=full/`;

    return this.http
      .get<JsonMovieDetails>(url)
      .pipe(map((movie) => this.mapJsonApiMovieToIMovieDetails(movie, iMovie)));
  }

  mapJsonApiMovieToIMovieDetails(
    movie: JsonMovieDetails,
    iMovie: IMovie
  ): IMovieDetails {
    return {
      actors: movie.Actors.split(', '),
      awards: movie.Awards,
      director: movie.Director.split(', '),
      genres: movie.Genre.split(', '),
      imdbID: movie.imdbID,
      language: movie.Language,
      mani: iMovie.mani,
      metascore: parseInt(movie.Metascore),
      nida: iMovie.nida,
      plot: movie.Plot,
      poster: movie.Poster,
      rated: movie.Rated,
      ratings: movie.Ratings,
      released: new Date(movie.Released),
      runtime: movie.Runtime,
      title: movie.Title,
      watchDate: iMovie.date,
      watchMethod: iMovie.method,
      writers: movie.Writer.split(', '),
      year: parseInt(movie.Year),
    };
  }
}
