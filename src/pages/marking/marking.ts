import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Question} from "../../models/question";
import {CardsPage} from "../cards/cards";

/**
 * Generated class for the MarkingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marking',
  templateUrl: 'marking.html',
})
export class MarkingPage {
  question:Array<Question>;
  correctNo:number = 0;
  navColor:any = "secondary";
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.question = this.navParams.get('question');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkingPage');
    let loader = this.loadingCtrl.create({
      content: "Marking..."
    })
    loader.present().then(()=>{
      this.markIt(this.question).then(()=>{
        loader.dismiss();
      })
    });
  }

  async markIt(questions){
    let nCorrect = 0;
    questions.forEach((q)=>{
      if(q.selectedAnswer === q.answer) nCorrect += 1
    })
    this.correctNo = nCorrect;
    if(nCorrect >= questions.length/2 ){
      this.navColor = "secondary"
    }else{
      this.navColor = "danger"
    }
  }

  gotoHome(){
    this.navCtrl.setRoot(CardsPage)
  }

}
