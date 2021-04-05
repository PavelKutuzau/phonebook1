import {Injectable} from '@angular/core';

export interface Rec {
  id: number;
  depId: number;    // department ID
  name: string;
  phone?: string;   // phone mobile
  phoneW: string;   // phone work
  phoneWM?: string; // phone mobile
}

@Injectable({providedIn: 'root'})
export class RecService {
  // records
  public recs: Rec[] = [
    {id:  1, depId: 1, phoneW: '1-23', name: 'Иванов Иван Иванович'},
    {id:  2, depId: 1, phoneW: '1-24', name: 'Сидорова Анжелина Сидоровна'},
    {id:  3, depId: 2, phoneW: '2-23', name: 'Петров Петр Петрович'},
    {id:  4, depId: 2, phoneW: '2-24', name: 'Петрова Надежда Яковлевна'},
    {id:  5, depId: 2, phoneW: '2-25', name: 'Петрова Наталья Петровна'},
    {id:  6, depId: 3, phoneW: '3-34', name: 'Сидорова Гална Васильевна'},
    {id:  7, depId: 4, phoneW: '2-45', name: 'Иванова Ирина Алексеевна'},
    {id:  8, depId: 4, phoneW: '2-46', name: 'Кузнецов Андрей Юрьевич'},
    {id:  9, depId: 4, phoneW: '2-47', name: 'Новиков Игорь Петвоич'},
    {id: 10, depId: 5, phoneW: '2-56', name: 'Колесников Виталий Михайлович'}
  ];

  constructor() {
  }
}
