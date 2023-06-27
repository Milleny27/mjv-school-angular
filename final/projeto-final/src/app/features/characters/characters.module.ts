import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersPageComponent
  ],
  imports: [
    CommonModule, 
    MatCardModule
  ]
})
export class CharactersModule { }
