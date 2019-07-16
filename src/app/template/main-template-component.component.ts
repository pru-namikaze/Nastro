import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from '../services/infrastructure-api.service';
import { GetReloadDataService } from '../services/get-reload-data.service';
import UrlDict from './../services/domainUrlDict.json';

@Component({
  selector: 'app-main-template-component',
  templateUrl: './main-template-component.component.html',
  styleUrls: ['./main-template-component.component.css']
})
export class MainTemplateComponentComponent implements OnInit {

  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;

  constructor(public infrastructureApi: InfrastructureApiService, public getReloadData: GetReloadDataService) {
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    infrastructureApi.baseService = this.baseServiceList[0];
  }

  getbaseServiceList() {
    // tslint:disable-next-line: max-line-length
    this.infrastructureApi.baseService = (this.infrastructureApi.baseService === '') ? Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName])[0] : this.infrastructureApi.baseService;
    return Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
  }

  getNavbaseServiceList(baseServiceName: string): Array<string> {
    let baseService: Array<string> = [];
    for (const index of Object.keys(UrlDict[baseServiceName])) {
      baseService = [...baseService, UrlDict[baseServiceName][index].Name];
    }
    return baseService;
  }

  Visit(baseServiceName: string, baseService: string): void {
    console.table([[this.infrastructureApi.baseServiceName, baseServiceName], [this.infrastructureApi.baseService, baseService]]);
    this.infrastructureApi.baseServiceName = baseServiceName;
    console.table(this.infrastructureApi);
    this.infrastructureApi.baseService = baseService;

    this.getReloadData.infrastructureCommonFilter.setFilterPrameters(null);

    this.getReloadData.resetTable();

    this.getReloadData.reloadGetDataGiveToTableMaker(
      (this.infrastructureApi.GenerateResponseUrl(), this.infrastructureApi.ResponceURLDict),
      this.infrastructureApi.baseServiceName,
      this.infrastructureApi.baseService,
      this.infrastructureApi.QueryPrameters
    );
  }

  toggleNavDropDown(baseServiceName: string, showDropDownFlag: boolean): void {
    if (showDropDownFlag) {
      document.getElementById('navbar-list-' + baseServiceName).className = 'nav-item dropdown show';
      document.getElementById('navbar-dropdown-list-' + baseServiceName).className = 'dropdown-menu show';
    } else {
      document.getElementById('navbar-list-' + baseServiceName).className = 'nav-item dropdown';
      document.getElementById('navbar-dropdown-list-' + baseServiceName).className = 'dropdown-menu';
    }
  }

   ngOnInit() {
  }
}
