import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MoviesService {
  public movies;

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.movies =
      this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}&language=en-US&page=1`);
  }

  getDetailsMovieById(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}&language=en-US`);
  }
}

