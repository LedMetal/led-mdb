export class Constants {
  static URL_PREFIX = 'http://www.omdbapi.com/?apikey=88e57f3b';
  static IMDB_PREFIX = 'https://www.imdb.com/title';
}

export enum Month {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

export interface IFilterInfo {
  filterBy: string;
  filterTerm: string;
}
