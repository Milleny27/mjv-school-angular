import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AnimeListComponent,
    AnimePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [    
    AnimeListComponent
  ],
  providers: []
})

export class AnimeModule { }
