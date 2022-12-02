import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaDataComponent } from './components/tabla-data/tabla-data.component';
import { CrudTablaComponent } from './components/crud-tabla/crud-tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MaterialModule } from './material/material/material.module';
import { FormsModule } from '@angular/forms';

const firebase = {
  projectId: 'store-mega',
  appId: '1:76970578139:web:24b331bdeb639521cb3cfe',
  storageBucket: 'store-mega.appspot.com',
  apiKey: 'AIzaSyAtHCMfaofHX64jhFSZ91jX8dewMle8NgY',
  authDomain: 'store-mega.firebaseapp.com',
  messagingSenderId: '76970578139'
}

@NgModule({
  declarations: [
    AppComponent,
    TablaDataComponent,
    CrudTablaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(firebase)),
    provideFirestore(() => getFirestore()),
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
