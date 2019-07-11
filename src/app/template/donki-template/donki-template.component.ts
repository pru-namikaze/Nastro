import { Component, OnInit } from '@angular/core';

import { GetReloadDataService } from 'src/app/services/get-reload-data.service';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-donki-template',
  templateUrl: './donki-template.component.html',
  styleUrls: ['./donki-template.component.css']
})
export class DonkiTemplateComponent implements OnInit {

  constructor(public getReloadData: GetReloadDataService, public infrastructureApi: InfrastructureApiService) {
    this.reloadTable();
  }

  reloadTable(commands?: Array<string>): any {

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
      if (commands.includes('mostAccurateOnly')) {
        this.infrastructureApi.QueryPrameters.mostAccurateOnly = !this.infrastructureApi.QueryPrameters.mostAccurateOnly;
      }
      if (commands.includes('completeEntryOnly')) {
        this.infrastructureApi.QueryPrameters.completeEntryOnly = !this.infrastructureApi.QueryPrameters.completeEntryOnly;
      }
      if (commands.includes('completeEntryOnly')) {
        this.infrastructureApi.QueryPrameters.completeEntryOnly = !this.infrastructureApi.QueryPrameters.completeEntryOnly;
      }
      if (commands.includes('Solar Energetic Particle (SEP)')) {
        this.infrastructureApi.QueryPrameters.startDate = '2015-01-01';
      }
      if (commands.includes('catalog')) {
        const dropdownList: Array<string> = [];
        for (const key of Object.keys(this.infrastructureApi.QueryPramChoices[`${this.infrastructureApi.baseService}-catalog`])) {
          dropdownList.push(this.infrastructureApi.QueryPramChoices[`${this.infrastructureApi.baseService}-catalog`][key]);
        }
        return dropdownList;
      }
      if (commands.includes('location')) {
        const dropdownList: Array<string> = [];
        for (const key of Object.keys(this.infrastructureApi.QueryPramChoices[`${this.infrastructureApi.baseService}-location`])) {
          dropdownList.push(this.infrastructureApi.QueryPramChoices[`${this.infrastructureApi.baseService}-location`][key]);
        }
        return dropdownList;
      }
      if (commands.includes('return')) {
        return;
      }
    }

    this.getReloadData.reloadGetDataGiveToTableMaker(
      (this.infrastructureApi.GenerateResponseUrl(), this.infrastructureApi.ResponceURLDict),
      this.infrastructureApi.baseServiceName,
      this.infrastructureApi.baseService,
      this.infrastructureApi.QueryPrameters,
      this.infrastructureApi.QueryPramChoices
    );
  }

  ngOnInit() {
  }

}
