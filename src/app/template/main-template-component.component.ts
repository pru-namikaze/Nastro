import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from '../services/infrastructure-api.service';

@Component({
  selector: 'app-main-template-component',
  templateUrl: './main-template-component.component.html',
  styleUrls: ['./main-template-component.component.css']
})

export class MainTemplateComponentComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }
}
