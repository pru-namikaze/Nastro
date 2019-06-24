import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';


@Component({
  selector: 'app-apod-template',
  templateUrl: './apod-template.component.html',
  styleUrls: ['./apod-template.component.css']
})
export class ApodTemplateComponent implements OnInit {

  apodBaseService: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;
  DescDict: any;

  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.serviceResponseBodyList = {};
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    this.infrastructureApi.baseService = this.baseServiceList[0];
    this.DescDict = DescDict;

    this.reloadAPoD();

    this.infrastructureApi.QueryPrameters.hd = false;
  }

  reloadAPoD(): void {
    this.infrastructureApi.GenerateResponseUrl();

    console.log(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]);
    // tslint:disable-next-line: max-line-length
    this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = {};
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = body;
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.infrastructureApi.baseService].url);
        // tslint:disable-next-line: object-literal-key-quotes
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.infrastructureApi.baseService] });
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );
  }

  toggleHdPic(): void {
    this.infrastructureApi.QueryPrameters.hd = !this.infrastructureApi.QueryPrameters.hd;
  }

  ngOnInit() {
  }

}
