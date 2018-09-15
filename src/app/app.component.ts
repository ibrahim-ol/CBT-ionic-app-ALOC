import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';
import { CardsPage } from "../pages/cards/cards";
import { Settings } from '../providers';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = CardsPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,  private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
