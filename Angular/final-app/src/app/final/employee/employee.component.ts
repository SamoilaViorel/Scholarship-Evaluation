import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnChanges {

  employees: Employee[];
  @Input() selectedOrder: string;
  @Input() selectedType:string;


  constructor(private router: Router, private employeeService: EmployeeServiceService) { }


  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result) => {
      this.employees = result;
    })
  }

  ngOnChanges(): void {
    this.employeeService.getSortedEmployees(this.selectedOrder).subscribe((result) => {
      this.employees = result;
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployees(id).subscribe(() => {
      this.employeeService.getEmployees().subscribe((result) => {
        this.employees = result;
      })
    });
  }

  updateEmployee(employee: any) {
    this.router.navigate(['/updateEmployee'], { queryParams: { id: employee.id, name: employee.name, age: employee.age, job: employee.job } });
  }

}
