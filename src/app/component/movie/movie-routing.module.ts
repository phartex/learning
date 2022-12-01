import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  {
    path:'',
    component : MovieComponent
  },
  {
    path:'add',
    component: AddMovieComponent
  }
  ,
  {
    path : ':id',
    component : MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
