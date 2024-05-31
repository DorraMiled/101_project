import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'characters',
    loadChildren: () => import('./Modules/characters/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'spells',
    loadChildren: () => import('./Modules/spells/spell.module').then(m => m.SpellModule)
  },
  {
    path: 'wizards',
    loadChildren: () => import('./Modules/wizard/wizard.module').then(m => m.WizardModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
