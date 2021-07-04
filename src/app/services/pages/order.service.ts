import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
export class OrderService {

    private api: string;
    public orderProducts: any;
    public total: number = 0;
    public valorEnvio: number = 4210; 

    constructor(public http: HttpClient) {
        this.api = environment.api;
    }

    public addProduct(request: any) {
        this.orderProducts.push(request);
        this.total += (request.valorConDescuento * request.cantidad);
    }

    public updateProduct(request: any) {
        this.orderProducts;
    }

    public removeProduct(request: any) {
        this.orderProducts = this.orderProducts.filter((product: any) => product != request);
    }

}