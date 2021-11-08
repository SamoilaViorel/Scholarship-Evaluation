using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalApi.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IMongoCollection<Employee> _employee;

        public EmployeeService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _employee = database.GetCollection<Employee>(settings.CollectionName);
        }

        public async Task<bool> Create(Employee model)
        {
            await _employee.InsertOneAsync(model);
            return true;
        }

        public async Task<bool> Delete(Guid id)
        {
            var result = await _employee.DeleteOneAsync(e => e.Id == id);
            if (!result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }

        public async Task<Employee> Get(Guid id)
        {
            return (await _employee.FindAsync(e => e.Id == id)).FirstOrDefault();
        }

        public async Task<List<Employee>> GetAll()
        {
            var result = await _employee.FindAsync(e => true);
            return result.ToList();
        }

        public async Task<bool> Update(Guid id, Employee model)
        {
            model.Id = id;
            var result = await _employee.ReplaceOneAsync(e => e.Id == id, model);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _employee.InsertOneAsync(model);
                return false;
            }

            return true;
        }
       
    }
}
