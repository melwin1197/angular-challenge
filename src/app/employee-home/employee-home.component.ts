import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-home.component.html',
  styleUrl: './employee-home.component.css'
})
export class EmployeeHomeComponent {
  departmentId: string = '';
  employees: any[] = [];
  private employeeService=inject(EmployeeService);

  constructor( private router: Router) { }

  getEmployees() {
    this.employeeService.fetchEmployeesByDepartment(this.departmentId).subscribe((data) => {
      this.employees = data;
    });
  }

  viewEmployee(employee: any) {
    employee.departmentId=this.departmentId;
    this.router.navigate(['/employee', employee.id]);
  }

  editEmployee(employee: any, event: Event) {
    event.stopPropagation();
    this.router.navigate(['/employee/edit', employee.id]);
  }

  deleteEmployee(id: string, event: Event) {
    event.stopPropagation();
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
    
  }
}


