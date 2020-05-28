import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button  mat-dialog-close  class="close">
             <span aria-hidden="true">×</span>
         </button>
         Invite Contact
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field  >
               <mat-label>Emails</mat-label>
               <textarea matInput placeholder="users emails comma seperated" style="height:100px;"></textarea>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" mat-dialog-close  class="btn btn-default pull-left" type="button" >Cancel</button>
         <button class="btn btn-blue">Invite</button>
      </div>
   </form>
</div>
  `
})
export class InviteContactComponent {

}

