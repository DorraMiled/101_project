import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BonusindexComponent } from './views/bonusindex/bonusindex.component';
import { FormbonusComponent } from './views/formbonus/formbonus.component';

const routes: Routes = [

  {
    path: '', children: [
      { path: '', pathMatch: "full", component: BonusindexComponent },
      { path: 'form', component: FormbonusComponent },
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusRoutingModule { }
