import { IMethod } from './method';

export interface IMovie {
  date: Date;
  title: string;
  mani: boolean;
  nida: boolean;
  method: IMethod;
}

export interface JsonMovie {
  date: string;
  title: string;
  mani: string;
  nida: string;
  method: string;
}
