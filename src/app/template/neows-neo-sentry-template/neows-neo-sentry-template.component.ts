import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-neo-sentry-template',
  templateUrl: './neows-neo-sentry-template.component.html',
  styleUrls: ['./neows-neo-sentry-template.component.css']
})
export class NeowsNeoSentryTemplateComponent implements OnInit {

  baseServiceName: string;
  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;
  columnDef: Array<string>;
  baseService: string;
  maxPageNo: string;
  totalNoOfElements: string;
  DescDict: any;


  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {

    this.columnDef = [];
    this.baseServiceName = 'NeoWs';
    this.serviceResponseBodyList = {};
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
    this.baseService = 'Neo - Sentry';
    this.maxPageNo = '';
    this.totalNoOfElements = '';
    this.DescDict = DescDict;


    this.reloadNeoWsBrowse();
  }

  ngOnInit() {
  }

  reloadNeoWsBrowsePrevious(): void {
    // tslint:disable-next-line: max-line-length
    this.infrastructureApi.QueryPrameters.page = (this.infrastructureApi.QueryPrameters.page === '0') ? '0' : (parseInt(this.infrastructureApi.QueryPrameters.page) - 1).toString();
    this.reloadNeoWsBrowse();
  }

  reloadNeoWsBrowseNext(): void {
    // tslint:disable-next-line: max-line-length
    this.infrastructureApi.QueryPrameters.page = (parseInt(this.infrastructureApi.QueryPrameters.page) >= (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1)) ? (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1).toString() : (parseInt(this.infrastructureApi.QueryPrameters.page) + 1).toString();
    this.reloadNeoWsBrowse();
  }

  reloadNeoWsBrowse(): void {
    this.infrastructureApi.GenerateResponseUrl();
    this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.baseService] = {};
        this.serviceResponseBodyList[this.baseService] = body;
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].url);
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.baseService] });
        console.log(Object.keys(this.serviceResponseBodyList[this.baseService].sentry_objects[0]));
        for (const key of Object.keys(this.serviceResponseBodyList[this.baseService].sentry_objects[0])) {
          // tslint:disable-next-line: max-line-length
          if ((typeof(this.serviceResponseBodyList[this.baseService].sentry_objects[0][key]) !== 'object') && (this.columnDef.indexOf(key) < 0)) {
            this.columnDef.push(key);
          }
        }
        console.log(this.columnDef);
        this.maxPageNo = (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1).toString();
        this.totalNoOfElements = this.serviceResponseBodyList[this.baseService].page.total_elements.toString();
        console.log('maxPage');
        console.log(this.maxPageNo);

      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );
  }

  resetPageNumber(): void {
    this.infrastructureApi.QueryPrameters.page = '0';
  }
}
