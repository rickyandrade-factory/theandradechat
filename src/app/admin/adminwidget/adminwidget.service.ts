import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import {TopbarInterface} from './adminwidget.interface'
@Injectable({
  providedIn: 'root'
})
export class AdminWidgetService {
    widget;
    constructor(){}

    topbar: TopbarInterface[] =[
        {name: 'Charts', img: 'https://cdn.echofin.co/widgets/echofin.commodities.jpg', description: 'TradingView'}
    ]
        

}
