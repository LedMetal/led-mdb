import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Method } from '../schema/method';
import { IMovie, JSONMovie } from '../schema/movie';
import moviesData from './json/movies_data.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor() {}

  getAll(): Observable<IMovie[]> {
    return new Observable((observer: Subscriber<IMovie[]>) => {
      observer.next(
        moviesData.map((movie: JSONMovie) => this.mapJSONMovieToIMovie(movie))
      );
    });
  }

  mapJSONMovieToIMovie(jsonMovie: JSONMovie): IMovie {
    return {
      date: new Date(`${jsonMovie.date}, 2019`),
      title: jsonMovie.title,
      mani: jsonMovie.mani === 'Yes',
      nida: jsonMovie.nida === 'Yes',
      method: this.setMovieMethod(jsonMovie.method),
    };
  }

  setMovieMethod(method: string): Method {
    switch (method) {
      case 'Cinema':
        return Method.Cinema;
      case 'TV':
        return Method.TV;
      case 'Netflix':
        return Method.Netflix;
      case 'YouTube':
        return Method.YouTube;
      case 'Stream':
        return Method.Stream;
      case 'Torrent':
        return Method.Torrent;
      case 'DVD/Blu-Ray':
        return Method['DVD/Blu-Ray'];
      case 'Amazon':
        return Method.Amazon;
      case 'Cineplex Rental':
        return Method['Cineplex Rental'];
      case 'Airplane':
        return Method.Airplane;
      case 'Tubi':
        return Method.Tubi;
      default:
        return Method.Other;
    }
  }
}
