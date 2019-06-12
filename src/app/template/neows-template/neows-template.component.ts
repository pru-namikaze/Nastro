import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-template',
  templateUrl: './neows-template.component.html',
  styleUrls: ['./neows-template.component.css']
})
export class NeowsTemplateComponent implements OnInit {

  NeoWsShowEnum: string;
  baseServiceName: string;
  baseServiceList: Array<string>;

  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {

    this.NeoWsShowEnum = '';
    this.baseServiceName = 'NeoWs';
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
  }

  ngOnInit() {
  }

}
