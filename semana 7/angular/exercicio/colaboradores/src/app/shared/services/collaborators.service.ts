import { Injectable } from '@angular/core';
import { Collaborator } from 'src/app/features/management/models/collaborator.model';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  collaborators: Array<Collaborator> = [
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 1,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      isAtivo: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 2,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Sr",
      isAtivo: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 3,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      isAtivo: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 4,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Sr",
      isAtivo: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 5,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      isAtivo: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 6,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      isAtivo: false
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Sr",
      isAtivo: true
    },
    {
      imagem: "../../../../assets/bxs-user-circle.svg",
      id: 8,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl",
      isAtivo: false
    }
  ];

  constructor() { }

  getCollaborators() {
    return this.collaborators;
  }

  getById(id: number) {
    return this.collaborators.find((c) => c.id === id);
  }
}
