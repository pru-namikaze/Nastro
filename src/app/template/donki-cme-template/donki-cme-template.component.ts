import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-donki-cme-template',
  templateUrl: './donki-cme-template.component.html',
  styleUrls: ['./donki-cme-template.component.css']
})

export class DonkiCmeTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
