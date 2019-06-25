import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';

@Component({
  selector: 'app-neows-neo-sentry-template',
  templateUrl: './neows-neo-sentry-template.component.html',
  styleUrls: ['./neows-neo-sentry-template.component.css']
})
export class NeowsNeoSentryTemplateComponent implements OnInit {

  serviceResponseBodyList: object;
  maxPageNo: string;
  totalNoOfElements: string;
  DescDict: any;


  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
  ) {
    this.serviceResponseBodyList = {};
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
    this.infrastructureApi.QueryPrameters.page = (parseInt(this.infrastructureApi.QueryPrameters.page) >= (parseInt(this.maxPageNo) - 1)) ? (parseInt(this.maxPageNo) - 1).toString() : (parseInt(this.infrastructureApi.QueryPrameters.page) + 1).toString();
    this.reloadNeoWsBrowse();
  }

  reloadNeoWsBrowse(): void {
    this.infrastructureApi.GenerateResponseUrl();
    // tslint:disable-next-line: max-line-length
    this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = {};
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = body;
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.infrastructureApi.baseService] });

        this.maxPageNo = (parseInt(this.serviceResponseBodyList[this.infrastructureApi.baseService].page.total_pages) - 1).toString();
        this.totalNoOfElements = this.serviceResponseBodyList[this.infrastructureApi.baseService].page.total_elements.toString();

        // tslint:disable-next-line: max-line-length
        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList, this.infrastructureApi.baseService, `Total Element: ${this.totalNoOfElements}`, 2, 'sentry_objects');
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
