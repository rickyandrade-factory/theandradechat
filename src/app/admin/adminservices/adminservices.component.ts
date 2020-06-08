import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription, from } from 'rxjs';

import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { NewServicesComponent } from './new-services.component';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ServiceService } from './adminservices.service';
import {ServiceInterface} from './adminservices.interface'


@Component({
  selector: 'app-adminservices',
  templateUrl: './adminservices.component.html',
  styleUrls: ['./adminservices.component.css']
})

export class AdminservicesComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;

  services=[];
  
  displayedColumns: string[] = ['name', 'description', 'url',  'plan', 'coupon', 'sort',  'checkout', 'alter'];
  dataSource= new MatTableDataSource<ServiceInterface>(this.serviceService.getServices());

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  version = VERSION;

  fileNameDialogRef: MatDialogRef<NewServicesComponent>;
  
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(NewServicesComponent);
  }

  constructor(private dialog: MatDialog, private serviceService: ServiceService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

   console.log(this.serviceService.getServices());

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
