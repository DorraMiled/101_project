import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardIndexComponent } from './views/wizard-index/wizard-index.component';
import { WizardFormComponent } from './views/wizard-form/wizard-form.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';





@NgModule({
  declarations: [
    WizardIndexComponent,
    WizardFormComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule




  ]
})
export class WizardModule { }
