import { Component, OnInit } from '@angular/core';
import data from '../../data/products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = data.products;
  }

  public viewDetail(){

  }

  public addToCar() {
    return null;
  }

}
