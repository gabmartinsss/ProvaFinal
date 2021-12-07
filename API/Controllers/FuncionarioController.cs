using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionarios")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public FuncionarioController(DataContext context)
        {
            _context = context;
        }

        //POST: api/funcionarios/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        //GET: api/funcionarios
        [HttpGet]
        public IActionResult List()
        {
            var funcionarios = _context.Funcionarios.ToList();
            return Ok(funcionarios);
        }
    }
}