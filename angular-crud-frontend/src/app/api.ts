// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// (Opcional pero buena práctica) Define una interfaz para tus datos
export interface Movie {
  id: number;
  title: string;
  desc: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // URL base de tu API de Django
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // El Observable<Movie[]> indica que esperamos recibir un array de objetos Movie
  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseurl + '/movie/', {headers: this.httpHeaders});
  }
}