// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService, Movie } from './api'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit { 
  
  movies: Movie[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log("Ocurrió un error al llamar a la API: ", error);
      }
    );
  }
}