
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    AUTH_SERVER: string = 'http://localhost:3000';
    constructor(private http: HttpClient){
        
    }

    public logIn(email:string, password:string): Observable<any> {
       return  this.http.post(`${this.AUTH_SERVER}/login` , {"email": email, "password": password });
    }

    public registro(nombre:string, email:string, password:string): Observable<any> {
        return  this.http.post(`${this.AUTH_SERVER}/register` , {"name": nombre, "email": email, "password": password });
     }
}