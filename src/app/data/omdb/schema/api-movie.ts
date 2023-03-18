export interface IApiMovie {
  actors: string[];
  director: string;
  genres: string[];
  language: string;
  metascore: number;
  plot: string;
  poster: string;
  rated: string;
  ratings: { source: string; value: string }[];
  released: Date;
  runtime: string;
  title: string;
  writers: string[];
  year: number;
}
