import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { isNullOrUndefined, isObject, isNull } from 'util';

import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';
import { InfrastructureCommonFilterService } from 'src/app/services/infrastructure-common-filter.service';

type TableMakerPramList = [object, string, string?, number?, string?, string?];

@Injectable({
  providedIn: 'root'
})

export class GetReloadDataService {

  serviceResponseBodyList: object;
  filterParameters: any;


  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    public infrastructureCommonFilter: InfrastructureCommonFilterService
    ) {
    this.serviceResponseBodyList = {};
    this.filterParameters = [];
  }

  resetTable(): void {
    this.infrastructureCommonTable.tableDef = [];
    this.infrastructureCommonTable.tableTupleList = [];
    this.infrastructureCommonTable.tupleList = [];
    this.infrastructureCommonTable.additionalInformationText = '';
  }

  ifNullThenSpace(serviceResponseBodyList: object, baseService: string): void {
    for (const row of Object.keys(serviceResponseBodyList[baseService])) {
      if (!isNullOrUndefined(serviceResponseBodyList[baseService][row])) {
        for (const element of Object.keys(serviceResponseBodyList[baseService][row])) {
          if (isNullOrUndefined(serviceResponseBodyList[baseService][row][element])) {
            serviceResponseBodyList[baseService][row][element] = ' ';
          }
        }
      }
    }
  }

  nestedToInlineJson(serviceResponseBodyList: object, baseService: string, identifier: string, subnested?: boolean): void {
    let jsonToFancyString = '';
    let keyForIdentifier: string;

    for (const row of Object.keys(serviceResponseBodyList[baseService])) {
      jsonToFancyString = '';
      const baseServiceBodyRow: any = serviceResponseBodyList[baseService][row];

      for (const listObject of Object.keys(baseServiceBodyRow[identifier])) {
        let listObjectKeyList: Array<string> = [];
        const rowElement: any = baseServiceBodyRow[identifier][listObject];
        if (isObject(rowElement)) {
          listObjectKeyList = Object.keys(rowElement);
        }
        switch (listObjectKeyList.length.toString()) {
          case '0':
            break;
          case '1':
            if (isNullOrUndefined(keyForIdentifier)) {
              keyForIdentifier = `${identifier}List`;
            }
            jsonToFancyString = jsonToFancyString.concat(`, ${rowElement[listObjectKeyList[0]]}`);
            break;
          case '2':
            if (isNullOrUndefined(keyForIdentifier)) {
              keyForIdentifier = `${identifier}(${listObjectKeyList[0]}⇒${listObjectKeyList[1]})`;
            }
            jsonToFancyString = jsonToFancyString.concat(`, (${rowElement[listObjectKeyList[0]]}⇒${rowElement[listObjectKeyList[1]]})`);
            break;
          default:
            if (isNullOrUndefined(keyForIdentifier)) {
              keyForIdentifier = `${identifier}( ${listObjectKeyList.toString().replace(/\,/gi, ', ')})`;
            }
            if (!isNullOrUndefined(rowElement)) {
              jsonToFancyString = jsonToFancyString.concat(`, (`);
              console.log(rowElement);
              let tempstr = '';
              for (const key of listObjectKeyList) {
                tempstr = tempstr.concat(`, ${rowElement[key]}`);
              }
              jsonToFancyString = jsonToFancyString.concat(tempstr.slice(2), ')');
            }
            break;
        }
      }
      if (!isNullOrUndefined(keyForIdentifier)) {
        baseServiceBodyRow[keyForIdentifier] = jsonToFancyString.slice(2);
      }
    }

    if (!isNullOrUndefined(keyForIdentifier)) {
        for (const row of Object.keys(serviceResponseBodyList[baseService])) {
          if (isNullOrUndefined(serviceResponseBodyList[baseService][row][keyForIdentifier])) {
            serviceResponseBodyList[baseService][row][keyForIdentifier] = null;
          }
          delete serviceResponseBodyList[baseService][row][identifier];
        }
    }
  }

  // tslint:disable-next-line: max-line-length
  DataRestructuring(baseServiceName: string, baseService: string, QueryPrameters: any, serviceResponseBodyList: object, QueryPramChoices?: any, filterParameters?: any): [TableMakerPramList, any] {
    let returnObj: [TableMakerPramList, any];

    this.ifNullThenSpace(serviceResponseBodyList, baseService);

    switch (baseServiceName) {
      case 'APoD':
        switch (baseService) {
          case 'Astronomy Picture of the Day':
            returnObj = this.APoDAstronomyPictureOfTheDay(serviceResponseBodyList, baseService, QueryPrameters, filterParameters);
            break;
        }
        break;
      case 'NeoWs':
        switch (baseService) {
          case 'Neo - Feed':
            returnObj = this.NeoWsFeed(serviceResponseBodyList, baseService, filterParameters);
            break;
          case 'Neo - Browse':
            returnObj = this.NeoWsBrowse(serviceResponseBodyList, baseService, QueryPrameters, filterParameters);
            break;
          case 'Neo - Sentry':
            returnObj = this.NeoWsSentry(serviceResponseBodyList, baseService, QueryPrameters, filterParameters);
            break;
          case 'Neo - Stats':
            returnObj = this.NeoWsStats(serviceResponseBodyList, baseService, filterParameters);
            break;
          case 'Neo - Browse by Asteroid ID':
            returnObj = this.NeoWsBrowseByAsteroidId(serviceResponseBodyList, baseService, QueryPrameters, filterParameters);
            break;
        }
        break;
      case 'DONKI':
        switch (baseService) {
          case 'Coronal Mass Ejection (CME)':
            returnObj = this.DONKICME(serviceResponseBodyList, baseService, QueryPrameters, filterParameters);
            break;
          case 'Coronal Mass Ejection (CME) Analysis':
            returnObj = this.DONKICMEAnalysis(serviceResponseBodyList, baseService, QueryPrameters, QueryPramChoices, filterParameters);
            break;
          case 'Geomagnetic Storm (GST)':
            returnObj = this.DONKIGST(serviceResponseBodyList, baseService, QueryPrameters, filterParameters);
            break;
          case 'Interplanetary Shock (IPS)':
            returnObj = this.DONKIIPS(serviceResponseBodyList, baseService, QueryPrameters, QueryPramChoices, filterParameters);
            break;
          case 'Solar Flare (FLR)':
            returnObj = this.DONKIFLR(serviceResponseBodyList, baseService, filterParameters);
            break;
          case 'Solar Energetic Particle (SEP)':
            returnObj = this.DONKISEP(serviceResponseBodyList, baseService, filterParameters);
            break;
        }
        break;
    }

    return returnObj;
  }

  // [
  //   {name: 'page', prepend: 'page', type: 'text', append: null, choices: null}
  // ]

  DONKISEP(serviceResponseBodyList: object, baseService: string, filterParameters?: any): [TableMakerPramList, any] {
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'instruments');
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'linkedEvents');
    return [serviceResponseBodyList, baseService, baseService, 1];
  }

  DONKIFLR(serviceResponseBodyList: object, baseService: string, filterParameters?: any): [TableMakerPramList, any] {
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'instruments');
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'linkedEvents');

    return [serviceResponseBodyList, baseService, baseService, 1];
  }

  // tslint:disable-next-line: max-line-length
  DONKIIPS(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, QueryPramChoices: any, filterParameters?: any): [TableMakerPramList, any] {
    if (isNullOrUndefined(QueryPrameters.location)) {
      for (const choices of Object.keys(QueryPramChoices)) {
        if (choices.includes(baseService)) {
          QueryPrameters.location = QueryPramChoices[choices][0];
        }
      }
    }
    if (isNullOrUndefined(QueryPrameters.catalog)) {
      for (const choices of Object.keys(QueryPramChoices)) {
        if (choices.includes(baseService)) {
          QueryPrameters.catalog = QueryPramChoices[choices][0];
        }
      }
    }

    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'instruments');
    return [serviceResponseBodyList, baseService, baseService, 1];
  }

  DONKIGST(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, filterParameters?: any): [TableMakerPramList, any] {
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'linkedEvents');
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'allKpIndex');
    const cardTitle = `Geomagnetic Storm (GST) in Timeframe ${QueryPrameters.startDate} to ${QueryPrameters.endDate}`;
    return [serviceResponseBodyList, baseService, cardTitle, 1];
  }

  // tslint:disable-next-line: max-line-length
  DONKICMEAnalysis(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, QueryPramChoices: any, filterParameters?: any): [TableMakerPramList, any] {
    QueryPrameters.speed = parseInt(QueryPrameters.speed.toString(), 10);
    QueryPrameters.halfAngle = parseInt(QueryPrameters.halfAngle.toString(), 10);
    if (isNullOrUndefined(QueryPrameters.catalog)) {
      for (const choices of Object.keys(QueryPramChoices)) {
        if (choices.includes(baseService)) {
          QueryPrameters.catalog = QueryPramChoices[choices][0];
        }
      }
    }
    return [serviceResponseBodyList, baseService, baseService, 1];
  }

  DONKICME(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, filterParameters?: any): [TableMakerPramList, any] {
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'instruments');
    this.nestedToInlineJson(serviceResponseBodyList, baseService, 'linkedEvents');
    const cardTitle = `CoronalMassEjection in Timeframe ${QueryPrameters.startDate} to ${QueryPrameters.endDate}`;
    return [serviceResponseBodyList, baseService, cardTitle, 1];
  }

  // tslint:disable-next-line: max-line-length
  NeoWsBrowseByAsteroidId(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, filterParameters?: any): [TableMakerPramList, any] {

    const body: any = serviceResponseBodyList[baseService];
    const selfLink: any = this.sanitizer.bypassSecurityTrustResourceUrl(body.links.self);

    body.links = selfLink.changingThisBreaksApplicationSecurity;

    QueryPrameters.estimatedDiameterTypes = Object.keys(body.estimated_diameter);
    QueryPrameters.closeApproachDataRelativeVelocityTypes = Object.keys(body.close_approach_data[0].relative_velocity);
    QueryPrameters.closeApproachDataMissDistanceTypes = Object.keys(body.close_approach_data[0].miss_distance);

    if (isNullOrUndefined(QueryPrameters.selectEstimatedDiameterType)) {
      QueryPrameters.selectEstimatedDiameterType = QueryPrameters.estimatedDiameterTypes[0];
    }
    if (isNullOrUndefined(QueryPrameters.selectcloseApproachDataRelativeVelocityType)) {
      QueryPrameters.selectcloseApproachDataRelativeVelocityType = QueryPrameters.closeApproachDataRelativeVelocityTypes[0];
    }
    if (isNullOrUndefined(QueryPrameters.selectCloseApproachDataMissDistanceType)) {
      QueryPrameters.selectCloseApproachDataMissDistanceType = QueryPrameters.closeApproachDataMissDistanceTypes[0];
    }

    body.estimated_diameter = body.estimated_diameter[QueryPrameters.selectEstimatedDiameterType];
    for (const row of body.close_approach_data) {
      row.miss_distance = row.miss_distance[QueryPrameters.selectCloseApproachDataMissDistanceType];
      row.relative_velocity = row.relative_velocity[QueryPrameters.selectcloseApproachDataRelativeVelocityType];
    }

    body.orbital_data = { ...body.orbital_data, ...body.orbital_data.orbit_class };
    delete body.orbital_data.orbit_class;

    filterParameters = [
      {name: 'asteroid_id', prepend: 'asteroid_id', type: 'text', append: null, choices: null},
      // tslint:disable-next-line: max-line-length
      {name: 'selectEstimatedDiameterType', prepend: 'estimated_diameterType', type: 'dropdown', append: null, choices: QueryPrameters.estimatedDiameterTypes},
      // tslint:disable-next-line: max-line-length
      {name: 'selectcloseApproachDataRelativeVelocityType', prepend: 'asteroidRelativeVelocityType', type: 'dropdown', append: null, choices: QueryPrameters.closeApproachDataRelativeVelocityTypes},
      // tslint:disable-next-line: max-line-length
      {name: 'selectCloseApproachDataMissDistanceType', prepend: 'asteroidMissDistanceType', type: 'dropdown', append: null, choices: QueryPrameters.closeApproachDataMissDistanceTypes}
    ];

    return [[serviceResponseBodyList, baseService], filterParameters];
  }

  // tslint:disable-next-line: max-line-length
  NeoWsStats(serviceResponseBodyList: object, baseService: string, filterParameters?: any): [TableMakerPramList, any] {
    const nasaJplUrl: any = this.sanitizer.bypassSecurityTrustResourceUrl(serviceResponseBodyList[baseService].nasa_jpl_url);
    serviceResponseBodyList[baseService].nasa_jpl_url = nasaJplUrl.changingThisBreaksApplicationSecurity;

    return [[serviceResponseBodyList, baseService], null];
  }

  // tslint:disable-next-line: max-line-length
  NeoWsBrowse(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, filterParameters?: any): [TableMakerPramList, any] {
    QueryPrameters.maxPageNo = (parseInt(serviceResponseBodyList[baseService].page.total_pages, 10) - 1).toString();
    QueryPrameters.totalNoOfElements = serviceResponseBodyList[baseService].page.total_elements.toString();

    filterParameters = [
      {name: 'page', prepend: 'page', type: 'text', append: ` / ${QueryPrameters.maxPageNo}`, choices: null},
      {name: 'size', prepend: 'size', type: 'text', append: null, choices: null}
    ];

    const cardTitle = `Total Element: ${QueryPrameters.totalNoOfElements}`;
    return [[serviceResponseBodyList, baseService, cardTitle, 2, 'near_earth_objects'], filterParameters];
  }

  // tslint:disable-next-line: max-line-length
  NeoWsSentry(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, filterParameters?: any): [TableMakerPramList, any] {
    QueryPrameters.maxPageNo = (parseInt(serviceResponseBodyList[baseService].page.total_pages, 10) - 1).toString();
    QueryPrameters.totalNoOfElements = serviceResponseBodyList[baseService].page.total_elements.toString();

    filterParameters = [
      {name: 'page', prepend: 'page', type: 'text', append: ` / ${QueryPrameters.maxPageNo}`, choices: null},
      {name: 'size', prepend: 'size', type: 'text', append: null, choices: null}
    ];

    const cardTitle = `Total Element: ${QueryPrameters.totalNoOfElements}`;
    return [[serviceResponseBodyList, baseService, cardTitle, 2, 'sentry_objects'], filterParameters];
  }

  NeoWsFeed(serviceResponseBodyList: object, baseService: string, filterParameters?: any): [TableMakerPramList, any] {
    filterParameters = [
      {name: 'start_date', prepend: 'start_date', type: 'date', append: null, choices: null},
      {name: 'end_date', prepend: 'end_date', type: 'date', append: null, choices: null}
    ];

    // tslint:disable-next-line: max-line-length
    return [[serviceResponseBodyList[baseService], 'near_earth_objects', null, null, null, `Element Count: ${serviceResponseBodyList[baseService].element_count}`], filterParameters];
  }

  // tslint:disable-next-line: max-line-length
  APoDAstronomyPictureOfTheDay(serviceResponseBodyList: object, baseService: string, QueryPrameters: any, filterParameters?: any): [TableMakerPramList, any] {
    filterParameters = [
      {name: 'date', prepend: 'date', type: 'date', append: null, choices: null}
    ];

    serviceResponseBodyList[baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(serviceResponseBodyList[baseService].url);
    QueryPrameters.hd = false;

    return [null, filterParameters];
  }

  // tslint:disable-next-line: max-line-length
  reloadGetDataGiveToTableMaker(ResponceURLDict: any, baseServiceName: string, baseService: string, QueryPrameters: any, QueryPramChoices?: any): void {

    this.resetTable();
    this.filterParameters = [];
    document.location.href = '#NAstro';

    this.http.get(ResponceURLDict[baseServiceName][baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[baseService] = body;
        console.log(ResponceURLDict[baseServiceName][baseService]);
        console.table({ responseObjectDictionary: this.serviceResponseBodyList[baseService] });
        let tablePrameter: [object?, string?, string?, number?, string?, string?];
        // tslint:disable-next-line: max-line-length
        const structuredObj: [TableMakerPramList, any] = this.DataRestructuring(baseServiceName, baseService, QueryPrameters, this.serviceResponseBodyList, QueryPramChoices, this.filterParameters);
        tablePrameter = structuredObj[0];
        this.infrastructureCommonFilter.setFilterPrameters(structuredObj[1]);

        console.table(tablePrameter);
        console.table(this.filterParameters);
        if (!isNullOrUndefined(tablePrameter)) {
          this.infrastructureCommonTable.makeTableDef(...tablePrameter);
        }
      },
      (error: any) => {
        // TODO: Add Error Handeling for various services.
        alert(error);
        console.table(error);
      },
      () => { }
    );
  }

}
