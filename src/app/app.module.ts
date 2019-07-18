import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatButtonToggleModule, MatCheckboxModule} from '@angular/material';

import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {AboutComponent} from './about/about.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {NavButtonComponent} from './nav/nav-button.component';
import {MoviesService} from './shared/movies.service';
import {MovieContentComponent} from './movie-list/movie-content/movie-content.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {MovieDetailComponent} from './movie-list/movie-detail/movie-detail.component';

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
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
