import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content locked-dialog">
    <div class="">
      <div class="modal-header">
          Locked Chatroom
      </div>
      <div style="font-size: 1.7rem;    text-align: center;    padding: 4rem;">
          Please contact team admin
      </div>
  </div>
</div>
  `
})

export class lockeddialogComponent {
  paymethod = 'option1';
  selectedcycle = 'weekly';
}
