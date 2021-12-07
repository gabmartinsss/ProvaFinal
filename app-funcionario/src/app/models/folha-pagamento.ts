import { Funcionario } from "./funcionario";

export interface FolhaPagamento {
    folhaPagamentoId?: number;
    funcionario?: Funcionario;
    funcionarioId: number;
    quantidadeHorasTrabalhadas: number;
    valorHora: number;
    mes: number;
    ano: number;
}