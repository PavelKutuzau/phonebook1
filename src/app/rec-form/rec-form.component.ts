import {Component, OnInit} from '@angular/core';
import {DepService} from '../shared/dep.service';
import {PosService} from '../shared/pos.service';
import {PhoneService} from '../shared/phohe.service';

@Component({
  selector: 'app-rec-form',
  templateUrl: './rec-form.component.html',
  styleUrls: ['./rec-form.component.scss'],
})
export class RecFormComponent implements OnInit {

  constructor(public depService: DepService, public posService: PosService, public phService: PhoneService) {
  }

  ngOnInit(): void {
  }

}
