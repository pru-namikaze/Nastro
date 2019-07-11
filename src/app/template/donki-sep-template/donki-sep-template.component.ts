import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-donki-sep-template',
  templateUrl: './donki-sep-template.component.html',
  styleUrls: ['./donki-sep-template.component.css']
})

export class DonkiSepTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
