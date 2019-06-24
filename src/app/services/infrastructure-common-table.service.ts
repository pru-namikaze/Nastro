import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfrastructureCommonTableService {

  tableDef: Array<string>;
  tableTupleList: Array<[string, Array<string>, Array<Array<string>>]>;
  tupleList: Array<[string, string]>;

  constructor() {
    this.tableDef = [];
    this.tableTupleList = [];
    this.tupleList = [];

   }

  findIndexInColumnDef(tableName: string): number {
    for (const row of this.tableTupleList) {
      if ( row[0] === tableName) {
        return this.tableTupleList.indexOf(row);
      }
    }
    return null;
  }

  cardPress(tablename: string): void {
    if (!document.getElementById('collapse' + tablename).className.includes('show')) {
      document.getElementById('arrow' + tablename).className = 'fas fa-angle-down';
    } else {
      document.getElementById('arrow' + tablename).className = 'fas fa-angle-right';
    }
    this.documentLocationHref('#accordion-' + tablename);
  }

  documentLocationHref(elementId: string): void {
    document.location.href = elementId;
  }
}
