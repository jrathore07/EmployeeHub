import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/vi/employees';
  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
}

createEmployee(employee: Employee): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, employee); 
}


}
