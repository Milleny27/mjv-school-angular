import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorsService } from 'src/app/shared/services/collaborators.service';
import { Collaborator } from '../../models/collaborator.model';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  collaborator?: Collaborator;

  constructor(private activedRoute: ActivatedRoute, private collaboratorsService: CollaboratorsService) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['collaboratorId']);
      this.collaborator = this.collaboratorsService.getById(id);
    })
  }

}
