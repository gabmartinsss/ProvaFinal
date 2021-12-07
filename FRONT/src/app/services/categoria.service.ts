import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: "root",
})
export class CategoriaService {
    private baseURL = "http://localhost:5000/api/categoria";

    constructor (private http: HttpClient){

    }

    List(): Observable <Categoria[]> {
        return this.http.get<Categoria[]>(`${this.baseURL}/listar`);
    }
}