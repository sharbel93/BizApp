import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BusinessListComponent } from './business/businessList.component';
import { BusinessEditComponent } from './business/businessEdit.component';
import { HttpModule } from '@angular/http';
import { BusinessService } from './service/business.service';
import { BusinessDisplayComponent } from './business/businessDisplay.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BusinessAddComponent } from './business/businessAdd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, BusinessListComponent, BusinessEditComponent, BusinessDisplayComponent, BusinessAddComponent

  ],
  imports: [
    BrowserModule, HttpModule, AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppRoutingModule, FormsModule,
    ReactiveFormsModule


  ],
  providers: [ BusinessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
