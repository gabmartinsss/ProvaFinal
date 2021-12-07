import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent implements OnInit {

    filmes : Filme[] = [];
    colunasExibidas: String[] = ["id", "nome", "ano", "diretor", "bilheteria",];

    constructor(private service: FilmeService) {}

    ngOnInit(): void{
        this.service.list().subscribe((filmes) => {
            this.filmes = filmes;
        });
    }

}
