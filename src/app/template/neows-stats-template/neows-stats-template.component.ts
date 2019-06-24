import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';

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
  baseService: string;

  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    private sanitizer: DomSanitizer) {
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
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.baseService] });
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].nasa_jpl_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].nasa_jpl_url);
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].nasa_jpl_url = this.serviceResponseBodyList[this.baseService].nasa_jpl_url.changingThisBreaksApplicationSecurity;

        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList, this.baseService);
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
