import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../shared/movies.service';
import {IMovie} from '../models/IMovie';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movieListSubscription: Subscription;
  movieDetailsSubscription: Subscription;

  movies: IMovie[];
  movie: any;

  private intervalHandler = null;

  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    this.fetchMovieList();
    this.intervalHandler = setInterval(() => {
      this.fetchMovieList();
    }, 30000);
  }

  fetchMovieList() {
    this.movies = [];
    this.movieListSubscription = this.movieService.getMovies().subscribe((response: { results: IMovie[] }) => {
      if (response && response.results) {
        this.movies = response.results;
      }
    });
  }

  fetchMovieDetails(id: number) {
    this.movie = null;
    this.movieDetailsSubscription = this.movieService.getDetailsMovieById(id).subscribe((response) => {
      this.movie = response;
    });
  }

  onMovieShowDetails($event: any) {
    if ($event && $event.id) {
      this.fetchMovieDetails($event.id);
    }
  }

  ngOnDestroy(): void {
    this.movieListSubscription.unsubscribe();
    if (this.movieDetailsSubscription) {
      this.movieDetailsSubscription.unsubscribe();
    }

    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
    }
  }
}
