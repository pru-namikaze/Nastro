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

@NgModule({
  declarations: [
    MainTemplateComponentComponent,
    ApodTemplateComponent,
    NeowsTemplateComponent,
    NeowsFeedTemplateComponent,
    NeowsBrowseTemplateComponent,
    NeowsNeoSentryTemplateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class TemplateModule { }
