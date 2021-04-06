import {Component, OnInit} from '@angular/core';
import {RecService} from '../shared/rec.service';
import {DepService} from '../shared/dep.service';
import {PosService} from '../shared/pos.service';
import {PhoneService} from '../shared/phohe.service';
import {RecFormComponent} from '../rec-form/rec-form.component';

@Component({
  selector: 'app-recs',
  templateUrl: './recs.component.html',
  styleUrls: ['./recs.component.scss']
})
export class RecsComponent implements OnInit {

  constructor(public recService: RecService, public depService: DepService,
              public posService: PosService, public phService: PhoneService) {
  }

  ngOnInit(): void {
  }
}
