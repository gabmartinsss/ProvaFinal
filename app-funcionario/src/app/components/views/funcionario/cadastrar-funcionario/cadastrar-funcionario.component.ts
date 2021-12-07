import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Funcionario } from "src/app/models/funcionario";
import { FuncionarioService } from "src/app/services/funcionario.service";

@Component({
    selector: "app-cadastrar-funcionario",
    templateUrl: "./cadastrar-funcionario.component.html",
    styleUrls: ["./cadastrar-funcionario.component.css"],
})
export class CadastrarFuncionarioComponent{
    nome!: string;
    funcao!: string;

    constructor(
        private router: Router,
        private funcionarioService: FuncionarioService
    ) {}


    cadastrar(): void {
        let funcionario: Funcionario = {
            nome: this.nome,
            funcao: this.funcao,
        };
        this.funcionarioService.create(funcionario).subscribe((funcionario) => {
            console.log(funcionario);
            this.router.navigate(["funcionario/listar"]);
        });
    }
}
