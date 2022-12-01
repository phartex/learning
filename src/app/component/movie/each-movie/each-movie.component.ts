import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-each-movie',
  templateUrl: './each-movie.component.html',
  styleUrls: ['./each-movie.component.scss']
})
export class EachMovieComponent implements OnInit {
@Input() movie!: Movie
  constructor() { }

  ngOnInit(): void {
  }

}
