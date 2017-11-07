import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from "meteor/meteor";
import { enableProdMode } from '@angular/core';

import { AppModule } from './imports/app/app.module';

import '../both/methods/parties.methods';

enableProdMode();

Meteor.startup(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});