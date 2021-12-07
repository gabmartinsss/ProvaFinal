using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folha-pagamentos")]
    public class FolhaPagamentoController : ControllerBase
    {
        private readonly DataContext _context;
        public FolhaPagamentoController(DataContext context)
        {
            _context = context;
        }

        //POST: api/folha-pagamentos/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] FolhaPagamento folhaPagamento)
        {
            var folhaPagamentoExiste = _context.FolhasPagamentos.FirstOrDefault(f => f.FuncionarioId == folhaPagamento.FuncionarioId 
            && f.Mes == folhaPagamento.Mes
            && f.Ano == folhaPagamento.Ano);
            if (folhaPagamentoExiste == null)
            {
                _context.FolhasPagamentos.Add(folhaPagamento);
                _context.SaveChanges();
                return Created("", folhaPagamento);
            }
            return BadRequest("Folha de pagamento já existe");
        }

        //GET: api/folha-pagamentos
        [HttpGet]
        public IActionResult List()
        {
            var folhasPagamentos = _context.FolhasPagamentos.Include(f => f.Funcionario).ToList();
            return Ok(folhasPagamentos);
        }

        //DELETE: api/folha-pagamentos
        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            var folhaPagamento = _context.FolhasPagamentos.FirstOrDefault(f => f.FuncionarioId == id);
            if(folhaPagamento == null)
            {
                return NotFound();
            }
            _context.FolhasPagamentos.Remove(folhaPagamento);
            _context.SaveChanges();
            return Ok();
        }
    }
}
