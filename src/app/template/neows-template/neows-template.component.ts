import { Component, OnInit, SecurityContext } from '@angular/core';

import { GetReloadDataService } from 'src/app/services/get-reload-data.service';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-neows-template',
  templateUrl: './neows-template.component.html',
  styleUrls: ['./neows-template.component.css']
})

export class NeowsTemplateComponent implements OnInit {

  constructor(public getReloadData: GetReloadDataService, public infrastructureApi: InfrastructureApiService) {
    this.reloadTable();
  }

  reloadTable(commands?: Array<string>): void {

    if (!isNullOrUndefined(commands)) {
      if (commands.includes('start_date')) {
        const endDate = new Date(new Date().getTime() - 45000000);
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.start_date = `${endDate.getFullYear().toString().padStart(4, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;
        this.infrastructureApi.QueryPrameters.end_date = this.infrastructureApi.QueryPrameters.start_date;
      }
      if (commands.includes('pagePrevious')) {
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.page = parseInt(this.infrastructureApi.QueryPrameters.page, 10) - 1;
      }
      if (commands.includes('pageNext')) {
        this.infrastructureApi.QueryPrameters.page = parseInt(this.infrastructureApi.QueryPrameters.page, 10) + 1;
      }
      if (commands.includes('pageReset')) {
        this.infrastructureApi.QueryPrameters.page = 0;
      }
      if (commands.includes('return')) {
        return;
      }
    }

    // tslint:disable-next-line: max-line-length
    if ((parseInt(this.infrastructureApi.QueryPrameters.page, 10) < 0) || (isNullOrUndefined(this.infrastructureApi.QueryPrameters.maxPageNo) ? true : parseInt(this.infrastructureApi.QueryPrameters.page, 10) > parseInt(this.infrastructureApi.QueryPrameters.maxPageNo, 10))) {
      this.infrastructureApi.QueryPrameters.page = 0;
    }

    this.getReloadData.reloadGetDataGiveToTableMaker(
      (this.infrastructureApi.GenerateResponseUrl(), this.infrastructureApi.ResponceURLDict),
      this.infrastructureApi.baseServiceName,
      this.infrastructureApi.baseService,
      this.infrastructureApi.QueryPrameters,
    );
  }

  ngOnInit() {
  }
}
