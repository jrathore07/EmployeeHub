import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployeeComponent implements OnInit {
  
  employee : Employee= new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router
  ) { }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
    this.gotoEmployeeList();
  }

}
