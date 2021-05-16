import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/employees.model';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  constructor(public service: EmployeesService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      this.insertRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Employee();
  }

}
