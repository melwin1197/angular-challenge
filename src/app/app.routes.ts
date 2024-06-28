import { Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: '', component: EmployeeHomeComponent, },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
];
