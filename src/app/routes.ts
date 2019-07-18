import {MovieListComponent} from './movie-list/movie-list.component';
import {AboutComponent} from './about/about.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: '**', redirectTo: '/movies'}
];
