import {Component, OnInit} from '@angular/core';
import {DepService} from '../shared/dep.service';

@Component({
  selector: 'app-deps',
  templateUrl: './deps.component.html',
  styleUrls: ['./deps.component.scss']
})
export class DepsComponent implements OnInit {

  constructor(public depService: DepService) {
  }

  ngOnInit(): void {
  }

  onChange(id: number): void {
    this.depService.onToggle(id);
  }

}
