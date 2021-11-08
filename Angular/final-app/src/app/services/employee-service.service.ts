import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  readonly baseUrl = "http://localhost:5000";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(private httpClient: HttpClient) { }

  serviceCall() {
   
  }


  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl + '/employee', this.httpOptions);
  }

  addEmployees(employeeName: string, employeeAge: string, employeeJob: string): Observable<Employee> {
    let employee = {
      name: employeeName,
      age: employeeAge,
      job: employeeJob
    }
    return this.httpClient.post<Employee>(this.baseUrl + "/employee", employee, this.httpOptions);
  }

  updateEmployees(id: string, employeeName: string, employeeAge: string, employeeJob: string): Observable<Employee> {
    let employee = {
      name: employeeName,
      age: employeeAge,
      job: employeeJob
    }
    return this.httpClient.put<Employee>(this.baseUrl + "/employee/" + id, employee, this.httpOptions);
  }


  deleteEmployees(id: string) {
    return this.httpClient.delete(this.baseUrl + '/employee/' + id);
  }

  getSortedEmployees(order: string) {
    console.log("ceva");

    return this.httpClient
      .get<Employee[]>(this.baseUrl + '/employee', this.httpOptions)
      .pipe(map((employees) => {
        if (order=="ascending") {
          employees = employees.sort((a,b) => a.name.localeCompare(b.name));
        }
        if (order=="descending") {
          employees = employees.sort((a,b) => a.name.localeCompare(b.name)).reverse();
        }

        return employees;
      }));
  }

}
