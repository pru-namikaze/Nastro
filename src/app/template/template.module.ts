import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material';

import { MainTemplateComponentComponent } from './main-template-component.component';
import { ApodTemplateComponent } from './apod-template/apod-template.component';
import { NeowsTemplateComponent } from './neows-template/neows-template.component';
import { NeowsFeedTemplateComponent } from './neows-feed-template/neows-feed-template.component';
import { NeowsBrowseTemplateComponent } from './neows-browse-template/neows-browse-template.component';
import { NeowsNeoSentryTemplateComponent } from './neows-neo-sentry-template/neows-neo-sentry-template.component';
import { NeowsStatsTemplateComponent } from './neows-stats-template/neows-stats-template.component';
import { NeowsBrowseByAsteroidIdTemplateComponent } from './neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component';
import { FiltersTemplateComponent } from './filters-template/filters-template.component';
import { TableTemplateComponent } from './table-template/table-template.component';
import { DonkiTemplateComponent } from './donki-template/donki-template.component';
import { DonkiCmeTemplateComponent } from './donki-cme-template/donki-cme-template.component';
import { DonkiCmeAnalysisTemplateComponent } from './donki-cme-analysis-template/donki-cme-analysis-template.component';
import { DonkiGstTemplateComponent } from './donki-gst-template/donki-gst-template.component';
import { DonkiIpsTemplateComponent } from './donki-ips-template/donki-ips-template.component';
import { DonkiFlrTemplateComponent } from './donki-flr-template/donki-flr-template.component';
import { DonkiSepTemplateComponent } from './donki-sep-template/donki-sep-template.component';

@NgModule({
  declarations: [
    MainTemplateComponentComponent,
    ApodTemplateComponent,
    NeowsTemplateComponent,
    NeowsFeedTemplateComponent,
    NeowsBrowseTemplateComponent,
    NeowsNeoSentryTemplateComponent,
    NeowsStatsTemplateComponent,
    NeowsBrowseByAsteroidIdTemplateComponent,
    FiltersTemplateComponent,
    TableTemplateComponent,
    DonkiTemplateComponent,
    DonkiCmeTemplateComponent,
    DonkiCmeAnalysisTemplateComponent,
    DonkiGstTemplateComponent,
    DonkiIpsTemplateComponent,
    DonkiFlrTemplateComponent,
    DonkiSepTemplateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class TemplateModule { }
