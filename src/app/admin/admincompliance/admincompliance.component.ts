import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ComplianceInterface } from './admincompliance.interface';
import {ComplianceService} from './admincompliance.service'

@Component({
  selector: 'app-admincompliance',
  templateUrl: './admincompliance.component.html',
  styleUrls: ['./admincompliance.component.css']
})

export class AdmincomplianceComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  showSpinner= false;

  displayedColumns: string[] = ['date',  'user', 'ip', 'report'];
  dataSource= new MatTableDataSource<ComplianceInterface>(this.complianceService.getCompliances());

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(private complianceService: ComplianceService) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
