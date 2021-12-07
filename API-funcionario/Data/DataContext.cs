using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        // Entity Framework - Code First
        // Construtor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //Lista de propriedades que vão virar tabelas no banco

        public DbSet<Funcionario> Funcionarios { get; set; }

        public DbSet<FolhaPagamento> FolhasPagamentos { get; set; }
    }
}