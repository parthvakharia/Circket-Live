import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LivePage } from '../../tab/live/live';
import { ResultPage } from '../../tab/result/result';
import { UpcomingmatchPage } from '../../tab/upcomingmatch/upcomingmatch';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})

export class ScorePage {

  livePage;
  resultPage;
  upcomingmatchPage;

  constructor(public navCtrl: NavController) {

    this.livePage = LivePage;
    this.resultPage = ResultPage;
    this.upcomingmatchPage = UpcomingmatchPage;

  }

}
