import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ScorePage } from '../score/score';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController) {}
  signup(){
    this.navCtrl.setRoot(ScorePage);
  }
  
}
