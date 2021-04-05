import {Injectable} from '@angular/core';

export interface Phone {
  id: number;
  num: string;
}

const prefix = '+375(29)745-32-6';

@Injectable({providedIn: 'root'})
export class PhoneService {

  // positions
  public poss: Phone[] = [
    {id: 1, num: '1-23'},
    {id: 2, num: '1-34'},
    {id: 3, num: '1-45'},
    {id: 4, num: '1-56'},
    {id: 5, num: '1-67'},
    {id: 6, num: '1-78'},
    {id: 7, num: '1-89'},
    {id: 8, num: '1-90'},
    {id: 9, num: '2-23'},
    {id: 10, num: '2-24'},
    {id: 11, num: '2-25'},
    {id: 12, num: '2-26'},
    {id: 13, num: '2-27'},
    {id: 14, num: '2-28'},
    {id: 15, num: '2-29'},
    {id: 16, num: '2-34'},
    {id: 17, num: '2-35'},
    {id: 18, num: '2-45'},
    {id: 19, num: '2-46'},
    {id: 20, num: '2-47'},
    {id: 21, num: '2-48'},
    {id: 22, num: '2-49'},
    {id: 23, num: '2-56'},
    {id: 24, num: '2-57'},
    {id: 25, num: '2-58'},
    {id: 26, num: '2-59'},
    {id: 27, num: '2-67'},
    {id: 28, num: '2-68'},
    {id: 29, num: '2-69'},
    {id: 30, num: '3-56'},
    {id: 31, num: '3-57'},
    {id: 32, num: '3-58'},
    {id: 33, num: '3-59'},
    {id: 34, num: '3-67'},
    {id: 35, num: '3-68'},
    {id: 36, num: '3-69'},
    {id: 37, num: '3-78'},
    {id: 38, num: '3-79'},
    {id: 39, num: '3-89'},
    {id: 40, num: '3-90'}
  ];

  constructor() {
  }

  getWorkPhones(ids: number[]): string {
    let workPhones = '';
    ids.forEach(id => {
      const idx = this.poss.findIndex(p => p.id === id);
      if (workPhones === '') {
        workPhones = this.poss[idx].num;
      } else {
        workPhones = workPhones + ', ' + this.poss[idx].num;
      }
    });
    return workPhones;
  }

  getWorkPhonesMobile(ids: number[]): string {
    let workPhonesMobile = '';
    ids.forEach(id => {
      const idx = this.poss.findIndex(p => p.id === id);
      if (workPhonesMobile === '') {
        workPhonesMobile = prefix + this.poss[idx].num;
      } else {
        workPhonesMobile = workPhonesMobile + ', ' + prefix + this.poss[idx].num;
      }
    });
    return workPhonesMobile;
  }
}

