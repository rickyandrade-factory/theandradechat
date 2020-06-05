import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material';
import { NewCouponsComponent } from './new-coupons.component';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { CouponService } from './admincoupons.service';
import {CouponsInterface} from './admincoupons.interface';

@Component({
  selector: 'app-admincoupons',
  templateUrl: './admincoupons.component.html',
  styleUrls: ['./admincoupons.component.css']
})

export class AdmincouponsComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;
  searchActive= false;
  displayedColumns: string[] = ['name', 'amount',  'currency', 'percentoff', 'alter'];
  dataSource= new MatTableDataSource<CouponsInterface>(this.couponService.getCoupons());

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  openAddFileDialog() {
    const fileNameDialogRef = this.dialog.open(NewCouponsComponent);
  }

  constructor(private couponService: CouponService,private dialog: MatDialog) {
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
      this.searchActive= !this.searchActive;
    }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}