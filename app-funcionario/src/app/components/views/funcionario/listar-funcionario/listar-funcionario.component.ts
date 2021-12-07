import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Funcionario } from "src/app/models/funcionario";
import { FuncionarioService } from "src/app/services/funcionario.service";

@Component({
    selector: "app-listar-funcionario",
    templateUrl: "./listar-funcionario.component.html",
    styleUrls: ["./listar-funcionario.component.css"],
})
export class ListarFuncionarioComponent implements OnInit {
    funcionarios: Funcionario[] = [];
    matT!: MatTableDataSource<Funcionario>;
    colunasExibidas: String[] = [
        "funcionarioId",
        "nome",
        "funcao",
        "criadoEm"
    ];

    constructor(private service: FuncionarioService) {}

    ngOnInit(): void {
        this.service.list().subscribe((funcionarios) => {
            console.log(funcionarios)
            this.funcionarios = funcionarios;
            this.matT = new MatTableDataSource<Funcionario>( funcionarios );
        });
    }
}
