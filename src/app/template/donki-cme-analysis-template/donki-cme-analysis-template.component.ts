import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';


@Component({
  selector: 'app-donki-cme-analysis-template',
  templateUrl: './donki-cme-analysis-template.component.html',
  styleUrls: ['./donki-cme-analysis-template.component.css']
})

export class DonkiCmeAnalysisTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
