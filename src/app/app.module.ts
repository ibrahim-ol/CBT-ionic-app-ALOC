import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {  Api } from '../providers';
import { MyApp } from './app.component';

import { CardsPage } from "../pages/cards/cards";
import { SubjectsPage } from "../pages/subjects/subjects";
import {QuestionPage} from "../pages/question/question";
import {MarkingPage} from "../pages/marking/marking";

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    SubjectsPage,
    QuestionPage,
    MarkingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    SubjectsPage,
    QuestionPage,
    MarkingPage
  ],
  providers: [
    Api,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
