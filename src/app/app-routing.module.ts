import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from 'src/app/character/characters.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Route par défaut
  { path: 'character', component: CharactersComponent } // Route pour le composant Character
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
