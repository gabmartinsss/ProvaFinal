import { FilmeService } from './../../../../services/filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { ItemVenda } from 'src/app/models/item-venda';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    filmes: Filme[] = [];
    itens: ItemVenda[] = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
      this.filmeService.list().subscribe((filmes) => {
          this.filmes = filmes;
      });
  }

  locar(filme: Filme): void {
      let item: ItemVenda = {
          filme: filme,
          filmeId: filme.id!,
          quantidade: 1,
      };
  }

}
