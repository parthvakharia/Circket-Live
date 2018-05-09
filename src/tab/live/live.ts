import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivescorePage } from '../../pages/livescore/livescore';


@Component({
    selector: 'page-live',
    templateUrl: 'live.html',
})

export class LivePage {
    
    constructor(public navCtrl: NavController) {}
    livescore(){
        console.log(this.navCtrl)
        this.navCtrl.setRoot(LivescorePage);
    }

}
