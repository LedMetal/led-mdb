import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { IMethod } from '../../movies2019/schema/method';
import { IMovie, JsonMovie } from '../../movies2019/schema/movie';
import moviesData from './json/movies_data.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  getAllMovies(): Observable<IMovie[]> {
    return new Observable((observer: Subscriber<IMovie[]>) => {
      observer.next(
        moviesData.map((movie: JsonMovie) => this.mapJsonNMovieToIMovie(movie))
      );
    });
  }

  mapJsonNMovieToIMovie(jsonMovie: JsonMovie): IMovie {
    return {
      date: new Date(`${jsonMovie.date}, 2019`),
      title: jsonMovie.title,
      mani: jsonMovie.mani === 'Yes',
      nida: jsonMovie.nida === 'Yes',
      method: this.setMovieMethod(jsonMovie.method),
    };
  }

  setMovieMethod(method: string): IMethod {
    switch (method) {
      case 'Cinema':
        return IMethod.Cinema;
      case 'TV':
        return IMethod.TV;
      case 'Netflix':
        return IMethod.Netflix;
      case 'YouTube':
        return IMethod.YouTube;
      case 'Stream':
        return IMethod.Stream;
      case 'Torrent':
        return IMethod.Torrent;
      case 'DVD/Blu-Ray':
        return IMethod['DVD/Blu-Ray'];
      case 'Amazon':
        return IMethod.Amazon;
      case 'Cineplex Rental':
        return IMethod['Cineplex Rental'];
      case 'Airplane':
        return IMethod.Airplane;
      case 'Tubi':
        return IMethod.Tubi;
      default:
        return IMethod.Other;
    }
  }
}
