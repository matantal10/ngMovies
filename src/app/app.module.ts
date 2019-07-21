import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {AboutComponent} from './about/about.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {NavButtonComponent} from './shared/nav/nav-button.component';
import {MoviesService} from './shared/services/movies.service';
import {MovieContentComponent} from './movie-list/movie-content/movie-content.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieDetailComponent} from './movie-list/movie-detail/movie-detail.component';
import {MaterialModule} from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AboutComponent,
    NavButtonComponent,
    MovieContentComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
