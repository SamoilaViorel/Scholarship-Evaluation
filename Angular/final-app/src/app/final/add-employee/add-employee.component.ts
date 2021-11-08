import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  id: string;
  name: string;
  age: string;
  job: string;

  constructor(private router: Router, private _activatedRoute: ActivatedRoute, private employeeService: EmployeeServiceService) { }


  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.name = params["title"];
      this.age = params["description"];
      this.job=params["job"];
      this.id = params["id"];
    })
  }

  add() {
    if(this.id!=null){
    this.employeeService.updateEmployees(this.id,this.name,this.age,this.job).subscribe(() => this.router.navigateByUrl(''));;
    }
    else{
    this.employeeService.addEmployees(this.name, this.age, this.job).subscribe(() => this.router.navigateByUrl(''));
  }
  }

}
