import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-stats-template',
  templateUrl: './neows-stats-template.component.html',
  styleUrls: ['./neows-stats-template.component.css']
})
export class NeowsStatsTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
   }

  ngOnInit() {
  }

}
