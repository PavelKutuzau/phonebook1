import {Injectable} from '@angular/core';

export interface Rec {
  id: number;
  depP: string;    // department parent
  dep: string;     // department
  name: string;
  phone: string;   // phone mobile
  phoneW: string;  // phone work
  phoneWM: string; // phone mobile
}

@Injectable()
export class RecService {
  public recs: Rec[] = []; // records

  constructor() {
  }
}
