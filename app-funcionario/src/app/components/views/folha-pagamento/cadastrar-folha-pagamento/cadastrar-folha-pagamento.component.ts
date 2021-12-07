import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FolhaPagamento } from "src/app/models/folha-pagamento";
import { Funcionario } from "src/app/models/funcionario";
import { FolhaPagamentoService } from "src/app/services/folha-pagamento.service";
import { FuncionarioService } from "src/app/services/funcionario.service";

@Component({
    selector: "app-cadastrar-folha-pagamento",
    templateUrl: "./cadastrar-folha-pagamento.component.html",
    styleUrls: ["./cadastrar-folha-pagamento.component.css"],
})
export class CadastrarFolhaPagamentoComponent implements OnInit {
    funcionarioId!: number;
    quantidadeHorasTrabalhadas!: number;
    valorHora!: number;
    mes!: number;
    ano!: number;

    msgError!: any;

    funcionarios!: Funcionario[];

    constructor(
        private router: Router,
        private folhaPagamentoService: FolhaPagamentoService,
        private funcionarioService: FuncionarioService
    ) {}

    ngOnInit(): void {
        this.funcionarioService.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
        });
    }


    cadastrar(): void {
        let folhaPagamento: FolhaPagamento = {
            funcionarioId: this.funcionarioId,
            quantidadeHorasTrabalhadas: this.quantidadeHorasTrabalhadas,
            valorHora: this.valorHora,
            mes: this.mes,
            ano: this.ano
        };
        console.log(folhaPagamento)
        this.folhaPagamentoService.create(folhaPagamento).subscribe((folhaPagamento) => {
            console.log(folhaPagamento);
            this.router.navigate(["folha-pagamento/listar"]);
        }, (error) => {
            this.msgError = error.error;
            setTimeout(() => {
                this.msgError = null;
            }, 6000);
        });
    }
}
