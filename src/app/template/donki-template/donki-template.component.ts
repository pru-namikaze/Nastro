import { Component, OnInit } from '@angular/core';

import { GetReloadDataService } from 'src/app/services/get-reload-data.service';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-donki-template',
  templateUrl: './donki-template.component.html',
  styleUrls: ['./donki-template.component.css']
})
export class DonkiTemplateComponent implements OnInit {

  constructor(public getReloadData: GetReloadDataService, public infrastructureApi: InfrastructureApiService) {
    this.reloadTable();
  }

  reloadTable(): void {

    this.getReloadData.resetTable();

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
