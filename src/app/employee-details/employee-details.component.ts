import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  employee: any;
  empId: string = '';
  private employeeService=inject(EmployeeService);

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.empId = this.route.snapshot.paramMap.get('id') as string;
    } 
    this.employeeService.fetchEmployeesDetails(this.empId).subscribe((data) => {
      this.employee = data;
    });
  }

  save() {
    this.employeeService.saveEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
