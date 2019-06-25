import { Component, OnInit } from '@angular/core';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

@Component({
  selector: 'app-donki-template',
  templateUrl: './donki-template.component.html',
  styleUrls: ['./donki-template.component.css']
})
export class DonkiTemplateComponent implements OnInit {

  baseServiceList: Array<string>;

  constructor(public infrastructureApi: InfrastructureApiService) {
    this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    this.infrastructureApi.baseService = this.baseServiceList[0];
  }
  ngOnInit() {
  }

}
