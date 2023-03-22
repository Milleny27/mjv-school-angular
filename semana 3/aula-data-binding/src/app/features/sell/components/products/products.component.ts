import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos!";

  produto = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 1,
    imagem: "https://gmedia.playstation.com/is/image/SIEPDC/console-right_@1x?fmt=png-alpha&scl=1"
  };

  constructor() { }

  ngOnInit(): void {
  }

  precoComDesconto (preco: number) {
    return preco * 0.9
  }

}
