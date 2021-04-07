import {Pipe, PipeTransform} from '@angular/core';
import {Rec} from './rec.service';

@Pipe({
  name: 'recFilter'
})
export class RecsFilterPipe implements PipeTransform {

  transform(recs: Rec[], search: string = ''): Rec[] {
    if (!search.trim()) {
      return recs;
    }
    return recs.filter(r => {
      return r.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
