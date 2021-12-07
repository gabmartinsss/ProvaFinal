import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FolhaPagamento } from "src/app/models/folha-pagamento";
import { FolhaPagamentoService } from "src/app/services/folha-pagamento.service";

@Component({
    selector: "app-listar-folha-pagamento",
    templateUrl: "./listar-folha-pagamento.component.html",
    styleUrls: ["./listar-folha-pagamento.component.css"],
})
export class ListarFolhaPagamentoComponent implements OnInit {
    folhasPagamentos: FolhaPagamento[] = [];
    matT!: MatTableDataSource<FolhaPagamento>;
    colunasExibidas: String[] = [
        "folhaPagamentoId",
        "funcionario",
        "quantidadeHorasTrabalhadas",
        "valorHora",
        "salarioBruto",
        "impostoRenda",
        "inss",
        "fgts",
        "salarioLiquido",
        "data",
    ];

    constructor(private service: FolhaPagamentoService) {}

    ngOnInit(): void {
        this.service.list().subscribe((folhasPagamentos) => {
            console.log(folhasPagamentos)
            this.folhasPagamentos = folhasPagamentos;
            this.matT = new MatTableDataSource<FolhaPagamento>( folhasPagamentos );
        });
    }

    public formatData(mes: number, ano: number){
        if(mes.toString().length == 1){
            return `0${mes}/${ano}`;
        }
        return `${mes}/${ano}`;
    }

    public calculaSalarioBruto(horasTrabalhadas: number, valorHora: number) {
        return horasTrabalhadas * valorHora;
    }

    public calculaImpostoRenda(horasTrabalhadas: number, valorHora: number){
        let salarioBruto = this.calculaSalarioBruto(horasTrabalhadas, valorHora);
        if(salarioBruto <= 1903.98){
            return 0;
        }else if(salarioBruto > 1903.99 && salarioBruto <= 2826.65){
            return ((salarioBruto * 7.5) / 100) - 142.80;
        }else if(salarioBruto > 2826.66 && salarioBruto <= 3751.05){
            return ((salarioBruto * 15) / 100) - 354.80;
        }else if(salarioBruto > 3751.06 && salarioBruto <= 4664.68){
            return ((salarioBruto * 22.5) / 100) - 636.13;
        }else{
            return ((salarioBruto * 27.5) / 100) - 869.36;
        }
    }

    public calculaInss(horasTrabalhadas: number, valorHora: number){
        let salarioBruto = this.calculaSalarioBruto(horasTrabalhadas, valorHora);
        if(salarioBruto <= 1659.38){
            return (salarioBruto * 8) / 100;
        }else if(salarioBruto > 1659.39 && salarioBruto <= 2765.66){
            return (salarioBruto * 9) / 100;
        }else if(salarioBruto > 2765.66 && salarioBruto <= 5537.31){
            return (salarioBruto * 11) / 100;
        }else{
            return 608.44;
        }
    }

    public calculaFgts(horasTrabalhadas: number, valorHora: number){
        let salarioBruto = this.calculaSalarioBruto(horasTrabalhadas, valorHora);
        return (salarioBruto * 8) /100;
    }

    public calculaSalarioLiquido(horasTrabalhadas: number, valorHora: number){
        let salarioBruto = this.calculaSalarioBruto(horasTrabalhadas, valorHora);
        let imposto = this.calculaImpostoRenda(horasTrabalhadas, valorHora);
        let inss = this.calculaInss(horasTrabalhadas, valorHora);
        return salarioBruto - imposto - inss;
    }
    
}
