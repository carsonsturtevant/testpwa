import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('ngsw-worker.js');
  });
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
