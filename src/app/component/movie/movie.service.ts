import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Movie, movies } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
baseUrl = " http://localhost:3000/movies"
  constructor(private http : HttpClient) { }

  getMoviesFromHttp(){
    return this.http.get<Movie[]>(this.baseUrl)
  }

  getMovies(){
    return of(movies)
  };

  movie(id: number){
    return of(movies.find((movie : any ) => +movie.id === +id ));
  }

  movieFromHttp(id: number){
    return this.http.get<Movie>(`${this.baseUrl}/${id}`)
  };

  addMovie(movie: Movie) {
    return this.http.post(this.baseUrl, movie);
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
