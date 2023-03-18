import { Method } from './method';

export interface IMovie {
  date: Date;
  title: string;
  mani: boolean;
  nida: boolean;
  method: Method;
}

export interface JSONMovie {
  date: string;
  title: string;
  mani: string;
  nida: string;
  method: string;
}
