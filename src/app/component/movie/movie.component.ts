import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from '../nav-bar/services/navbar.service';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  constructor(private movieService: MovieService , private navBarService: NavbarService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navBarService.title.next("MovieNight");
  }

}
