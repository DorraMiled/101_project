import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'character',
    loadChildren: () => import('src/app/Modules/characters/characters-routing.module').then(m => m.CharacterRoutingModule)
  },
  {
    path: 'spell',
    loadChildren: () => import('src/app/Modules/spells/spell-routing.module').then(m => m.SpellRoutingModule)
  },
  {
    path: 'bonus',
    loadChildren: () => import('src/app/Modules/Bonus/bonus-routing.module').then(m => m.BonusRoutingModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
