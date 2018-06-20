import { TeamHomePage } from './../pages/team-home/team-home';
import { TournamentsPage } from './../pages/tournaments/tournaments';
import { TeamsPage } from './../pages/teams/teams';
import { TeamDetailPage } from './../pages/team-detail/team-detail';
import { GamePage } from './../pages/game/game';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StandingsPage } from '../pages/standings/standings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Game', component: GamePage },
      { title: 'My Teams', component: MyTeamsPage },
      { title: 'Team Detail', component: TeamDetailPage },
      { title: 'Teams', component: TeamsPage },
      { title: 'Tournaments', component: TournamentsPage },
      { title: 'Standings', component: StandingsPage },
      { title: 'Team Home', component: TeamHomePage },
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

  goToTournaments() {
    this.nav.setRoot(TournamentsPage);
  }

  goHome() {
    this.nav.setRoot(MyTeamsPage);
  }
}
