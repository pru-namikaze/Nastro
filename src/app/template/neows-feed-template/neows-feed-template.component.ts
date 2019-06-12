import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';


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
  NeoWsShowEnum: string;
  baseService: string;


  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.GetDetailedBody = false;
    this.NearEarthObjectsDatesList = [];
    this.NeoWsShowEnum = '';
    this.columnDef = [];
    this.baseServiceName = 'NeoWs';
    this.serviceResponseBodyList = {};
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
    this.baseService = 'Neo - Feed';

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
    console.log(this.serviceResponseBodyList[this.baseService]);
    console.log(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]);
    this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.baseService] = {};
        this.serviceResponseBodyList[this.baseService] = body;
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].url);
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.baseService] });

        this.NearEarthObjectsDatesList = Object.keys(this.serviceResponseBodyList[this.baseService].near_earth_objects).sort();
        // tslint:disable-next-line: max-line-length
        for (const key of Object.keys(this.serviceResponseBodyList[this.baseService].near_earth_objects[this.NearEarthObjectsDatesList[0]][0])) {
          // tslint:disable-next-line: max-line-length
          if (typeof (this.serviceResponseBodyList[this.baseService].near_earth_objects[this.NearEarthObjectsDatesList[0]][0][key]) !== 'object') {
            if (this.columnDef.indexOf(key) < 0) {
              this.columnDef.push(key);
            }
          }
        }
        console.log(this.columnDef);
        console.log(this.NearEarthObjectsDatesList);
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );
  }

}
