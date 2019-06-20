import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from '../services/infrastructure-api.service';
import UrlDict from './../services/domainUrlDict.json';
import DescDict from './../services/domainDescDict.json';

@Component({
  selector: 'app-main-template-component',
  templateUrl: './main-template-component.component.html',
  styleUrls: ['./main-template-component.component.css']
})
export class MainTemplateComponentComponent implements OnInit {

  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  DescDict: any;

  constructor(public infrastructureApi: InfrastructureApiService) {
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    infrastructureApi.baseService = this.baseServiceList[0];
    this.DescDict = DescDict;
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
    console.log('qwertygfcvbjkl;');
    console.table(this.infrastructureApi);
    this.infrastructureApi.baseService = baseService;
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
