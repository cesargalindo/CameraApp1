import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { PARTIES_DECLARATIONS } from './parties';
import { SHARED_DECLARATIONS } from './shared';
import { AUTH_DECLARATIONS } from "./auth/index";
import { PicturesComponent } from './pictures/pictures';

import { 
  MatToolbarModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatSliderModule,
  MatSelectModule,
  MatTabsModule,
  MatSnackBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule, 
  MatNativeDateModule,
  MatDatepickerModule,
} from "@angular/material";
import 'hammerjs';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    }),
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule, 
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS,
    ...SHARED_DECLARATIONS,
    ...AUTH_DECLARATIONS,
    PicturesComponent
  ],
  providers: [
    ...ROUTES_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}