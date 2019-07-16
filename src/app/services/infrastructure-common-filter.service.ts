import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InfrastructureCommonFilterService {

  filterParameters: any;

  constructor() {
    this.filterParameters = [];
  }

  setFilterPrameters(filterParameters: any): void {
    this.filterParameters = filterParameters;
  }
}
