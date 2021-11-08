using FinalApi.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {

        IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        /// <summary>
        /// returns all employees
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _employeeService.GetAll());
        }

        /// <summary>
        /// create an employee
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Post(Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee cannot be null");
            }
            if (await _employeeService.Create(employee))
            {
                return Ok();
            }

            return NoContent();
        }

        /// <summary>
        /// delete an employee
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (!await _employeeService.Delete(id))
            {
                return NotFound();
            }

            return NoContent();

        }

        /// <summary>
        /// edit an employee
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] Employee employeeToUpdate)
        {
            if (employeeToUpdate == null)
            {
                return BadRequest("Owner cannot be null");
            }

            if (!await _employeeService.Update(id, employeeToUpdate))
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}
