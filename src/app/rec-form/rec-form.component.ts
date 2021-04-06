import {Component, OnInit} from '@angular/core';
import {DepService} from '../shared/dep.service';
import {PosService} from '../shared/pos.service';
import {PhoneService} from '../shared/phohe.service';
import {RecService} from '../shared/rec.service';


@Component({
  selector: 'app-rec-form',
  templateUrl: './rec-form.component.html',
  styleUrls: ['./rec-form.component.scss'],
})


export class RecFormComponent implements OnInit {

  id: number;
  depId: number;
  posId: number;
  name: string;
  phone: string;
  phoneWIDs: number[];
  tempPhone: number;

  constructor(public depService: DepService, public posService: PosService,
              public phService: PhoneService, public recService: RecService) {
    this.cleanInfo();
  }

  ngOnInit(): void {
    this.recService.trigger$.subscribe(() => this.redactRec());
  }

  cleanInfo(): void {
    this.id = 0;
    this.depId = 0;
    this.posId = 0;
    this.name = '';
    this.phone = '';
    this.phoneWIDs = [];
    this.tempPhone = 0;
  }

  getDepTitle(): string {

    const emptyString = '';
    if (this.depId > 0) {
      return this.depService.deps[this.depId - 1].title;
    } else {
      return emptyString;
    }
  }

  getPosTitle(): string {
    const emptyString = '';
    if (this.posId > 0) {
      return this.posService.poss[this.posId - 1].title;
    } else {
      return emptyString;
    }
  }

  getWorkPhones(): string {
    if (this.tempPhone > 0) {
      this.phoneWIDs.push(Math.abs(this.tempPhone));
      this.tempPhone = 0;
    }
    return this.phService.getWorkPhones(this.phoneWIDs);
  }

  addRecord(): void {
    if (0 !== this.id){
      const rec = this.recService.getRec(this.id);
      rec.name = this.name;
      rec.depId = Math.abs(this.depId);
      rec.phone = this.phone;
      rec.posId = Math.abs(this.posId);
      rec.phoneWIDs = this.phoneWIDs;
    } else {
      this.recService.recs.push({
        id: this.recService.getMaxID() + 1,
        name: this.name,
        depId: Math.abs(this.depId),
        phone: this.phone,
        posId: Math.abs(this.posId),
        phoneWIDs: this.phoneWIDs
      });
    }
    this.cleanInfo();
  }

  public redactRec(): void {
    const rec = this.recService.getRec(this.recService.idRedRecord);
    this.id = rec.id;
    this.depId = rec.depId;
    this.posId = rec.posId;
    this.name = rec.name;
    this.phone = (undefined === rec.phone) ? '' : rec.phone;
    this.phoneWIDs = rec.phoneWIDs;
  }
}
