import {Injectable} from '@angular/core';

export interface Pos {
  id: number;
  title: string;
}

@Injectable({providedIn: 'root'})
export class PosService {
  // positions
  public poss: Pos[] = [
    {id: 1, title: 'Директор'},
    {id: 2, title: 'Главный бухгалтер'},
    {id: 3, title: 'Начальник отдела'},
    {id: 4, title: 'Инженер'},
    {id: 5, title: 'Бухгалтер'},
    {id: 6, title: 'Секретарь'},
    {id: 7, title: 'Кладовщик'},
  ];

  constructor() {
  }

  getPositionTitle(id: number): string {
    const ids = this.poss.findIndex(p => p.id === id);
    return this.poss[ids].title;
  }
}
