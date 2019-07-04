import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { GetReloadDataService } from 'src/app/services/get-reload-data.service';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';



@Component({
  selector: 'app-apod-template',
  templateUrl: './apod-template.component.html',
  styleUrls: ['./apod-template.component.css']
})
export class ApodTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService, public getReloadData: GetReloadDataService) {

    this.reloadTable();

  }

  reloadTable(commands?: Array<string>): void {

    this.getReloadData.resetTable();

    if (!isNullOrUndefined(commands) && commands.includes('togleHD')) {
      this.infrastructureApi.QueryPrameters.hd = !this.infrastructureApi.QueryPrameters.hd;
      return;
    }

    this.getReloadData.reloadGetDataGiveToTableMaker(
      (this.infrastructureApi.GenerateResponseUrl(), this.infrastructureApi.ResponceURLDict),
      this.infrastructureApi.baseServiceName,
      this.infrastructureApi.baseService,
      this.infrastructureApi.QueryPrameters
    );
  }

  ngOnInit() {
  }

}
