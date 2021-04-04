import {Component, OnInit} from '@angular/core';
import {Rec, RecService} from '../shared/rec.service';

@Component({
  selector: 'app-recs',
  templateUrl: './recs.component.html',
  styleUrls: ['./recs.component.scss']
})
export class RecsComponent implements OnInit {

  constructor(public recService: RecService) {
  }

  ngOnInit(): void {
  }

}
