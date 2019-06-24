import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { isArray, isNullOrUndefined } from 'util';


import UrlDict from './../../services/domainUrlDict.json';
import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { InfrastructureCommonTableService } from 'src/app/services/infrastructure-common-table.service';

@Component({
  selector: 'app-neows-browse-by-asteroid-id-template',
  templateUrl: './neows-browse-by-asteroid-id-template.component.html',
  styleUrls: ['./neows-browse-by-asteroid-id-template.component.css']
})
export class NeowsBrowseByAsteroidIdTemplateComponent implements OnInit {

  baseServiceName: string;
  baseServiceNameList: Array<string>;
  baseServiceList: Array<string>;
  serviceResponseBodyList: object;
  baseService: string;

  tableDef: Array<string>;
  tableTupleList: Array<[string, Array<string>, Array<Array<string>>]>;
  tupleList: Array<[string, string]>;

  estimatedDiameterTypes: Array<string>;
  selectEstimatedDiameterType: string;

  closeApproachDataRelativeVelocityTypes: Array<string>;
  selectcloseApproachDataRelativeVelocityType: string;

  closeApproachDataMissDistanceTypes: Array<string>;
  selectCloseApproachDataMissDistanceType: string;

  DescDict: any;

  constructor(public infrastructureApi: InfrastructureApiService, public infrastructureCommonTable: InfrastructureCommonTableService,private http: HttpClient, private sanitizer: DomSanitizer) {
    this.tableDef = [];
    this.tableTupleList = [];
    this.tupleList = [];

    this.serviceResponseBodyList = {};
    this.baseServiceName = 'NeoWs';
    this.baseServiceNameList = Object.keys(UrlDict);
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
    this.baseService = 'Neo - Browse by Asteroid ID';

    this.estimatedDiameterTypes = [];
    this.closeApproachDataRelativeVelocityTypes = [];
    this.closeApproachDataMissDistanceTypes = [];

    this.selectEstimatedDiameterType = '';
    this.selectcloseApproachDataRelativeVelocityType = '';
    this.selectCloseApproachDataMissDistanceType = '';

    this.DescDict = DescDict;

    this.reloadNeoWsBrowseByAsteroidId();
  }

  findIndexInColumnDef(tableName: string): number {
    for (const row of this.tableTupleList) {
      if ( row[0] === tableName) {
        return this.tableTupleList.indexOf(row);
      }
    }
    return null;
  }

  reloadNeoWsBrowseByAsteroidId(): void {
    this.infrastructureApi.GenerateResponseUrl();
    this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.baseService] = {};
        this.serviceResponseBodyList[this.baseService] = body;

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].links.self = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.baseService].links.self);
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].links = this.serviceResponseBodyList[this.baseService].links.self.changingThisBreaksApplicationSecurity;
        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.baseService] });

        this.estimatedDiameterTypes = Object.keys(this.serviceResponseBodyList[this.baseService].estimated_diameter);
        // tslint:disable-next-line: max-line-length
        this.closeApproachDataRelativeVelocityTypes = Object.keys(this.serviceResponseBodyList[this.baseService].close_approach_data[0].relative_velocity);
        // tslint:disable-next-line: max-line-length
        this.closeApproachDataMissDistanceTypes = Object.keys(this.serviceResponseBodyList[this.baseService].close_approach_data[0].miss_distance);

        // tslint:disable-next-line: max-line-length
        this.selectEstimatedDiameterType = (this.selectEstimatedDiameterType === '') ? this.estimatedDiameterTypes[0] : this.selectEstimatedDiameterType;
        // tslint:disable-next-line: max-line-length
        this.selectcloseApproachDataRelativeVelocityType = (this.selectcloseApproachDataRelativeVelocityType === '') ? this.closeApproachDataRelativeVelocityTypes[0] : this.selectcloseApproachDataRelativeVelocityType;
        // tslint:disable-next-line: max-line-length
        this.selectCloseApproachDataMissDistanceType = (this.selectCloseApproachDataMissDistanceType === '') ? this.closeApproachDataMissDistanceTypes[0] : this.selectCloseApproachDataMissDistanceType;

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].estimated_diameter = this.serviceResponseBodyList[this.baseService].estimated_diameter[this.selectEstimatedDiameterType];
        for (const row of this.serviceResponseBodyList[this.baseService].close_approach_data) {
          row.miss_distance = row.miss_distance[this.selectCloseApproachDataMissDistanceType];
          row.relative_velocity = row.relative_velocity[this.selectcloseApproachDataRelativeVelocityType];
        }

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.baseService].orbital_data = { ...this.serviceResponseBodyList[this.baseService].orbital_data, ...this.serviceResponseBodyList[this.baseService].orbital_data.orbit_class };
        delete this.serviceResponseBodyList[this.baseService].orbital_data.orbit_class;

        this.tableTupleList = [];
        this.tableDef = [];
        this.tupleList = [];

        for (const key of Object.keys(this.serviceResponseBodyList[this.baseService])) {
          if (typeof (this.serviceResponseBodyList[this.baseService][key]) === 'object') {
            if (isArray(this.serviceResponseBodyList[this.baseService][key])) {
              // tslint:disable-next-line: max-line-length
              this.tableTupleList.push([key, Object.keys(this.serviceResponseBodyList[this.baseService][key][0]), this.serviceResponseBodyList[this.baseService][key]]);
            } else if (this.tableDef.indexOf(key) < 0) {
              // tslint:disable-next-line: max-line-length
              this.tableTupleList.push([key, Object.keys(this.serviceResponseBodyList[this.baseService][key]), [this.serviceResponseBodyList[this.baseService][key]]]);
            }
            this.tableDef.push(key);
          } else {
            this.tupleList.push([key, this.serviceResponseBodyList[this.baseService][key]]);
          }
        }
        console.table(this.tupleList);
      },
      (error: any) => {
        console.log(error);
      },
      () => { }
    );

  }

  ngOnInit() {
  }

}
