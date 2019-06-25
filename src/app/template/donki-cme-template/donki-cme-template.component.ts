import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';


@Component({
  selector: 'app-donki-cme-template',
  templateUrl: './donki-cme-template.component.html',
  styleUrls: ['./donki-cme-template.component.css']
})
export class DonkiCmeTemplateComponent implements OnInit {

  serviceResponseBodyList: object;
  DescDict: any;


  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    this.serviceResponseBodyList = {};
    this.DescDict = DescDict;

    this.reloadDONKICoronalMassEjection();
  }

  ngOnInit() {
  }


  reloadDONKICoronalMassEjection(): void {
    this.infrastructureApi.GenerateResponseUrl();
    // tslint:disable-next-line: max-line-length
    this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = {};
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = body;

        for ( const element of this.serviceResponseBodyList[this.infrastructureApi.baseService]) {
          let tempInstumentString = '';
          for (const instument of element.instruments) {
            tempInstumentString = tempInstumentString.concat(`, ${instument.displayName}`);
          }
          element.instruments = tempInstumentString.slice(2);
        }

        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.infrastructureApi.baseService] });

        const table: any = {};
        table[this.infrastructureApi.baseService] = {};
        table[this.infrastructureApi.baseService].CoronalMassEjection = this.serviceResponseBodyList[this.infrastructureApi.baseService];

        // tslint:disable-next-line: max-line-length
        const cardTitle = `CoronalMassEjection in Timeframe ${this.infrastructureApi.QueryPrameters.startDate} to ${this.infrastructureApi.QueryPrameters.endDate}`;

        // tslint:disable-next-line: max-line-length
        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList, this.infrastructureApi.baseService, cardTitle, 1);
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );
  }

}
