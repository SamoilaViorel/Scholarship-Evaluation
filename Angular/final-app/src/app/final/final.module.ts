import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { AddToolComponent } from './add-tool/add-tool.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AscendingOrNotComponent } from './ascending-or-not/ascending-or-not.component';
import { DateTypeComponent } from './date-type/date-type.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    EmployeeComponent,
    AddToolComponent,
    HomeComponent,
    AddEmployeeComponent,
    AscendingOrNotComponent,
    DateTypeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  exports: [
    EmployeeComponent,
    AddToolComponent, 
    AddEmployeeComponent,
    AscendingOrNotComponent,
    DateTypeComponent
  ]
})
export class FinalModule { }
