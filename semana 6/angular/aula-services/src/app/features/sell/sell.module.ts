import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';



@NgModule({
  declarations: [
    ProductsComponent,
    SellPageComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    SellPageComponent
  ]
})
export class SellModule { }
