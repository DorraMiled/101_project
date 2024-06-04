import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)
  },
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
