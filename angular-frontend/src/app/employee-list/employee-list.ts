import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[] ;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

//   private getEmployees() {
//     this.employeeService.getEmployeeList().subscribe(data => {
//       this.employees = data;
//     });
// }
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
}

