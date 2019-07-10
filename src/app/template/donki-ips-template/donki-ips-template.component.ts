import { Component, OnInit } from '@angular/core';

import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-donki-ips-template',
  templateUrl: './donki-ips-template.component.html',
  styleUrls: ['./donki-ips-template.component.css']
})
export class DonkiIpsTemplateComponent implements OnInit {

  constructor(public infrastructureApi: InfrastructureApiService) {
  }

  ngOnInit() {
  }

}
