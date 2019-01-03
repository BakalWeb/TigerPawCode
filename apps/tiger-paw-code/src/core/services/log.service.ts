import { NgModule, ErrorHandler, Injectable } from '@angular/core';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://4493b5f7cb434ed1af700109c9ad8a76@sentry.io/1362935'
});

@Injectable({
  providedIn: 'root'
})
export class LogService implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
