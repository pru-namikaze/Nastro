import { Component, OnInit } from '@angular/core';

import { InfrastructureCommonFilterService } from 'src/app/services/infrastructure-common-filter.service';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-filters-template',
  templateUrl: './filters-template.component.html',
  styleUrls: ['./filters-template.component.css']
})

export class FiltersTemplateComponent implements OnInit {


  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonFilter: InfrastructureCommonFilterService
    ) {
  }

  ngOnInit() {
  }

  getPrameterNameList(): Array<string> {
    const prameterNameList: Array<string> = [];
    for (const pram of this.infrastructureCommonFilter.filterParameters) {
      prameterNameList.push(pram.name);
    }
    return prameterNameList;
  }

  getPramLabelText(parameterName: string, position: string): string | boolean {
    for (const pram of this.infrastructureCommonFilter.filterParameters) {
      if (pram.name === parameterName && !isNullOrUndefined(pram[position])) {
        return pram[position];
      }
    }
    return false;
  }

  getPramType(parameterName: string): string | boolean {
    console.table(this.infrastructureCommonFilter.filterParameters);
    for (const pram of this.infrastructureCommonFilter.filterParameters) {
      if (pram.name === parameterName) {
        return pram.type;
      }
    }
    return false;
  }

  isCheckbox(parameterName: string): string | boolean {
    for (const pram of this.infrastructureCommonFilter.filterParameters) {
      if (pram.name === parameterName) {
        return pram.type === 'checkbox';
      }
    }
    return false;
  }

  isQueryStringPram(parameterName: string): boolean {
    return !isNullOrUndefined(this.infrastructureApi.QueryPrameters[parameterName]);
  }

  isSelect(parameterName: string): boolean {
    return this.isQueryStringPram(parameterName) && this.getPramType(parameterName) === 'dropdown';
  }

  isNormalQueryPramElement(parameterName: string): boolean {
    return this.isQueryStringPram(parameterName) && this.getPramType(parameterName) !== 'dropdown';
  }

  getChoices(parameterName: string): Array<string> {
    for (const pram of this.infrastructureCommonFilter.filterParameters) {
      if (pram.name === parameterName) {
        return pram.choices;
      }
    }
    return null;
  }
}
