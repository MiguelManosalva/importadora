import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/pages/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts: any = [];
  public total: any = 0;
  public selectedOption = 1;
  public isBuyed: boolean = false;

  constructor(private _cart: CartService) {
    this.cartProducts = this._cart.cartProducts;
    this.cartProducts.forEach((item: any) => {
      this.total += item.valorConDescuento;
    })
  }

  ngOnInit(): void {
  }

  updateAmount(product: any) {    
    this.total = 0;
    this.cartProducts.forEach((item: any) => {
      this.total += item.valorConDescuento * product.cantidad;
    })
  }

  payOrder(){
    this.isBuyed = true;
  }

  removeProduct() { }


}
