import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { CustomwidgetComponent } from './customwidget-dialog.component';
import { ConfiguredialogComponent } from './configure-dialog.component';
import { AdminWidgetService } from './adminwidget.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-adminwidget',
  templateUrl: './adminwidget.component.html',
  styleUrls: ['./adminwidget.component.css']
})
export class AdminwidgetComponent implements OnInit {
  version = VERSION;
  widgetStatus;
  topBarWidgets= this.adminwidgetService.topbar;

  fileNameDialogRef: MatDialogRef<CustomwidgetComponent>;

  

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(CustomwidgetComponent);
  }
  
  openConfigureDialog() {
    this.fileNameDialogRef = this.dialog.open(ConfiguredialogComponent);
  }
  
  constructor(private dialog: MatDialog, private adminwidgetService:AdminWidgetService,
    private localStorage: LocalStorageService) {
      this.widgetStatus= this.localStorage.get('widget');
    }

  ngOnInit() {
  }

}
