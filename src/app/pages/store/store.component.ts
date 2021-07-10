import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/service.index';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public productos: any[] = [];

  constructor(private _product: ProductService) { 
    this.productos = _product.products;
  }

  ngOnInit(): void {
  }

}
