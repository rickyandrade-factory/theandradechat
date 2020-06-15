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
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-admincontactss',
  templateUrl: './admincontacts.component.html',
  styleUrls: ['./admincontacts.component.css']
})
export class AdmincontactsComponent implements OnInit {

  mode: ProgressSpinnerMode = 'determinate';
  isFetching = false;
  showSpinner = false;
  searchActive = false;
  displayedColumns: string[] = ['img', 'fullname', 'email', 'phone', 'subscription', 'type', 'devices', 'registered', 'lastActivity', 'action'];
  //  dataSource= new MatTableDataSource<ContactsInterface>(this.contactsService.fetchContacts());
 dataSource = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  openAddFileDialog() {
    const fileNameDialogRef = this.dialog.open(NewContactComponent);
  }

  openInviteContactDialog() {
    const fileNameDialogRef1 = this.dialog.open(InviteContactComponent);
  }
  constructor(private dialog: MatDialog, private http: HttpClient,
    private contactsService: ContactsService) {
  }


  onfetchContacts() {
    this.contactsService.fetchContacts().subscribe(
      (contacts) => {
      this.isFetching = true,
        this.dataSource = contacts
        console.log(contacts)
      }
    ), (error) => {
      console.log(error.message);
    }
  }



  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    this.onfetchContacts();
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  onDelete(id: any) {
    this.http.delete('https://durable-tangent-260506.firebaseio.com/data.json', id).subscribe(
      () => console.log(id)
    );
  }

  // onrefresh
  onRefresh() {
    this.showSpinner = true;
    this.mode = 'indeterminate';
    setTimeout(() => {
      this.mode = 'determinate';
      this.showSpinner = false;
      this.onfetchContacts();
    }, 1000);
  }

  // filter
  onActiveSearch() {
    this.searchActive = !this.searchActive;
  }


}







