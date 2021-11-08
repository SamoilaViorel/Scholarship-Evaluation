import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './final/add-employee/add-employee.component';
import { AddToolComponent } from './final/add-tool/add-tool.component';
import { HomeComponent } from './final/home/home.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "updateEmployee", component: AddEmployeeComponent },
  { path: '**', redirectTo: 'addNote' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
