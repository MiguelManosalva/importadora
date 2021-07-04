import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/pages/product.service';
import data from '../../data/products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: any[] = [];

  constructor(private _product: ProductService) { }

  ngOnInit(): void {
    this.products = this._product.products;
  }

  public viewDetail(product: any){
    console.log("producto: ", product);
  }

  public addToCar(product: any) {
    console.log("producto: ", product);
    
    return null;
  }

}
