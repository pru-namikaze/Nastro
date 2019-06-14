import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import UrlDict from './../../services/domainUrlDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-apod-template',
  templateUrl: './apod-template.component.html',
  styleUrls: ['./apod-template.component.css']
})
export class ApodTemplateComponent implements OnInit {

  tableObject: object;
  baseServiceName: string;
  apodBaseService: Array<string>;
  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;

  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.tableObject = {};
    this.baseServiceName = 'APoD';
    this.serviceResponseBodyList = {};
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
  }

  reloadAPoD(): void {
    this.infrastructureApi.GenerateResponseUrl();
    for (const baseService of this.baseServiceList) {
      console.log(this.infrastructureApi.ResponceURLDict[this.baseServiceName][baseService]);
      this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][baseService]).subscribe(
        (body) => {
          this.serviceResponseBodyList[baseService] = {};
          this.serviceResponseBodyList[baseService] = body;
          // tslint:disable-next-line: max-line-length
          this.serviceResponseBodyList[baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[baseService].url);
          // tslint:disable-next-line: object-literal-key-quotes
          console.table({'responseObjectDictionary': this.serviceResponseBodyList[baseService]});
        },
        (error: any) => {
          console.log(error);
        },
        () => {}
        );
      }
  }

  ngOnInit() {
  }

}
