import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/Home/home';
import { LoginPage } from '../pages/Login/login';
import { ScorePage } from '../pages/score/score';
import { SharePage } from '../pages/share/share';
import { PrivacypolicyPage } from '../pages/Privacypolicy/Privacypolicy';
import { TermsandconditionPage } from '../pages/Termsandcondition/Termsandcondition';

import { LivePage } from '../tab/live/live';
import { ResultPage } from '../tab/result/result';
import { UpcomingmatchPage } from '../tab/upcomingmatch/upcomingmatch';
import { LivescorePage } from '../pages/livescore/livescore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ScorePage,
    SharePage,
    PrivacypolicyPage,
    TermsandconditionPage,
    LivePage,
    ResultPage,
    UpcomingmatchPage,
    LivescorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ScorePage,
    SharePage,
    PrivacypolicyPage,
    TermsandconditionPage,
    LivePage,
    ResultPage,
    UpcomingmatchPage,
    LivescorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
