import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_subs new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
        <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
        </button> 
         Team Avatar
      </h4>
   </div>
    <div class="modal-body wrap-div">
        <div style="position: relative">
        <img style="width: 100%" src="//cdn.echofin.co/avatar/b7e64405.png?t=1551496349357">
        <div class="hoving-avatar">
            <input type="file">
            <span>SELECT NEW FILE</span>
        </div>
    </div>
    </div>
    <div class="modal-footer wrap-div">
        <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
        <button class="btn btn-blue">Upload</button>
    </div>
</div>
  `
})
export class NewTeamAvatarComponent {

}

