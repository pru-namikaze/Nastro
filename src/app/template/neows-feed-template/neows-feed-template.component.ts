import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-feed-template',
  templateUrl: './neows-feed-template.component.html',
  styleUrls: ['./neows-feed-template.component.css']
})
export class NeowsFeedTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }
}
