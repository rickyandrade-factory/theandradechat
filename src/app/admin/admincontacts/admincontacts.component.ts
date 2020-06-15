import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material';
import { NewContactComponent } from './new-contact.component';
import { InviteContactComponent } from './invite-contact.component';

import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ContactsInterface } from './admincontacts.interface';
import { ContactsService } from './admincontacts.service'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admincontactss',
  templateUrl: './admincontacts.component.html',
  styleUrls: ['./admincontacts.component.css']
})
export class AdmincontactsComponent implements OnInit {

  mode: ProgressSpinnerMode = 'determinate';
  showSpinner = false;
  searchActive = false;
  displayedColumns: string[] = ['img', 'fullname', 'email', 'phone', 'subscription', 'type', 'devices', 'registered', 'lastActivity', 'action'];
  dataSource: MatTableDataSource<any[]>
  dataSourceEmpty = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private contactsService: ContactsService, private auth: AuthService) { }

  openAddFileDialog() {
    const fileNameDialogRef = this.dialog.open(NewContactComponent);
  }

  openInviteContactDialog() {
    const fileNameDialogRef1 = this.dialog.open(InviteContactComponent);
  }

  ngOnInit() {
    this.auth.getAllSystemUsers().subscribe((response: any) => {
      if (response.success) {
        if(response.data.length > 0){
          this.dataSourceEmpty = false;
        }
        this.dataSource = new MatTableDataSource(response.data)
      }
    });
  }
  // ALTER TABLE users ADD COLUMN created_date NOT NULL DEFAULT 'foo';
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // onrefresh
  onRefresh() {
    this.showSpinner = true;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.mode = 'determinate';
      this.showSpinner = false;
    }, 1000);
  }

  // filter
  onActiveSearch() {
    this.searchActive = !this.searchActive;
  }


}







