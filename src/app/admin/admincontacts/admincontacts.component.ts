import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NewContactComponent } from './new-contact.component';
import { InviteContactComponent } from './invite-contact.component';

import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ContactsInterface } from './admincontacts.interface';
import { ContactsService } from './admincontacts.service'
import { AuthService } from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'angular-web-storage';
import { NewAvatarService } from '../adminsettings/new-avatar.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  // dataSource = new MatTableDataSource(
  //   [
  //   // {firstname: 'mohit kumar', email: 'mohit@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'},
  //   // {firstname: 'kuldeep spall', email: 'spallkuldeep@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'},
  //   // {firstname: 'johan smith', email: 'smith@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'},
  //   // {firstname: 'thomas jordan', email: 'thomas121@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'}
  // ]
  // );
  
    dataSourceEmpty = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private contactsService: ContactsService, private auth: AuthService) { }

  openAddFileDialog() {
    const fileNameDialogRef = this.dialog.open(NewContactComponent);
  }

  openEditDialog(contact){
    const fileNameDialogRef = this.dialog.open(EditContactComponent, {
      width: '600px',
      data: contact
    });
  }

  openDeleteDialog(contact){
    const fileNameDialogRef = this.dialog.open(DeleteContactComponent,{
      data: contact
    });
  }

  openInviteContactDialog() {
    const fileNameDialogRef1 = this.dialog.open(InviteContactComponent);
  }

  ngOnInit() {
     this.loadContacts();
  
  }

  loadContacts() {
    this.showSpinner = true;
    this.mode = 'indeterminate';
    this.auth.getAllSystemUsers().subscribe((response: any) => {
      if (response.success) {
        this.showSpinner = false;
        this.mode = 'determinate';
        if (response.data.length > 0) {
          this.dataSourceEmpty = false;
        }
        this.dataSource = new MatTableDataSource(response.data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        this.showSpinner = false;
        this.mode = 'determinate';
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


  // filter
  onActiveSearch() {
    this.searchActive = !this.searchActive;
  }


}



//edit contact dialog
@Component({
  selector: 'edit-contact-dialog',
  templateUrl: './edit-contact.dialog.html',
  styleUrls: ['./admincontacts.component.css']
})
export class EditContactComponent implements OnInit {
  user: string;
  contact:any;
  editContacts= new FormGroup({
    name: new FormControl(`${this.data.firstname} ${this.data.lastname}`),
    email: new FormControl(this.data.email),
    address: new FormControl(null),
    role: new FormControl(this.data.role_id === 1 ? "Admin" : "User")
  })

 ELEMENT_DATA = [
    // {plan: '7 Day Trial', trial: '', CC: '', period: '2020-06-12', canceled: 'NO'},
  ];
  contactForm:any=[];
  displayedColumns: string[] = ['plan', 'trial', 'CC', 'period', 'canceled'];
  dataSource = this.ELEMENT_DATA;

  constructor(private userService: UserService ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private localStorage: LocalStorageService, 
    private newAvatarService: NewAvatarService){
    this.adminImgPath= this.localStorage.get('admin_user_profile');
    this.contact= this.data;
  }
  ngOnInit(){
    this.user= this.userService.getUser();
    this.newAvatarService.newAvatar.subscribe(
      newPath => {
        this.adminImgPath= this.localStorage.get('admin_user_profile');
      }
    )
  }

 
  adminImgPath;
  preview(files) {
    if (files.length === 0)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.adminImgPath = reader.result;
      this.localStorage.set("admin_user_profile", this.adminImgPath);
      this.newAvatarService.newAvatar.next(true);
    };
  }
}





//delete contact dialog
@Component({
  selector: 'delete-contact-dialog',
  templateUrl: './delete-contact.dialog.html',
  styleUrls: ['./admincontacts.component.css']
})
export class DeleteContactComponent {
contact:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.contact= this.data;
  }

}