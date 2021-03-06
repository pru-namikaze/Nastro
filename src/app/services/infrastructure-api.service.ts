import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import UrlDict from './domainUrlDict.json';
import DescDict from './domainDescDict.json';


import { isNullOrUndefined } from 'util';
import { ParseError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})


export class InfrastructureApiService {

  DataDict: any;
  ResponceURLDict: any;
  QueryPrameters: any;
  InitQueryPrameters: any;
  QueryPramChoices: any;
  UrlAdderPrameters: any;

  baseServiceName: string;
  baseService: string;

  DescDict: any;

  constructor(private http: HttpClient) {
    this.DataDict = UrlDict;
    this.ResponceURLDict = {};
    this.QueryPrameters = {};
    this.InitQueryPrameters = null;
    this.QueryPramChoices = {};
    this.UrlAdderPrameters = {};


    this.baseServiceName = '';
    this.baseService = '';

    this.DescDict = DescDict;

    this.GenerateResponseUrl();

    this.baseServiceName = Object.keys(UrlDict)[0];
    this.baseService = UrlDict[Object.keys(UrlDict)[0]][Object.keys(UrlDict[Object.keys(UrlDict)[0]])[0]].Name;
  }

  GenerateResponseUrl() {
    const baseServiceNameList = Object.keys(UrlDict);
    for (const baseServiceName of baseServiceNameList) {
      this.getResponseURL(baseServiceName);
    }

    if (isNullOrUndefined(this.InitQueryPrameters)) {
      this.InitQueryPrameters = {};
      const qp: any = this.QueryPrameters;
      this.InitQueryPrameters = qp;

    }

    console.log('UrlAdderPrameters:');
    console.table(this.UrlAdderPrameters);
    console.log('InitQueryPrameters:');
    console.table(this.InitQueryPrameters);
    console.log('QueryPrameters:');
    console.table(this.QueryPrameters);
    console.log('QueryPramChoices:');
    console.table(this.QueryPramChoices);
    console.log(`ResponceURLDict( ${this.baseServiceName} ):`);
    console.table(this.ResponceURLDict[this.baseServiceName]);
  }

  getResponseURL(baseServiceName: string): void {
    const responseURLList: any = {};
    const responseURLwithAdderList: any = {};

    const baseService: any = this.DataDict[baseServiceName];
    for (const serviceNumName of Object.keys(baseService)) {
      const serviceNum: any = baseService[serviceNumName];
      const serviceName: string = serviceNum.Name;
      const serviceProperties: any = serviceNum.Properties;
      let responseURL: string = serviceProperties.RequestURLDomian;
      const URLAddder: any = serviceProperties.URLAddder;
      const QueryPram: any = serviceProperties.QueryString;

      const date = new Date(new Date().getTime() - 45000000);
      const startDate = new Date(new Date().getTime() - 131400000);
      const endDate = new Date(new Date().getTime() - 45000000);

      if (!isNullOrUndefined(URLAddder)) {
        let i = 0;
        for (const URLAddNumName of Object.keys(URLAddder)) {
          responseURL = serviceProperties.RequestURLDomian;
          const adder: any = URLAddder[URLAddNumName];
          this.UrlAdderPrameters[URLAddder[URLAddNumName].VariableName] = URLAddder[URLAddNumName];

          // tslint:disable-next-line: max-line-length
          responseURL = responseURL.concat(`${(adder.IncludeVariableName === 'true') ? adder.VariableName + '/' : ''}${(true) ? adder.DefaultValue : 'UserInput'}?`);
          if (!isNullOrUndefined(QueryPram)) {
            for (const propertyName of Object.keys(QueryPram)) {
              const property: any = QueryPram[propertyName];
              // tslint:disable-next-line: max-line-length
              this.QueryPrameters[property.VariableName] = (isNullOrUndefined(this.QueryPrameters[property.VariableName])) ? property.DefaultValue : this.QueryPrameters[property.VariableName];
              if (isNullOrUndefined(this.QueryPrameters[property.VariableName])) {
                switch (property.VariableName) {
                  case 'date': {
                    // tslint:disable-next-line: max-line-length
                    this.QueryPrameters[property.VariableName] = `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                    break;
                  }
                  case 'startDate' : {
                    // tslint:disable-next-line: max-line-length
                    this.QueryPrameters[property.VariableName] = `${startDate.getFullYear().toString().padStart(4, '0')}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;
                    break;
                  }
                  case 'endDate' : {
                    // tslint:disable-next-line: max-line-length
                    this.QueryPrameters[property.VariableName] = `${endDate.getFullYear().toString().padStart(4, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;
                    break;
                  }
                  default: {
                    this.QueryPrameters[property.VariableName] = property.DefaultValue;
                    break;
                  }
                }
              }
              if (!isNullOrUndefined(property.choices)) {
                console.table(property.choices);
                this.QueryPramChoices[`${serviceName}-${property.VariableName}`] = property.choices;
              }
              responseURL = responseURL.concat(`${property.VariableName}=${this.QueryPrameters[property.VariableName]}&`);
            }
          }
          responseURLwithAdderList[i.toString()] = responseURL;
          i = i + 1;
        }
        responseURLList[serviceName] = (Object.keys(URLAddder).length === 1) ? responseURLwithAdderList[0] : responseURLwithAdderList;
      } else {
        if (!isNullOrUndefined(QueryPram)) {
          for (const propertyName of Object.keys(QueryPram)) {
            const property: any = QueryPram[propertyName];
            if (isNullOrUndefined(this.QueryPrameters[property.VariableName])) {
              switch (property.VariableName) {
                case 'date': {
                  // tslint:disable-next-line: max-line-length
                  this.QueryPrameters[property.VariableName] = `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                  break;
                }
                case 'start_date' : {
                  // tslint:disable-next-line: max-line-length
                  this.QueryPrameters[property.VariableName] = `${startDate.getFullYear().toString().padStart(4, '0')}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;
                  break;
                }
                case 'end_date' : {
                  // tslint:disable-next-line: max-line-length
                  this.QueryPrameters[property.VariableName] = `${endDate.getFullYear().toString().padStart(4, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;
                  break;
                }
                case 'startDate' : {
                  // tslint:disable-next-line: max-line-length
                  this.QueryPrameters[property.VariableName] = `${endDate.getFullYear().toString().padStart(4, '0')}-01-01`;
                  break;
                }
                case 'endDate' : {
                  // tslint:disable-next-line: max-line-length
                  this.QueryPrameters[property.VariableName] = `${endDate.getFullYear().toString().padStart(4, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;
                  break;
                }
                default: {
                  this.QueryPrameters[property.VariableName] = property.DefaultValue;
                  break;
                }
              }
            }
            if (!isNullOrUndefined(property.choices)) {
              this.QueryPramChoices[`${serviceName}-${property.VariableName}`] = property.choices;
            }
            responseURL = responseURL.concat(`${property.VariableName}=${this.QueryPrameters[property.VariableName]}&`);
          }
        }
        responseURLList[serviceName] = responseURL;
      }

    }
    this.ResponceURLDict[baseServiceName] = responseURLList;
  }


  // Take Care of : catalog: default is set to ALL (choices: ALL, SWRC_CATALOG, JANG_ET_AL_CATALOG)
  // keyword: default is set to NONE (example choices: swpc_annex)
  // location: default to ALL (choices: Earth, MESSENGER, STEREO A, STEREO B)
  // catalog: default to ALL (choices: SWRC_CATALOG, WINSLOW_MESSENGER_ICME_CATALOG)
  // 'type' could be: all, FLR, SEP, CME, IPS, MPC, GST, RBE, report

}
