import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ILogin } from 'src/app/models/request/ILogin';
import { IRegister } from 'src/app/models/request/IRegister';

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
export class SessionService {

    private api: string;
    public user: any;

    constructor(public http: HttpClient) {
        this.api = environment.api;
    }

    public logIn(request: ILogin) {
        const uri: string = `${this.api}/login`;
        return this.http.post(uri, request).pipe(
            map(
                (data: any) => data,
                (error: any) => {
                    console.error(error);
                }
            ),
            // Catch de errores
            catchError(error => throwError(error))
        )
    }

    public register(request: IRegister) {
        const uri: string = `${this.api}/register`;
        return this.http.post(uri, request).pipe(
            map(
                (data: any) => data,
                (error: any) => {
                    console.error(error);
                }
            ),
            // Catch de errores
            catchError(error => throwError(error))
        )
    }

}