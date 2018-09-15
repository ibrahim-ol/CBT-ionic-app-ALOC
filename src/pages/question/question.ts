import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Question} from "../../models/question";
import {MarkingPage} from "../marking/marking";

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  question: Array<Question>;
  curQuestion: Question;
  cursor: number = 0;
  curAnswer: any;
  examStarted:boolean = false;
  durationSelected:boolean = false;
  duration:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.question = this.navParams.get("data")

    console.log(this.question);
    this.question.forEach((d) => {
      d.selectedAnswer = "";
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    console.log(this.question)
    this.curQuestion = this.question[this.cursor];
  }

  prevQuestion() {
    if (this.cursor !== 0) {
      this.question[this.cursor] = this.curQuestion;
      this.cursor -= 1;
      this.curQuestion = this.question[this.cursor];
    }

  }

  nextQuestion() {
    if (this.cursor !== this.question.length - 1) {
      this.question[this.cursor] = this.curQuestion;
      this.cursor += 1;
      this.curQuestion = this.question[this.cursor];
    }

  }

  saveAnswer(answer) {
    this.curQuestion.selectedAnswer = answer;
    console.log(this.curQuestion)
  }

  submitAnswer() {
    this.question[this.cursor] = this.curQuestion;
    console.log(this.question);
    this.navCtrl.setRoot(MarkingPage, {question: this.question});
  }

  onStartClick(){
    setInterval(()=>{
      this.duration -= 1;
      if(this.duration === 0){
        this.submitAnswer();
      }
    }, 1000);
    this.examStarted = true;
  }

  showDuration(){
    return Math.floor(this.duration/60) + ":" + (this.duration%60);
  }
}
