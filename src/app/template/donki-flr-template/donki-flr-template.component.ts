import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-donki-flr-template',
  templateUrl: './donki-flr-template.component.html',
  styleUrls: ['./donki-flr-template.component.css']
})

export class DonkiFlrTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
