import { Injectable } from '@angular/core';
import { Employee } from './employees.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseURL = "https://localhost:44378/api/Employee"

  constructor(private http: HttpClient) { }

  formData: Employee = new Employee();
  list: Employee[];

  postEmployee() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEmployee() {
    return this.http.put(`${this.baseURL}/${this.formData.employeeId}`, this.formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Employee[]);
  }
}
