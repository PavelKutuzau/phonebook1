import {Injectable} from '@angular/core';

export interface Phone {
  id: number;
  num: string;
  isBusy: boolean;
}

const prefix = '+375(29)745-32-6';

@Injectable({providedIn: 'root'})
export class PhoneService {

  public phones: Phone[] = [
    {id: 1, num: '1-23', isBusy: true},
    {id: 2, num: '1-34', isBusy: true},
    {id: 3, num: '1-45', isBusy: true},
    {id: 4, num: '1-56', isBusy: false},
    {id: 5, num: '1-67', isBusy: false},
    {id: 6, num: '1-78', isBusy: false},
    {id: 7, num: '1-89', isBusy: false},
    {id: 8, num: '1-90', isBusy: false},
    {id: 9, num: '2-23', isBusy: true},
    {id: 10, num: '2-24', isBusy: true},
    {id: 11, num: '2-25', isBusy: true},
    {id: 12, num: '2-26', isBusy: false},
    {id: 13, num: '2-27', isBusy: false},
    {id: 14, num: '2-28', isBusy: false},
    {id: 15, num: '2-29', isBusy: false},
    {id: 16, num: '2-34', isBusy: false},
    {id: 17, num: '2-35', isBusy: false},
    {id: 18, num: '2-45', isBusy: true},
    {id: 19, num: '2-46', isBusy: true},
    {id: 20, num: '2-47', isBusy: true},
    {id: 21, num: '2-48', isBusy: true},
    {id: 22, num: '2-49', isBusy: false},
    {id: 23, num: '2-56', isBusy: true},
    {id: 24, num: '2-57', isBusy: false},
    {id: 25, num: '2-58', isBusy: false},
    {id: 26, num: '2-59', isBusy: false},
    {id: 27, num: '2-67', isBusy: false},
    {id: 28, num: '2-68', isBusy: false},
    {id: 29, num: '2-69', isBusy: false},
    {id: 30, num: '3-56', isBusy: true},
    {id: 31, num: '3-57', isBusy: false},
    {id: 32, num: '3-58', isBusy: false},
    {id: 33, num: '3-59', isBusy: false},
    {id: 34, num: '3-67', isBusy: false},
    {id: 35, num: '3-68', isBusy: false},
    {id: 36, num: '3-69', isBusy: false},
    {id: 37, num: '3-78', isBusy: false},
    {id: 38, num: '3-79', isBusy: false},
    {id: 39, num: '3-89', isBusy: false},
    {id: 40, num: '3-90', isBusy: false}
  ];

  constructor() {
  }

  getWorkPhones(ids: number[]): string {
    let workPhones = '';
    ids.forEach(id => {
      const idx = this.phones.findIndex(p => p.id === Math.abs(id));
      if (workPhones === '') {
        workPhones = this.phones[idx].num;
      } else {
        workPhones = workPhones + ', ' + this.phones[idx].num;
      }
    });
    return workPhones;
  }

  getWorkPhonesMobile(ids: number[]): string {
    let workPhonesMobile = '';
    ids.forEach(id => {
      const idx = this.phones.findIndex(p => p.id === id);
      if (workPhonesMobile === '') {
        workPhonesMobile = prefix + this.phones[idx].num;
      } else {
        workPhonesMobile = workPhonesMobile + ', ' + prefix + this.phones[idx].num;
      }
    });
    return workPhonesMobile;
  }

  getEmptyPhones(): Phone[] {
    return this.phones.filter(p => !p.isBusy);
  }

  getPhone(id: number): Phone {
    const ids = this.phones.findIndex(t => t.id === id);
    return this.phones[ids];
  }

  cleanPhone(id: number): void {
    this.getPhone(id).isBusy = false;
  }

  busyPhone(id: number): void {
    this.getPhone(id).isBusy = true;
  }
}

