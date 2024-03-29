import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
