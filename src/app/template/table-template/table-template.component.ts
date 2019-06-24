import { Component, OnInit } from '@angular/core';

import { InfrastructureCommonTableService } from '../../services/infrastructure-common-table.service';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {



  constructor(public infrastructureCommonTable: InfrastructureCommonTableService) { }

  ngOnInit() {
  }

}
