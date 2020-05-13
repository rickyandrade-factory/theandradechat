import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_user_dialog custom_widget">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
          <span aria-hidden="true">×</span>
      </button> 
         Configure Widget
      </h4>
   </div>
   <div class="modal-body wrap-div">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <div class="text-primary text-center">
                    <h4>This is a third party widget</h4>
                    <p>This widget is preconfigured by a third party. You may only disabled it and/or uninstall it.</p>
                </div>
            </div>
        </div>  
   </div>

   <div class="modal-footer wrap-div text-center">
      <button class="btn btn-md btn-warning">
            <span class="fa fa-times fa-fw"></span> disable
        </button>
      <button class="btn btn-md btn-danger">
            <span class="fa fa-trash-o fa-fw"></span> uninstall
        </button>
    </div>
</div>
  `
})
export class ConfiguredialogComponent {
  position= 'right-bar';
}