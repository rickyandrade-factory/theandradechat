import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';
import { HttpResponseBase } from '@angular/common/http';
import { FXCrossRatesDialog } from './dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { exitCode } from 'process';
@Injectable()

export class AppLocalConfig {
  config = {
    apiUrl: 'http://dev.api.ricky.24x7.cloud/api/v1/',
    nodeServerUrl: 'http://dev.api.ricky.24x7.cloud/',
    // apiUrl: 'http://localhost:3007/api/v1/',
    // nodeServerUrl: 'http://localhost:3007/',
    name: 'MarketMaster Academy',
    title: 'Communication App with Admin Panel & Dashboard App with Angular 8.0 support',
    version: '1.0.0',
    debug: true,
  };

  getConfig(): object {
    return this.config;
  }
}
