import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { isNullOrUndefined } from 'util';

import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';

type TableMakerPramList = [object, string, string?, number?, string?, string?];

@Injectable({
  providedIn: 'root'
})

export class GetReloadDataService {

  serviceResponseBodyList: object;

  constructor(
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    this.serviceResponseBodyList = {};
  }

  resetTable(): void {
    this.infrastructureCommonTable.tableDef = [];
    this.infrastructureCommonTable.tableTupleList = [];
    this.infrastructureCommonTable.tupleList = [];
    this.infrastructureCommonTable.additionalInformationText = '';
  }

  // tslint:disable-next-line: max-line-length
  DataRestructuring(baseServiceName: string, baseService: string, QueryPrameters: any, serviceResponseBodyList: object): TableMakerPramList {
    let returnObj: TableMakerPramList;
    switch (baseServiceName) {
      case 'APoD':
        switch (baseService) {
          case 'Astronomy Picture of the Day':
            returnObj = this.APoDAstronomyPictureOfTheDay(serviceResponseBodyList, baseService, QueryPrameters);
            break;
        }
        break;
      case 'NeoWs':
        switch (baseService) {
          case 'Neo - Feed':
            returnObj = this.NeoWsFeed(serviceResponseBodyList, baseService);
            break;
          case 'Neo - Browse':
            returnObj = this.NeoWsBrowse(serviceResponseBodyList, baseService, QueryPrameters);
            break;
          case 'Neo - Sentry':
            returnObj = this.NeoWsSentry(serviceResponseBodyList, baseService, QueryPrameters);
            break;
          case 'Neo - Stats':
            returnObj = this.NeoWsStats(serviceResponseBodyList, baseService);
            break;
          case 'Neo - Browse by Asteroid ID':
            returnObj = this.NeoWsBrowseByAsteroidId(serviceResponseBodyList, baseService, QueryPrameters);
            break;
        }
        break;
      case 'DONKI':
        switch (baseService) {
          case 'Coronal Mass Ejection (CME)':
            returnObj = this.DONKICME(serviceResponseBodyList, baseService, QueryPrameters);
            break;
        }
        break;
    }
    return returnObj;
  }

  APoDAstronomyPictureOfTheDay(serviceResponseBodyList: object, baseService: string, QueryPrameters: any): TableMakerPramList {
    serviceResponseBodyList[baseService].url = this.sanitizer.bypassSecurityTrustResourceUrl(serviceResponseBodyList[baseService].url);
    QueryPrameters.hd = false;
    return null;
  }

  NeoWsBrowseByAsteroidId(serviceResponseBodyList: object, baseService: string, QueryPrameters: any): TableMakerPramList {

    const body: any = serviceResponseBodyList[baseService];
    const selfLink: any = this.sanitizer.bypassSecurityTrustResourceUrl(body.links.self);

    body.links = selfLink.changingThisBreaksApplicationSecurity;

    QueryPrameters.estimatedDiameterTypes = Object.keys(body.estimated_diameter);
    QueryPrameters.closeApproachDataRelativeVelocityTypes = Object.keys(body.close_approach_data[0].relative_velocity);
    QueryPrameters.closeApproachDataMissDistanceTypes = Object.keys(body.close_approach_data[0].miss_distance);

    // tslint:disable-next-line: max-line-length
    QueryPrameters.selectEstimatedDiameterType = (QueryPrameters.selectEstimatedDiameterType === '') ? QueryPrameters.estimatedDiameterTypes[0] : QueryPrameters.selectEstimatedDiameterType;
    // tslint:disable-next-line: max-line-length
    QueryPrameters.selectcloseApproachDataRelativeVelocityType = (QueryPrameters.selectcloseApproachDataRelativeVelocityType === '') ? QueryPrameters.closeApproachDataRelativeVelocityTypes[0] : QueryPrameters.selectcloseApproachDataRelativeVelocityType;
    // tslint:disable-next-line: max-line-length
    QueryPrameters.selectCloseApproachDataMissDistanceType = (QueryPrameters.selectCloseApproachDataMissDistanceType === '') ? QueryPrameters.closeApproachDataMissDistanceTypes[0] : QueryPrameters.selectCloseApproachDataMissDistanceType;

    body.estimated_diameter = body.estimated_diameter[QueryPrameters.selectEstimatedDiameterType];
    for (const row of body.close_approach_data) {
      row.miss_distance = row.miss_distance[QueryPrameters.selectCloseApproachDataMissDistanceType];
      row.relative_velocity = row.relative_velocity[QueryPrameters.selectcloseApproachDataRelativeVelocityType];
    }

    body.orbital_data = { ...body.orbital_data, ...body.orbital_data.orbit_class };
    delete body.orbital_data.orbit_class;

    return [serviceResponseBodyList, baseService];

  }

  NeoWsStats(serviceResponseBodyList: object, baseService: string): TableMakerPramList {
    const nasaJplUrl: any = this.sanitizer.bypassSecurityTrustResourceUrl(serviceResponseBodyList[baseService].nasa_jpl_url);
    serviceResponseBodyList[baseService].nasa_jpl_url = nasaJplUrl.changingThisBreaksApplicationSecurity;

    return [serviceResponseBodyList, baseService];
  }

  NeoWsBrowse(serviceResponseBodyList: object, baseService: string, QueryPrameters: any): TableMakerPramList {
    QueryPrameters.maxPageNo = (parseInt(serviceResponseBodyList[baseService].page.total_pages, 10) - 1).toString();
    QueryPrameters.totalNoOfElements = serviceResponseBodyList[baseService].page.total_elements.toString();
    const cardTitle = `Total Element: ${QueryPrameters.totalNoOfElements}`;
    return [serviceResponseBodyList, baseService, cardTitle, 2, 'near_earth_objects'];
  }

  NeoWsSentry(serviceResponseBodyList: object, baseService: string, QueryPrameters: any): TableMakerPramList {
    QueryPrameters.maxPageNo = (parseInt(serviceResponseBodyList[baseService].page.total_pages, 10) - 1).toString();
    QueryPrameters.totalNoOfElements = serviceResponseBodyList[baseService].page.total_elements.toString();
    const cardTitle = `Total Element: ${QueryPrameters.totalNoOfElements}`;
    console.table([serviceResponseBodyList, baseService, cardTitle, 2, 'sentry_objects', QueryPrameters.totalNoOfElements]);
    return [serviceResponseBodyList, baseService, cardTitle, 2, 'sentry_objects'];
  }

  NeoWsFeed(serviceResponseBodyList: object, baseService: string): TableMakerPramList {
    // tslint:disable-next-line: max-line-length
    return [serviceResponseBodyList[baseService], 'near_earth_objects', null, null, null, `Element Count: ${serviceResponseBodyList[baseService].element_count}`];
  }

  DONKICME(serviceResponseBodyList: object, baseService: string, QueryPrameters: any): TableMakerPramList {
    for ( const element of serviceResponseBodyList[baseService]) {
      let tempInstumentString = '';
      for (const instument of element.instruments) {
        tempInstumentString = tempInstumentString.concat(`, ${instument.displayName}`);
      }
      element.instruments = tempInstumentString.slice(2);
    }
    const cardTitle = `CoronalMassEjection in Timeframe ${QueryPrameters.startDate} to ${QueryPrameters.endDate}`;
    return [serviceResponseBodyList, baseService, cardTitle, 1];
  }

  reloadGetDataGiveToTableMaker(ResponceURLDict: any, baseServiceName: string, baseService: string, QueryPrameters: any): void {

    this.http.get(ResponceURLDict[baseServiceName][baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[baseService] = body;

        console.table({ responseObjectDictionary: this.serviceResponseBodyList[baseService] });

        // tslint:disable-next-line: max-line-length
        const tablePrameter: [object?, string?, string?, number?, string?, string?] = this.DataRestructuring(baseServiceName, baseService, QueryPrameters, this.serviceResponseBodyList);

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
