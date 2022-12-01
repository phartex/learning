import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../nav-bar/services/navbar.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id!: any;
  movie!: Movie;
  movieSub$!: Subscription

  constructor(private movieService: MovieService, private router: ActivatedRoute,
    private navBarService: NavbarService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movie(this.id).subscribe((movie: any) => {
      this.movie = movie;
      this.navBarService.title.next(movie.name)
      console.log(this.movie)
    });
  }


  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }


}
