import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from '../services/infrastructure-api.service';
import UrlDict from './../services/domainUrlDict.json';

@Component({
  selector: 'app-main-template-component',
  templateUrl: './main-template-component.component.html',
  styleUrls: ['./main-template-component.component.css']
})
export class MainTemplateComponentComponent implements OnInit {

  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;

  constructor(public infrastructureApi: InfrastructureApiService) {
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    infrastructureApi.baseService = this.baseServiceList[0];
  }

  getbaseServiceList() {
    this.infrastructureApi.baseService = (this.infrastructureApi.baseService === '') ? Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName])[0]: this.infrastructureApi.baseService;
    return Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
  }

   ngOnInit() {
  }
}
