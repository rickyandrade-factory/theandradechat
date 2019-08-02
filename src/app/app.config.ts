import { Injectable } from '@angular/core';
import { AppLocalConfig } from './app.local.config';

declare let jQuery: any;

@Injectable()
export class AppConfig {
  config = {
    name: 'MarketMaster Academy',
    title: 'Communication App with Admin Panel & Dashboard App with Angular 8.0 support',
    version: '1.0.0',
    apiUrl: 'https://api.marketmasteracademy.com/',
    nodeServerUrl: 'https://chat.marketmasteracademy.com/',
    debug: true,
  };

  getConfig() {
    return Object.assign(this.config, new AppLocalConfig().getConfig());
  }
}
