import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

import {SalesInterface} from './adminsales.interface';
import {SalesService} from './adminsales.service';

@Component({
  selector: 'app-adminsales',
  templateUrl: './adminsales.component.html',
  styleUrls: ['./adminsales.component.css']
})
export class AdminsalesComponent implements OnInit { 
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;

  displayedColumns: string[] = ['date', 'fullname', 'email', 'plan', 'description', 'amount',  'status'];
  dataSource = new MatTableDataSource<SalesInterface>(this.salesService.getSalesData());

  searchActive= false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private salesService: SalesService) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // onrefresh
  onRefresh(){
    this.showSpinner= true;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.mode = 'determinate';
      this.showSpinner= false;
    }, 1000)
  }

  // filter
  onActiveSearch(){
    this.searchActive= !this.searchActive;
  }
 
}
