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

  constructor(public infrastructureApi: InfrastructureApiService) {
    this.baseServiceNameList = Object.keys(UrlDict);
  }

  ngOnInit() {
  }
}
