import { NgModule } from '@angular/core';
import { IndexComponent } from './views/index/index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  // {
  //   path: '', children: [
  //     { path: '', pathMatch: "full", component: IndexComponent },
  //     { path: 'special', component: SpecialComponent },
  //   ]
  // },

];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class CharacterRoutingModule { }
