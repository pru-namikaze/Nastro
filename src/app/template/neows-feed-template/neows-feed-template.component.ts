import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';


@Component({
  selector: 'app-neows-feed-template',
  templateUrl: './neows-feed-template.component.html',
  styleUrls: ['./neows-feed-template.component.css']
})
export class NeowsFeedTemplateComponent implements OnInit {

  GetDetailedBody: boolean;
  NearEarthObjectsDatesList: Array<string>;
  baseServiceName: string;
  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;
  columnDef: Array<string>;
  baseService: string;
  DescDict: any;


  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    this.GetDetailedBody = false;
    this.NearEarthObjectsDatesList = [];
    this.columnDef = [];
    this.baseServiceName = 'NeoWs';
    this.serviceResponseBodyList = {};
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
    this.baseService = 'Neo - Feed';
    this.DescDict = DescDict;

    this.reloadNeoWsFeed();
  }

  ngOnInit() {
  }

  reloadNeoWsFeedForToday(): void {
    const endDate = new Date(new Date().getTime() - 45000000);
    // tslint:disable-next-line: max-line-length
    this.infrastructureApi.QueryPrameters.start_date = `${endDate.getFullYear().toString().padStart(4, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;;
    this.infrastructureApi.QueryPrameters.end_date = this.infrastructureApi.QueryPrameters.start_date;
    this.reloadNeoWsFeed();
  }

  reloadNeoWsFeed(): void {
    this.infrastructureApi.GenerateResponseUrl();
    this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.baseService] = {};
        this.serviceResponseBodyList[this.baseService] = body;
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].url);
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.baseService] });

        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList[this.baseService], 'near_earth_objects');
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );
  }

}
