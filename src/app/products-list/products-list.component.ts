import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public service: ProductsService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
  }

  populateForm(selectedRecord: Product) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Estas seguro de borrar este empleado?')) {
      this.service.deleteProduct(id)
        .subscribe(
          res => {
            this.service.refreshList();
          },
          err => { console.log(err) }
        )
    }
  }

}
