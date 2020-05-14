import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../services/widget.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  // constructor() { }

    screenWidth: number;
    public widgets = [];
    public iframeSrc = [];
    
    constructor(private ws: WidgetService, private sanitizer: DomSanitizer) {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
      };
      this.widgets = this.ws.getWidgets();
      this.widgets.forEach(wid=> {
        this.iframeSrc.push(sanitizer.bypassSecurityTrustResourceUrl(wid.link));
      });
      
    }

  ngOnInit() {
  }

}
