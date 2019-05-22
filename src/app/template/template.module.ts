import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainTemplateComponentComponent } from './main-template-component.component';

@NgModule({
  declarations: [
    MainTemplateComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateModule { }
