import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoadingController} from "ionic-angular";
import {QuestionPage} from "../question/question";
import {Question} from "../../models/question";

/**
 * Generated class for the SubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {
  subjects: Array<{name:string, id:string}>;
  exam: string;
  question:Array<Question>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public alertCtrl:AlertController) {
    this.subjects = [
      {name:"English language", id:"english"},
      {name:"Mathematics", id:"mathematics"},
      {name:"Commerce", id:"commerce"},
      {name:"Accounting", id:"accounting"},
      {name:"Biology", id:"biology"},
      {name:"Physics", id:"physics"},
      {name:"Chemistry", id:"chemistry"},
      {name:"English literature", id:"englishlit"},
      {name:"Government", id: "government"},
      {name:"Christ Religious Knowledge", id:"crk"},
      {name:"Geography", id:"geography"},
      {name:"Economics", id:"economics"},
      {name:"Islamic Religious Knowledge", id:"irk"},
      {name:"Civic Education", id:"civiledu"},
      {name:"Insurance", id:"insurance"},
      {name:"Current Affairs", id:"currentaffairs"},
      {name:"History", id:"history"}
    ];

  this.exam = this.navParams.get('exam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectsPage');
  }

  getQuestions(subject:string) {
    //call the question api provider
    let loader = this.loadCtrl.create({
      content: 'Getting questions...'
    })
    loader.present();
    let p1 = fetch(`https://questions.aloc.ng/api/q/7?subject=${subject.toLowerCase()}&type=${this.exam}`).then(data=>data.json())
    let p2 = fetch(`https://questions.aloc.ng/api/q/7?subject=${subject.toLowerCase()}&type=${this.exam}`).then(data=>data.json())
    let p3 = fetch(`https://questions.aloc.ng/api/q/7?subject=${subject.toLowerCase()}&type=${this.exam}`).then(data=>data.json())
    Promise.all([p1,p2,p3])
      .then((data) => {

        let qs = [];
        let qs2 = [];
        let idHolder = []
        if(data){
          data.forEach(d=>{
            qs = [...qs, ...d["data"]]
          });
        }

        qs.forEach((d:Question)=>{
          if(idHolder.indexOf(d.id) < 0){
            idHolder.push(d.id)
            d.selectedAnswer = ""
            qs2.push(d)
          }
        });
        console.log(qs2);
       this.navCtrl.setRoot(QuestionPage,{data: qs2});
        loader.dismiss()
      }).catch(err => {
      loader.dismiss();
      console.log(err);
      let alert = this.alertCtrl.create({
        title:"An error occured...",
        subTitle: err,
        message: "please check your internet"
      })
      alert.present();
    });
  }



}
