import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';


@Component({
  selector: 'app-neows-feed-template',
  templateUrl: './neows-feed-template.component.html',
  styleUrls: ['./neows-feed-template.component.css']
})
export class NeowsFeedTemplateComponent implements OnInit {

  serviceResponseBodyList: object;
  DescDict: any;


  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    ) {
    this.serviceResponseBodyList = {};
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
    // tslint:disable-next-line: max-line-length
    this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = {};
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = body;

        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.infrastructureApi.baseService] });

        // tslint:disable-next-line: max-line-length
        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList[this.infrastructureApi.baseService], 'near_earth_objects', null, null, null, `Element Count: ${this.serviceResponseBodyList[this.infrastructureApi.baseService].element_count}`);
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );
  }

}
