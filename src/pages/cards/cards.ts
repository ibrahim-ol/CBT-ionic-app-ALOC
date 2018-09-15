import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SubjectsPage } from "../subjects/subjects";

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){

  }
  openSubjectPage(exam){
    this.navCtrl.push(SubjectsPage, {'exam': exam});
  }

}
