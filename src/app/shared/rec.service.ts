import {Injectable} from '@angular/core';

export interface Rec {
  id: number;
  depId: number;    // department ID
  posId: number;    // position ID
  name: string;
  phone?: string;   // phone mobile
  phoneWIDs: number[];   // phone work IDs
}

@Injectable({providedIn: 'root'})
export class RecService {
  // records
  public recs: Rec[] = [
    {id: 1, posId: 1, depId: 1, phoneWIDs: [1], name: 'Иванов Иван Иванович'},
    {id: 2, posId: 6, depId: 1, phoneWIDs: [2], name: 'Сидорова Анжелина Сидоровна'},
    {id: 3, posId: 2, depId: 2, phoneWIDs: [9], name: 'Петров Петр Петрович', phone: '+375(44)379-78-86(мтс)'},
    {
      id: 4,
      posId: 5,
      depId: 2,
      phoneWIDs: [10],
      name: 'Петрова Надежда Яковлевна',
      phone: '+375(44)379-78-83(мтс), +375(29)647-34-65(a1)'
    },
    {id: 5, posId: 5, depId: 2, phoneWIDs: [11], name: 'Петрова Наталья Петровна'},
    {id: 6, posId: 7, depId: 3, phoneWIDs: [30], name: 'Сидорова Гална Васильевна', phone: '243-28-17'},
    {id: 7, posId: 3, depId: 4, phoneWIDs: [18], name: 'Иванова Ирина Алексеевна'},
    {id: 8, posId: 4, depId: 4, phoneWIDs: [19], name: 'Кузнецов Андрей Юрьевич', phone: '+375(44)746-76-24'},
    {id: 9, posId: 4, depId: 4, phoneWIDs: [20], name: 'Новиков Игорь Петвоич'},
    {
      id: 10,
      posId: 3,
      depId: 5,
      phoneWIDs: [23],
      name: 'Колесников Виталий Михайлович',
      phone: '254-47-26(дом), +375(25)746-76-24 (Life)'
    }
  ];

  constructor() {
    this.recs[0].phoneWIDs.push(3);
    this.recs[6].phoneWIDs.push(21);
  }

  removeRec(id: number): void {
    this.recs = this.recs.filter(r => r.id !== id);
  }

  redactRec(id: number): void {
    this.recs = this.recs.filter(r => r.id !== id);
  }
}
