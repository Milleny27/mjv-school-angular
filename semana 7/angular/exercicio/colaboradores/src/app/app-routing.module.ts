import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './features/management/pages/management/management.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { DetailsPageComponent } from './features/management/pages/details-page/details-page.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'collaborators-list', component: ManagementComponent },
  { path: 'collaborator-details/:collaboratorId', component: DetailsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
