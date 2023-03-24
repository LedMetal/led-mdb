import { IMethod } from '../../movies2019/schema/method';
import { IRating } from './rating';

export interface IMovieDetails {
  actors: string[];
  director: string;
  genres: string[];
  language: string;
  mani: boolean;
  metascore: number;
  nida: boolean;
  plot: string;
  poster: string;
  rated: string;
  ratings: IRating[];
  released: Date;
  runtime: string;
  title: string;
  watchDate: Date;
  watchMethod: IMethod;
  writers: string[];
  year: number;
}

export class EmptyMovieDetails {
  actors: string[];
  director: string;
  genres: string[];
  language: string;
  mani: boolean;
  metascore: number;
  nida: boolean;
  plot: string;
  poster: string;
  rated: string;
  ratings: IRating[];
  released: Date;
  runtime: string;
  title: string;
  watchDate: Date;
  watchMethod: IMethod;
  writers: string[];
  year: number;

  constructor() {
    this.actors = [];
    this.director = '';
    this.genres = [];
    this.language = '';
    this.mani = false;
    this.metascore = 0;
    this.nida = false;
    this.plot = '';
    this.poster = '';
    this.rated = '';
    this.ratings = [];
    this.released = new Date();
    this.runtime = '';
    this.title = '';
    this.watchDate = new Date();
    this.watchMethod = IMethod.Other;
    this.writers = [];
    this.year = 0;
  }
}

export interface JsonMovieDetails {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
