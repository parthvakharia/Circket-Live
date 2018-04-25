import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/Home/home';
import { LoginPage } from '../pages/Login/login';
import { ScorePage } from '../pages/score/score';
import { SharePage } from '../pages/share/share';
import { PrivacypolicyPage } from '../pages/Privacypolicy/Privacypolicy';
import { TermsandconditionPage } from '../pages/Termsandcondition/Termsandcondition';

// import { LivePage } from '../tab/live/live';
// import { ResultPage } from '../tab/result/result';
// import { UpcomingmatchPage } from '../tab/upcomingmatch/upcomingmatch';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home page', component: HomePage},
      {title: 'Login page', component: LoginPage},
      { title: 'Cricket Live Score', component: ScorePage },
      { title: 'Share', component: SharePage },
      { title: 'Privacy Policy', component: PrivacypolicyPage },
      { title: 'Terms & Conditions', component: TermsandconditionPage }
    
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
