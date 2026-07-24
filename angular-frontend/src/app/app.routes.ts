import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list';
import { CreateEmployeeComponent } from './create-employee/create-employee';

export const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}
    
];
