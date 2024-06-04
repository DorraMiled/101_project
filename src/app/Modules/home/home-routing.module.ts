import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeindexComponent } from './homeindex/homeindex.component';



const routes: Routes = [
  { path: '', component: HomeindexComponent }

]
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
