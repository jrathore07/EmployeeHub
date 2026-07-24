import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list';
import { CreateEmployeeComponent } from './create-employee/create-employee';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-frontend');
}
