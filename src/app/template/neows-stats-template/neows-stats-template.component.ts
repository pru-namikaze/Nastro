import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-stats-template',
  templateUrl: './neows-stats-template.component.html',
  styleUrls: ['./neows-stats-template.component.css']
})
export class NeowsStatsTemplateComponent implements OnInit {

  baseServiceName: string;
  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;
  columnDef: Array<string>;
  baseService: string;

  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.columnDef = [];
    this.baseServiceName = 'NeoWs';
    this.serviceResponseBodyList = {};
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
    this.baseService = 'Neo - Stats';

    this.reloadNeoWsStats();

   }

   reloadNeoWsStats(): void {
    this.infrastructureApi.GenerateResponseUrl();
    this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.baseService] = {};
        this.serviceResponseBodyList[this.baseService] = body;
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].url);
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.baseService] });
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].nasa_jpl_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].nasa_jpl_url);
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].nasa_jpl_url = this.serviceResponseBodyList[this.baseService].nasa_jpl_url.changingThisBreaksApplicationSecurity;
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );

   }

  ngOnInit() {
  }

}
