import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { EachMovieComponent } from './each-movie/each-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieComponent, MovieDetailComponent, EachMovieComponent, AddMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
