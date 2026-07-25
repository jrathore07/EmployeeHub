import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list';
import { CreateEmployeeComponent } from './create-employee/create-employee';
import { UpdateEmployeeComponent } from './update-employee/update-employee';
import { EmployeeDetailsComponent } from './employee-details/employee-details';

export const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: 'update-employee/:id', component: UpdateEmployeeComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}
    
];
