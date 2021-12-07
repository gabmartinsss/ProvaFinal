using System;

namespace API.Models
{
    public class FolhaPagamento
    {
        public int FolhaPagamentoId { get; set; }
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }
        public int QuantidadeHorasTrabalhadas { get; set; }

        public decimal ValorHora { get; set; }

        public DateTime CriadoEm { get; set; }
    }
}