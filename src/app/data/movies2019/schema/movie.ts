import { IMethod } from './method';

export interface IMovie {
  date: Date;
  title: string;
  mani: boolean;
  nida: boolean;
  method: IMethod;
}

export interface JSONMovie {
  date: string;
  title: string;
  mani: string;
  nida: string;
  method: string;
}
