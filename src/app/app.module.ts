import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CenterListComponent } from './components/center-list/center-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CenterListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
