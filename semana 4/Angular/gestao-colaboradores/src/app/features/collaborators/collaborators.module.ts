import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsRegistrationComponent } from './collaborators-registration/collaborators-registration.component';



@NgModule({
  declarations: [
    CollaboratorsRegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollaboratorsRegistrationComponent
  ]
})
export class CollaboratorsModule { }
