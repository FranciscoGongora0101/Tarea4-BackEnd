import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(public service: EmployeesService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
  }

  populateForm(selectedRecord: Employee) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Estas seguro de borrar este empleado?')) {
      this.service.deleteEmployee(id)
        .subscribe(
          res => {
            this.service.refreshList();
          },
          err => { console.log(err) }
        )
    }
  }

}
