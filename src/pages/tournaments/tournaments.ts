import { EliteApi } from './../../shared/elite-app.service';
import { TeamsPage } from './../teams/teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  tournaments: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    this.eliteApi.getTournaments().subscribe(data => {
      console.log(data);
      this.tournaments = data;
    })
  }

  itemTapped() {
    this.navCtrl.push(TeamsPage);
  }

}
