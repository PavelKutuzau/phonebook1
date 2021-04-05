import {Injectable} from '@angular/core';

export interface Dep { // Department (Подразделение)
  id: number;
  parentId: number; // ID подразделения вехнего уровня. Если parentId = 0 то текущее подразделение является корневым
  title: string;
  vis: boolean;     // Visible. Если становится false то все записи по этому подразделению пропадают с главнго поля.
}

@Injectable({providedIn: 'root'})
export class DepService {

  public deps: Dep[] = [
    {id: 1, parentId: 0, vis: true, title: 'Администрация'},
    {id: 2, parentId: 1, vis: true, title: 'Бухгалтерия'},
    {id: 3, parentId: 2, vis: true, title: 'Склад'},
    {id: 4, parentId: 1, vis: true, title: 'Центр инноваций'},
    {id: 5, parentId: 1, vis: true, title: 'Юридический отдел'}
  ];

  constructor() {
  }

  onToggle(id: number): void{
    const ids = this.deps.findIndex(t => t.id === id);
    this.deps[ids].vis = !this.deps[ids].vis;
  }
}
