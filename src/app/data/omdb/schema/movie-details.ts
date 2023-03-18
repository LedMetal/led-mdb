import { IRating } from './rating';

export interface IMovieDetails {
  actors: string[];
  director: string;
  genres: string[];
  language: string;
  metascore: number;
  plot: string;
  poster: string;
  rated: string;
  ratings: IRating[];
  released: Date;
  runtime: string;
  title: string;
  writers: string[];
  year: number;
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
