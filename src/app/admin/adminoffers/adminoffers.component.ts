import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { VERSION, MatDialog, MatDialogRef } from '@angular/material';
import { NewOfferComponent } from './new-offer.component';

import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { OffersService } from './adminoffers.service';
import { OffersInterface } from './adminoffers.interface';

@Component({
  selector: 'app-adminoffers',
  templateUrl: './adminoffers.component.html',
  styleUrls: ['./adminoffers.component.css']
})
export class AdminoffersComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner = false;

  displayedColumns: string[] = ['username', 'email', 'plan', 'startt', 'endt', 'no', 'start', 'end', 'canceled', 'action'];
  dataSource = new MatTableDataSource<OffersInterface>(this.offersService.getOffers());

  searchActive = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  version = VERSION;

  fileNameDialogRef: MatDialogRef<NewOfferComponent>;



  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(NewOfferComponent);
  }

  constructor(private dialog: MatDialog,
    private offersService: OffersService) {

  }

  // onrefresh
  onRefresh() {
    console.log('it isw')
    this.showSpinner = true;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.mode = 'determinate';
      this.showSpinner = false;
    }, 1000)
  }

  // filter
  onActiveSearch() {
    this.searchActive = !this.searchActive;
  }

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

}

