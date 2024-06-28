import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api'; 
  private httpClient = inject(HttpClient);
  constructor() { }

  fetchEmployeesByDepartment(deptId: string) {
    return this.httpClient
      .get<any[]>(`${this.apiUrl}/employee/department/${deptId}`)
  }

  fetchEmployeesDetails(id: string) {
    return this.httpClient
      .get<any>(`${this.apiUrl}/employee/${id}`)
  }

  deleteEmployee(id: string) {
    return this.httpClient
      .delete<any>(`${this.apiUrl}/employee/${id}`)
  }

  saveEmployee(employee: any) {
    return this.httpClient
      .post<any>(`${this.apiUrl}/employee`,employee);
  }
}
