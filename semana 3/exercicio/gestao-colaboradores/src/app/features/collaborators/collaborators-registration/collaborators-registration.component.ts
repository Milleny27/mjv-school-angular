import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborators-registration',
  templateUrl: './collaborators-registration.component.html',
  styleUrls: ['./collaborators-registration.component.scss']
})
export class CollaboratorsRegistrationComponent {

  colaborador = {
    imagem: "../../../../assets/bxs-user-circle.svg",
    id: 7,
    nome: "Nathan Carlos Exercicio",
    salario: 4500,
    cargo: "Dev Pl"
  }

  constructor() { }

}
