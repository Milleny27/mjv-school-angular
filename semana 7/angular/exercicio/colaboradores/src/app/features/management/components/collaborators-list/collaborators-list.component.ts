import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator.model';
import { CollaboratorsService } from 'src/app/shared/services/collaborators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborators-list',
  templateUrl: './collaborators-list.component.html',
  styleUrls: ['./collaborators-list.component.scss']
})
export class CollaboratorsListComponent implements OnInit {

  exibeDetalhes = false;

  colaboradores: Array<Collaborator> = this.collaboratorsService.getCollaborators();

  mostrarDetalhes() {
    this.exibeDetalhes = !this.exibeDetalhes;
  }

  constructor(private collaboratorsService: CollaboratorsService, private router: Router) {}

  ngOnInit(): void {}

  detalhesColaborador(idColaborador: number) {
    this.router.navigateByUrl(`collaborator-details/$(idColaborador)`);
  }

}
