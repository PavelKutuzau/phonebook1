import {Injectable} from '@angular/core';

export interface Rec {
  id: number;
  depP?: string;    // department parent
  dep: string;     // department
  name: string;
  phone?: string;   // phone mobile
  phoneW: string;  // phone work
  phoneWM?: string; // phone mobile
}

@Injectable({providedIn: 'root'})
export class RecService {
  // records
  public recs: Rec[] = [
    {id: 1, dep: 'Администрация', name: 'Иванов Иван Иванович', phoneW: '1-23'},
    {id: 2, dep: 'Бухгалтерия', name: 'Петров Петр Петрович', phoneW: '2-34'},
    {id: 3, dep: 'Склад', name: 'Сидорова Анжелина Сидоровна', phoneW: '3-45'}
  ];

  constructor() {
  }
}
