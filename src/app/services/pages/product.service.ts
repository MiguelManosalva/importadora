import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import data from "../../data/products.json";

const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
});

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private api: string;
    public products: any;

    constructor(public http: HttpClient) {
        this.api = environment.api;
        this.getProducts()
    }

    public getProducts(request?: any) {
        this.products = data.products.map((item: any) => {
            item.valorConDescuento = item.valorUnitario - (item.valorUnitario * item.ofertaPorcentaje) / 100;
            return item;
        });
    }

    public addProduct(request: any) {
        this.products.push(request);
    }

    public removeProduct(request: any) {
        this.products = this.products.filter((product: any) => product != request);
    }

}