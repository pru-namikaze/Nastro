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

  showAPoD: boolean;
  showNeoWs: boolean;

  constructor(public infrastructureApi: InfrastructureApiService) {
    this.baseServiceNameList = Object.keys(UrlDict);

    this.showAPoD = false;
    this.showNeoWs = false;
  }

  toggleShowAPoD(): void {
    this.showAPoD = !this.showAPoD;
  }
  toggleShowNeoWs(): void {
    this.showNeoWs = !this.showNeoWs;
  }

   ngOnInit() {
  }
}
