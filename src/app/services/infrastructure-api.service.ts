import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import UrlDict from './domainUrlDict.json';

import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})


export class InfrastructureApiService {

  DataDict: any;
  ResponceURLDict: any;
  QueryPrameters: any;

  constructor(private http: HttpClient) {
    this.DataDict = UrlDict;
    this.ResponceURLDict = {};
    this.QueryPrameters = {};
    this.GenerateResponseUrl();
  }

  GenerateResponseUrl() {
    const baseServiceNameList = Object.keys(UrlDict);
    for (const baseServiceName of baseServiceNameList) {
      this.getResponseURL(baseServiceName);
    }
    console.table(this.ResponceURLDict);
  }

  getResponseJsonData(): void {
    console.log(this.ResponceURLDict);
  }

  getResponseURL(baseServiceName: string): void {
    const responseURLList: any = {};
    const baseService: any = this.DataDict[baseServiceName];
    for (const serviceNumName of Object.keys(baseService)) {
      const serviceNum: any = baseService[serviceNumName];
      const serviceName: string = serviceNum.Name;
      const serviceProperties: any = serviceNum.Properties;
      let responseURL: string = serviceProperties.RequestURLDomian;
      const URLAddder: any = serviceProperties.URLAddder;
      const QueryPram: any = serviceProperties.QueryString;
      if (!isNullOrUndefined(URLAddder)) {
        const responseURLwithAdderList: any = {};
        let i: number = 0;
        for (const URLAddNumName of Object.keys(URLAddder)) {
          responseURL = serviceProperties.RequestURLDomian;
          const adder: any = URLAddder[URLAddNumName];
          // tslint:disable-next-line: max-line-length
          responseURL = responseURL.concat(`${(adder.IncludeVariableName === 'true') ? adder.VariableName + '/' : ''}${(true) ? adder.DefaultValue : 'UserInput'}?`);
          if (!isNullOrUndefined(QueryPram)) {
            for (const propertyName of Object.keys(QueryPram)) {
              const property: any = QueryPram[propertyName];
              // tslint:disable-next-line: max-line-length
              this.QueryPrameters[property.VariableName] = (isNullOrUndefined(this.QueryPrameters[property.VariableName])) ? property.DefaultValue : this.QueryPrameters[property.VariableName];
              const date = new Date();
              if (isNullOrUndefined(this.QueryPrameters[property.VariableName])) {
                if (property.VariableName === 'date') {
                  // tslint:disable-next-line: max-line-length
                  this.QueryPrameters[property.VariableName] = `${date.getFullYear().toString().padStart(4, '0')}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                } else {
                  this.QueryPrameters[property.VariableName] = property.DefaultValue;
                }
              } else {
                this.QueryPrameters[property.VariableName] = this.QueryPrameters[property.VariableName]
              }
              responseURL = responseURL.concat(`${property.VariableName}=${this.QueryPrameters[property.VariableName]}&`);
            }
          }
          responseURLwithAdderList[i.toString()] = responseURL;
          // this.http.get(responseURL).subscribe((body) => {
          // });
          // i = i + 1;
        }
        responseURLList[serviceName] = (Object.keys(URLAddder).length === 1) ? responseURLwithAdderList[0] : responseURLwithAdderList;
      } else {
        if (!isNullOrUndefined(QueryPram)) {
          for (const propertyName of Object.keys(QueryPram)) {
            const property: any = QueryPram[propertyName];
            const date = new Date();
            if (isNullOrUndefined(this.QueryPrameters[property.VariableName])) {
              if (property.VariableName === 'date') {
                // tslint:disable-next-line: max-line-length
                this.QueryPrameters[property.VariableName] = `${date.getFullYear().toString().padStart(4, '0')}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
              } else {
                this.QueryPrameters[property.VariableName] = property.DefaultValue;
              }
            } else {
              this.QueryPrameters[property.VariableName] = this.QueryPrameters[property.VariableName]
            }
            responseURL = responseURL.concat(`${property.VariableName}=${this.QueryPrameters[property.VariableName]}&`);
          }
        }
        responseURLList[serviceName] = responseURL;
        // this.http.get(responseURL).subscribe((body) => {
        //   responseURLList[serviceName] = body;
        //   // document.getElementById(baseServiceName).innerHTML = JSON.stringify(body);
        // });
      }
    }
    this.ResponceURLDict[baseServiceName] = responseURLList;
  }

  getJsonResponse(url: string): any {
    let response: any = {};
    this.http.get(url).subscribe((body) => {
      response = body;
      return response;
    });
    return null;
  }

  demoTable(columnDefs: Array<string>, rowData: any): string {
    let table: string = '';
    table = table.concat('<table class="table table-striped table-bordered table-hover">');
    table = table.concat('<thead class="thead-dark"><tr>');
    for (const header of columnDefs) {
      table = table.concat(`<th scope="col">${header}</th>`);
    }
    table = table.concat('</tr></thead>');
    for (const header of columnDefs) {
      console.log(typeof (rowData[header]) === 'object');
      if (typeof (rowData[header]) === 'object') {
        table = table.concat(`<td>${this.demoTable(Object.keys(rowData[header]), rowData[header])}</td>`);
      }
      table = table.concat(`<td>${rowData[header]}</td>`);
    }
    table = table.concat('</table>');
    return table;
  }



  // "Category" : {
  //   "0": {
  //     "Name": "CategoryTitle",
  //     "Properties": {
  //       "RequestURLDomian": "Domain",
  //       "URLAddder": {
  //         "0": {
  //           "VariableName": "Asteroid_Id",
  //           "DefaultValue": "3542519"
  //         }
  //       },
  //       "QueryString": {
  //         "0": {
  //           "VariableName": "Pram1",
  //           "DefaultValue": "2019-05-20"
  //         },
  //         "1": {
  //           "VariableName": "Pram2",
  //           "DefaultValue": "true"
  //         },
  //         "2": {
  //           "VariableName": "api_key",
  //           "DefaultValue": "ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"
  //         }
  //       }
  //     }
  //   }
  // },



  // "5": {
  //   "Name": "Neo - Sentry Asteroid_Id",
  //   "Properties": {
  //     "RequestURLDomian": "https://api.nasa.gov/neo/rest/v1/neo/sentry/",
  //     "URLAddder": {
  //       "0": {
  //         "VariableName": "Asteroid_Id",
  //         "DefaultValue": "3542519",
  //         "IncludeVariableName": "false"

  //       }
  //     },
  //     "QueryString": {
  //       "0": {
  //         "VariableName": "api_key",
  //         "DefaultValue": "ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"
  //       }
  //     }
  //   }
  // },



  // Take Care of : catalog: default is set to ALL (choices: ALL, SWRC_CATALOG, JANG_ET_AL_CATALOG)
  // keyword: default is set to NONE (example choices: swpc_annex)
  // location: default to ALL (choices: Earth, MESSENGER, STEREO A, STEREO B)
  // catalog: default to ALL (choices: SWRC_CATALOG, WINSLOW_MESSENGER_ICME_CATALOG)
  // 'type' could be: all, FLR, SEP, CME, IPS, MPC, GST, RBE, report

}
