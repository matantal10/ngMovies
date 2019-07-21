import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {IMovie} from '../movie-models/IMovie';
import {MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MovieContentComponent implements OnChanges, OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() movies: IMovie[];
  @Input() expandedMovie: any;

  @Output() movieShowDetails = new EventEmitter();

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<IMovie[]>;
  public expandedElement: null;

  ngOnInit(): void {
    this.displayedColumns = ['title', 'id', 'release_date', 'popularity', 'vote_average'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {movies, expandedMovie} = changes;
    if (movies && movies.currentValue) {
      this.dataSource = new MatTableDataSource(movies.currentValue);
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.movieShowDetails.emit(this.expandedElement);
  }
}
