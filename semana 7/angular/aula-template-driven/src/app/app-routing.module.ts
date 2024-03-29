import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { DetailsPageComponent } from './features/sell/pages/details-page/details-page.component';
import { SellPageComponent } from './features/sell/pages/sell-page/sell-page.component';
import { AutoGuardGuard } from './shared/guards/auto-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sell', pathMatch: 'full' },
  { path: 'sell', component: SellPageComponent, canActivate: [AutoGuardGuard] },
  { path: 'product-details/:productId', component: DetailsPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }