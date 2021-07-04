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
export class StoreService {

    private api: string;
    public storeProducts: any;

    constructor(public http: HttpClient) {
        this.api = environment.api;
    }

    public addProduct(request: any) {
        this.storeProducts.push(request);
    }

    public updateProduct(request: any) {
        this.storeProducts;
    }

    public removeProduct(request: any) {
        this.storeProducts = this.storeProducts.filter((product: any) => product != request);
    }

}