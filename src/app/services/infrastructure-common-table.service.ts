import { Injectable } from '@angular/core';
import { isArray, isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class InfrastructureCommonTableService {

  tableDef: Array<string>;
  tableTupleList: Array<[string, Array<string>, Array<Array<string>>]>;
  tupleList: Array<[string, string]>;
  cardTitle: string;
  additionalInformationText: string;

  constructor() {
    this.tableDef = [];
    this.tableTupleList = [];
    this.tupleList = [];
  }

  getKeylist(row: any): Array<string> {
    const keyList: Array<string> = [];
    for (const key2 of Object.keys(row)) {
      if (typeof (row[key2]) !== 'object') {
        keyList.push(key2);
      }
    }
    return keyList;
  }

  // tslint:disable-next-line: max-line-length
  makeTableDef(serviceResponseBodyList: object, baseService: string, cardTitle?: string, level?: number, accessKey?: string, infoText?: string): void {
    this.tableTupleList = [];
    this.tableDef = [];
    this.tupleList = [];

    if (!isNullOrUndefined(cardTitle)) {
      this.cardTitle = cardTitle;
    } else {
      this.cardTitle = null;
    }
    if (!isNullOrUndefined(infoText)) {
      this.additionalInformationText = infoText;
    } else {
      this.additionalInformationText = null;
    }
    if (!isNullOrUndefined(level) && !isNullOrUndefined(cardTitle)) {
      if (level === 1) {
        const table: any = {};
        table[baseService] = {};
        table[baseService].data = serviceResponseBodyList[baseService];
        serviceResponseBodyList = table;
      } else if (level === 2 && !isNullOrUndefined(accessKey)) {
        for (const key of Object.keys(serviceResponseBodyList[baseService])) {
          if (key !== accessKey) {
            delete serviceResponseBodyList[baseService][key];
          }
        }
      }
    }

    for (const key of Object.keys(serviceResponseBodyList[baseService])) {
      if (typeof (serviceResponseBodyList[baseService][key]) === 'object') {
        if (isArray(serviceResponseBodyList[baseService][key])) {
          // tslint:disable-next-line: max-line-length
          this.tableTupleList.push([key, this.getKeylist(serviceResponseBodyList[baseService][key][0]), serviceResponseBodyList[baseService][key]]);
        } else if (this.tableDef.indexOf(key) < 0) {
          // tslint:disable-next-line: max-line-length
          this.tableTupleList.push([key, this.getKeylist(serviceResponseBodyList[baseService][key]), [serviceResponseBodyList[baseService][key]]]);
        }
        this.tableDef.push(key);
      } else {
        this.tupleList.push([key, serviceResponseBodyList[baseService][key]]);
      }
    }
  }

  findIndexInColumnDef(tableName: string): number {
    for (const row of this.tableTupleList) {
      if (row[0] === tableName) {
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
