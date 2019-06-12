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

  baseServiceName: string;
  apodBaseService: Array<string>;
  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;
  showHdImage: boolean;
  NeoWsShowEnum: string;
  GetDetailedBody: boolean;
  NearEarthObjectsDatesList: Array<string>;

  columnDef: Array<string>;
  row: Array<any>;

  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {

    this.NeoWsShowEnum = '';

    this.columnDef = [];
    this.row = [];
    this.baseServiceName = 'NeoWs';
    this.serviceResponseBodyList = {};
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);

    this.GetDetailedBody = false;

    this.reloadNeoWs();

  }

  reloadNeoWsForToday(): void {
    const endDate = new Date(new Date().getTime() - 45000000);
    // tslint:disable-next-line: max-line-length
    this.infrastructureApi.QueryPrameters.start_date =`${endDate.getFullYear().toString().padStart(4, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`; ;
    this.infrastructureApi.QueryPrameters.end_date = this.infrastructureApi.QueryPrameters.start_date;
    this.reloadNeoWs();
  }

  reloadNeoWs(): void {
    this.infrastructureApi.GenerateResponseUrl();
    // for (const baseService of this.baseServiceList) {
    const baseService = 'Neo - Feed';
    console.log(this.infrastructureApi.ResponceURLDict[this.baseServiceName][baseService]);
    this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[baseService] = {};
        this.serviceResponseBodyList[baseService] = body;
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[baseService].url);
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[baseService] });

        switch (baseService) {
          case 'Neo - Feed':
            this.NearEarthObjectsDatesList = Object.keys(this.serviceResponseBodyList[baseService].near_earth_objects).sort();
            // tslint:disable-next-line: max-line-length
            for (const key of Object.keys(this.serviceResponseBodyList[baseService].near_earth_objects[this.NearEarthObjectsDatesList[0]][0])) {
              // tslint:disable-next-line: max-line-length
              if (typeof(this.serviceResponseBodyList[baseService].near_earth_objects[this.NearEarthObjectsDatesList[0]][0][key]) !== 'object') {
                if (this.columnDef.indexOf(key) < 0) {
                  this.columnDef.push(key);
                }
              }
             }
            console.log(this.columnDef);
            console.log(this.NearEarthObjectsDatesList);

            break;
        }
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
