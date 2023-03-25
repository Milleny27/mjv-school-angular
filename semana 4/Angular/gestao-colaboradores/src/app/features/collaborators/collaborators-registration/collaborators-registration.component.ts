import { Collaborator } from './../models/collaborator.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborators-registration',
  templateUrl: './collaborators-registration.component.html',
  styleUrls: ['./collaborators-registration.component.scss']
})
export class CollaboratorsRegistrationComponent {

  exibeDetalhes = false;

  colaboradores: Array<Collaborator> = [
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Sr",
      temGraduacao: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Sr",
      temGraduacao: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Sr",
      temGraduacao: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      temGraduacao: false
    }
  ]

  mostrarDetalhes() {
    this.exibeDetalhes = !this.exibeDetalhes;
  }

  constructor() { }

}
