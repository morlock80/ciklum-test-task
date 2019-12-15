using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using PerfectChannel.WebApi.ViewModels;

namespace PerfectChannel.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private const string ToDoListKey = "ToDoListKey";

        private readonly IMemoryCache _cache;

        public TodoController(IMemoryCache cache)
        {
            _cache = cache;
            var lst = new List<ToDo>
            {
                new ToDo{Id = 1, Title = "Test 1"},
                new ToDo{Id = 2, Title = "Test 2", Completed = true},
            };
            _cache.Set(ToDoListKey, lst);
        }

        [HttpGet]
        public ActionResult<List<ToDo>> GetAllTasks()
        {
            List<ToDo> res;
            try
            {
                _cache.TryGetValue(ToDoListKey, out res);
                return Ok(res);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }


    }
}