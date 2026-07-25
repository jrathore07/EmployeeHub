import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[] ;
  constructor(private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
private getEmployees() {
  this.employeeService.getEmployeeList().subscribe({
    next: (data) => {
      console.log("Employees:", data);
      this.employees = data;
    },
    error: (err) => {
      console.error("Error:", err);
    }
  });
}

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
    
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (data) => {
        console.log("Employee deleted:", data);
        this.getEmployees(); // Refresh the list after deletion
      },
      error: (err) => {
        console.error("Error deleting employee:", err);
      }
    });
  }
}

