import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// Pode gerar o componente  normal e depois apagar o selector ou ng g c features/home/pages/home --skip-selector
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
