import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WizardIndexComponent } from './views/wizard-index/wizard-index.component';
import { WizardFormComponent } from './views/wizard-form/wizard-form.component';
import { WizardDetailsComponent } from './views/wizard-details/wizard-details.component';



const routes: Routes = [
  { path: '', pathMatch: "full", component: WizardIndexComponent },

  { path: 'form/:id', component: WizardFormComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
