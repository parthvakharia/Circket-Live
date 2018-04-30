import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LoginPage } from '../Login/login';
import { ScorePage } from '../score/score';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) { }
  signin(){
    this.navCtrl.setRoot(ScorePage);
  }
  signup(){
    this.navCtrl.setRoot(LoginPage);
  }
  forgetpwd(){
    let prompt = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter your email address to send a reset link password",
      inputs: [
        {
          name: 'title',
          placeholder: 'Enter Your Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          // console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
                 //console.log('send');
          }
        }
      ]
    });
    prompt.present();
  }
}
