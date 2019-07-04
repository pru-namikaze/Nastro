import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-browse-by-asteroid-id-template',
  templateUrl: './neows-browse-by-asteroid-id-template.component.html',
  styleUrls: ['./neows-browse-by-asteroid-id-template.component.css']
})

export class NeowsBrowseByAsteroidIdTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
