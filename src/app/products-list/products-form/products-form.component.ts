import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/products.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  constructor(public service: ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);

}

insertRecord(form: NgForm) {
  this.service.postProduct().subscribe(
    res => {
      this.resetForm(form);
      this.service.refreshList();
    },
    err => { console.log(err); }
  );
}

resetForm(form: NgForm) {
  form.form.reset();
  this.service.formData = new Product();
}
}
