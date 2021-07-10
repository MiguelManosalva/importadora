import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/services/pages/product.service';
import { CartService } from 'src/app/services/service.index';
import data from '../../data/products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: any[] = [];

  constructor(private _product: ProductService, private _cart: CartService, private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.products = this._product.products;
  }

  public viewDetail(product: any) {
    console.log("producto: ", product);
  }

  public addToCar(product: any) {
    this._cart.addProduct(product);
    this.createNotification('success', product.nombre, 'A sido agregado a su carrito de compras');
  }

  private createNotification(type: string, title: string, desc: string): void {
    this.notification.create(
      type,
      title,
      desc
    );
  }
}
