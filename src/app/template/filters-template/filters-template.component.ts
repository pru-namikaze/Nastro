import { Component, OnInit } from '@angular/core';

import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';


@Component({
  selector: 'app-filters-template',
  templateUrl: './filters-template.component.html',
  styleUrls: ['./filters-template.component.css']
})
export class FiltersTemplateComponent implements OnInit {

  DescDict: any;

  constructor(
    public infrastructureApi: InfrastructureApiService,
    ) {
    this.DescDict = DescDict;

  }

  ngOnInit() {
  }

}
