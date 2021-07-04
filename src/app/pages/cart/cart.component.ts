import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/pages/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts: any = [];

  constructor(private _cart: CartService) { 
    this.cartProducts = this._cart.cartProducts;
  }

  ngOnInit(): void {
  }

  removeProduct(){}

}
