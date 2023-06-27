import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePageComponent } from './features/anime/pages/anime-page/anime-page.component';
import { CharactersPageComponent } from './features/characters/pages/characters-page/characters-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/anime-list', pathMatch: 'full'},
  { path: 'anime-list', component: AnimePageComponent },
  { path: 'characters-list', component: CharactersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
