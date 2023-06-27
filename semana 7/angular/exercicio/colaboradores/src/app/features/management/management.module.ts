import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';
import { ManagementComponent } from './pages/management/management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';


@NgModule({
  declarations: [
    CollaboratorsListComponent,
    ManagementComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ManagementComponent,
    DetailsPageComponent
  ]
})
export class ManagementModule { }
