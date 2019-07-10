import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';
import { GetReloadDataService } from 'src/app/services/get-reload-data.service';

@Component({
  selector: 'app-donki-gst-template',
  templateUrl: './donki-gst-template.component.html',
  styleUrls: ['./donki-gst-template.component.css']
})

export class DonkiGstTemplateComponent implements OnInit {

  constructor(public getReloadData: GetReloadDataService, public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
