using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpPost]
        public ActionResult<ToDo> CreateNewTask([FromBody] ToDo newTodo)
        {
            int newId = 0;
            if (_cache.TryGetValue(ToDoListKey, out List<ToDo> res))
            {
                var maxId = res.Max(t => t.Id);
                newId = maxId + 1;
                newTodo.Id = newId;
                res.Add(newTodo);
            }
            else
            {
                var lst = new List<ToDo>();
                newTodo.Id = 1;
                lst.Add(newTodo);
                _cache.Set(ToDoListKey, lst);
            }

            return CreatedAtRoute("todo", new { id = newTodo.Id }, newTodo);
        }


    }
}