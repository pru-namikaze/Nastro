import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UrlDict from './domainUrlDict.json';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})


export class InfrastructureApiService {

  DataDict: object;

  constructor(private http: HttpClient) {
    this.DataDict = UrlDict;
  }


  getResponseURL(baseServiceName: string): object {
    const responseURLList: object = {};
    const baseService: object = this.DataDict[baseServiceName];
    for (const serviceNumName of Object.keys(baseService)) {
      const serviceNum: object = baseService[serviceNumName];
      const serviceName: string = serviceNum.Name;
      const serviceProperties: object = serviceNum.Properties;
      let responseURL: string = serviceProperties.RequestURLDomian;
      const URLAddder: object = serviceProperties.URLAddder;
      const QueryPram: object = serviceProperties.QueryString;
      if (!isNullOrUndefined(URLAddder)) {
        const responseURLwithAdderList: object = {};
        let i: number = 0;
        for (const URLAddNumName of Object.keys(URLAddder)) {
          responseURL = serviceProperties.RequestURLDomian;
          const adder: object = URLAddder[URLAddNumName];
          // tslint:disable-next-line: max-line-length
          responseURL = responseURL.concat(`${(adder.IncludeVariableName === 'true') ? adder.VariableName + '/' : ''}${(true) ? adder.DefaultValue : 'UserInput'}?`);
          if (!isNullOrUndefined(QueryPram)) {
            for (const propertyName of Object.keys(QueryPram)) {
              const property: object = QueryPram[propertyName];
              responseURL = responseURL.concat(`${property.VariableName}=${(true) ? property.DefaultValue : 'UserInput'}&`);
            }
          }
          responseURLwithAdderList[i.toString()] = responseURL;
          i = i + 1;
        }
        responseURLList[serviceName] = (Object.keys(URLAddder).length === 1) ? responseURLwithAdderList[0] : responseURLwithAdderList;
      } else {
        if (!isNullOrUndefined(QueryPram)) {
          for (const propertyName of Object.keys(QueryPram)) {
            const property: object = QueryPram[propertyName];
            responseURL = responseURL.concat(`${property.VariableName}=${(true) ? property.DefaultValue : 'UserInput'}&`);
          }
        }
        responseURLList[serviceName] = responseURL;
      }
    }
    console.log(responseURLList);
    return responseURLList ;
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


  // Take Care of : catalog: default is set to ALL (choices: ALL, SWRC_CATALOG, JANG_ET_AL_CATALOG)
  // keyword: default is set to NONE (example choices: swpc_annex)
  // location: default to ALL (choices: Earth, MESSENGER, STEREO A, STEREO B)
  // catalog: default to ALL (choices: SWRC_CATALOG, WINSLOW_MESSENGER_ICME_CATALOG)
  // 'type' could be: all, FLR, SEP, CME, IPS, MPC, GST, RBE, report

}
