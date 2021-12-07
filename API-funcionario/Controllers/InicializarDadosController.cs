using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Funcionarios.AddRange(new Funcionario[]
                {
                    new Funcionario { FuncionarioId = 1, Nome = "João", Funcao = "Programador"},
                    new Funcionario { FuncionarioId = 2, Nome = "Rafael", Funcao = "Analista" },
                    new Funcionario { FuncionarioId = 3, Nome = "José", Funcao = "Tester" }
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}