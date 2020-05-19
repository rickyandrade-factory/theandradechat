import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material';
import { NewBillingComponent } from './new-billing.component';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { BillingService } from './adminbilling.service';
import {BillingInterface} from './adminbilling.interface';



@Component({
  selector: 'app-adminbilling',
  templateUrl: './adminbilling.component.html',
  styleUrls: ['./adminbilling.component.css']
})

export class AdminbillingComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;
  filterActive= false;
  displayedColumns: string[] = ['name', 'description', 'onoff',  'currency', 'price', 'cycle',  'term', 'alter'];
  dataSource= new MatTableDataSource<BillingInterface>(this.billingService.getBillings());

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  openAddFileDialog() {
    const fileNameDialogRef = this.dialog.open(NewBillingComponent);
  }

  constructor(private dialog: MatDialog, private billingService: BillingService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // onrefresh
     onRefresh(){
      console.log('it isw')
      this.showSpinner= true;
      this.mode = 'indeterminate';
      setTimeout(() => {
        this.mode = 'determinate';
        this.showSpinner= false;
      }, 1000)
    }

    // filter
    onActiveSearch(){
      this.filterActive= !this.filterActive;
    }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
