import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IMovie} from '../movie-models/IMovie';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material';
import {IMovieDetail} from '../movie-models/IMovieDetail';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movie: IMovieDetail;

  public dataSource = [];
  public columnsToDisplay;
  public expandedElement: IMovieDetail | null;

  ngOnInit() {
    this.columnsToDisplay = ['id', 'runtime', 'genresName'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {movie} = changes;
    if (movie && movie.currentValue) {
      this.dataSource = [{
        ...movie.currentValue,
        genresName: movie.currentValue.genres.map(g => g.name).join(', ')
      }];
    }
  }
}
