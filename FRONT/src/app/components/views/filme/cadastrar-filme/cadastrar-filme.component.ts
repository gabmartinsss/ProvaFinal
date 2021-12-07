import { FilmeService } from 'src/app/services/filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: "./cadastrar-filme.component.html",
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {

  nome!: string; // ! significa que não é inicializado
  ano!: number;
  diretor!: string;
  bilheteria!: number;
  categorias!: Categoria[];
  categoriaId!: number;

  constructor(private filmeService: FilmeService,
        private categoriaService: CategoriaService,
        private router: Router) { }

  ngOnInit(): void {
      this.categoriaService.List().subscribe(categorias => {
          this.categorias = categorias;
      });
  }

  create(): void {
     let filme : Filme = {
            nome: this.nome,
            ano: this.ano,
            diretor: this.diretor,
            bilheteria: this.bilheteria,
            categoriaId: this.categoriaId,

      };
        this.filmeService.create(filme).subscribe((filme) => {
        this.router.navigate(["filme/listar"]);
     });
  }

}
