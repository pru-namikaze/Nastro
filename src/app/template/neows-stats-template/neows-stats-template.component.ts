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

  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;

  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    private sanitizer: DomSanitizer) {
    this.serviceResponseBodyList = {};

    this.reloadNeoWsStats();
   }

   reloadNeoWsStats(): void {
    this.infrastructureApi.GenerateResponseUrl();
    
    // tslint:disable-next-line: max-line-length
    this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = {};
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = body;

        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.infrastructureApi.baseService] });

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].nasa_jpl_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.infrastructureApi.baseService].nasa_jpl_url);
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].nasa_jpl_url = this.serviceResponseBodyList[this.infrastructureApi.baseService].nasa_jpl_url.changingThisBreaksApplicationSecurity;

        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList, this.infrastructureApi.baseService);
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
