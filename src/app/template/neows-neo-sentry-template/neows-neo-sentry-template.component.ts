import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-neows-neo-sentry-template',
  templateUrl: './neows-neo-sentry-template.component.html',
  styleUrls: ['./neows-neo-sentry-template.component.css']
})
export class NeowsNeoSentryTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }
}
