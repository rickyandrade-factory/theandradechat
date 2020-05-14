import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  private widgetList = [
    {
      "id": "1",
      "name": "FX Quotes",
      "link": "https://tradetools.tk/t/forex/?v0.1",
      "frame": "<iframe class='widgets-iframe ng-scope' ng-src='https://tradetools.tk/t/forex/?v0.1' ng-if='!w.iframeError' frameborder='0' src='https://tradetools.tk/t/forex/?v0.1' width='100%'></iframe>",
      "status": "1"
    },
    {
      "id": "2",
      "name": "FX Calculators",
      "link": "https://tradetools.tk/t/fxcalculators/",
      "status": "1"
    },
    {
      "id": "3", 
      "name": "Commodities",
      "link": "https://tradetools.tk/t/commodities/?v0.4",
      "status": "1"
    },
    {
      "id": "4",
      "name": "Talking Twitter",
      "link": "https://flask.echofin.co:443/?m=xwidget&v=2",
      "status": "1"
    }
  ];

  constructor() { }

  getWidgets() {
    return this.widgetList;
  }
}
