import { Component, OnInit, SecurityContext } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-template',
  templateUrl: './neows-template.component.html',
  styleUrls: ['./neows-template.component.css']
})

export class NeowsTemplateComponent implements OnInit {

  baseServiceList: Array<string>;

  constructor(public infrastructureApi: InfrastructureApiService) {
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    this.infrastructureApi.baseService = this.baseServiceList[0];

  }

  ngOnInit() {
  }

}
