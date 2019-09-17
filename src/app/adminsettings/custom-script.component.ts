import { Component } from '@angular/core';

@Component({
  template: `
  <div class="modal-content new_subs new_user_dialog new-teamavatar">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
             <span aria-hidden="true">×</span>
         </button>
         Custom Scripts
      </h4>
   </div>
    <div class="modal-body wrap-div">
            <p>General Script</p>
            <p class="p_12">This script is loaded at the bottom of the page in the chat app</p>
            <form class="example-form">
                <textarea type="text" rows="7" class="inputText" placeholder=
"<script>
    console.log(&quot;ADMIN SCRIPT LOADED&quot;);
</script>" style="width:100%; margin-bottom:20px;"></textarea>  

<p>Finished Payment Script</p>
<p class="p_12">This script is loaded when the user submit the payment form or wizard</p>
    <textarea type="text" rows="7" class="inputText" placeholder=
"<script>
    console.log(&quot;ADMIN PAYMENT SCRIPT LOADED&quot;);
</script>" 
style="width:100%;"></textarea>  
            </form>
    </div>        
    <div class="modal-footer wrap-div">
        <button autofocus="" class="btn btn-default pull-left" type="button">Cancel</button>
        <button class="btn btn-blue">Upload</button>
    </div>
</div>
  `
})
export class CustomScriptComponent {

}

