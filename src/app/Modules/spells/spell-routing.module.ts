import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpellIndexComponent } from './views/spellindex/spellindex.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', pathMatch: "full", component: SpellIndexComponent }

    ]
  }
]
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellRoutingModule { }
