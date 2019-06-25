import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


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

  serviceResponseBodyList: object;

  estimatedDiameterTypes: Array<string>;
  selectEstimatedDiameterType: string;

  closeApproachDataRelativeVelocityTypes: Array<string>;
  selectcloseApproachDataRelativeVelocityType: string;

  closeApproachDataMissDistanceTypes: Array<string>;
  selectCloseApproachDataMissDistanceType: string;

  DescDict: any;

  constructor(
    public infrastructureApi: InfrastructureApiService,
    public infrastructureCommonTable: InfrastructureCommonTableService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    this.serviceResponseBodyList = {};

    this.estimatedDiameterTypes = [];
    this.closeApproachDataRelativeVelocityTypes = [];
    this.closeApproachDataMissDistanceTypes = [];

    this.selectEstimatedDiameterType = '';
    this.selectcloseApproachDataRelativeVelocityType = '';
    this.selectCloseApproachDataMissDistanceType = '';

    this.DescDict = DescDict;

    this.reloadNeoWsBrowseByAsteroidId();
  }

  reloadNeoWsBrowseByAsteroidId(): void {
    this.infrastructureApi.GenerateResponseUrl();
    // tslint:disable-next-line: max-line-length
    this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(
      (body) => {
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = {};
        this.serviceResponseBodyList[this.infrastructureApi.baseService] = body;

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].links.self = this.sanitizer.bypassSecurityTrustResourceUrl(this.serviceResponseBodyList[this.infrastructureApi.baseService].links.self);
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].links = this.serviceResponseBodyList[this.infrastructureApi.baseService].links.self.changingThisBreaksApplicationSecurity;

        console.table({ 'responseObjectDictionary': this.serviceResponseBodyList[this.infrastructureApi.baseService] });

        this.estimatedDiameterTypes = Object.keys(this.serviceResponseBodyList[this.infrastructureApi.baseService].estimated_diameter);
        // tslint:disable-next-line: max-line-length
        this.closeApproachDataRelativeVelocityTypes = Object.keys(this.serviceResponseBodyList[this.infrastructureApi.baseService].close_approach_data[0].relative_velocity);
        // tslint:disable-next-line: max-line-length
        this.closeApproachDataMissDistanceTypes = Object.keys(this.serviceResponseBodyList[this.infrastructureApi.baseService].close_approach_data[0].miss_distance);

        // tslint:disable-next-line: max-line-length
        this.selectEstimatedDiameterType = (this.selectEstimatedDiameterType === '') ? this.estimatedDiameterTypes[0] : this.selectEstimatedDiameterType;
        // tslint:disable-next-line: max-line-length
        this.selectcloseApproachDataRelativeVelocityType = (this.selectcloseApproachDataRelativeVelocityType === '') ? this.closeApproachDataRelativeVelocityTypes[0] : this.selectcloseApproachDataRelativeVelocityType;
        // tslint:disable-next-line: max-line-length
        this.selectCloseApproachDataMissDistanceType = (this.selectCloseApproachDataMissDistanceType === '') ? this.closeApproachDataMissDistanceTypes[0] : this.selectCloseApproachDataMissDistanceType;

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].estimated_diameter = this.serviceResponseBodyList[this.infrastructureApi.baseService].estimated_diameter[this.selectEstimatedDiameterType];
        for (const row of this.serviceResponseBodyList[this.infrastructureApi.baseService].close_approach_data) {
          row.miss_distance = row.miss_distance[this.selectCloseApproachDataMissDistanceType];
          row.relative_velocity = row.relative_velocity[this.selectcloseApproachDataRelativeVelocityType];
        }

        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList[this.infrastructureApi.baseService].orbital_data = { ...this.serviceResponseBodyList[this.infrastructureApi.baseService].orbital_data, ...this.serviceResponseBodyList[this.infrastructureApi.baseService].orbital_data.orbit_class };
        delete this.serviceResponseBodyList[this.infrastructureApi.baseService].orbital_data.orbit_class;

        this.infrastructureCommonTable.makeTableDef(this.serviceResponseBodyList, this.infrastructureApi.baseService);
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
