import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-browse-template',
  templateUrl: './neows-browse-template.component.html',
  styleUrls: ['./neows-browse-template.component.css']
})

export class NeowsBrowseTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }
}
