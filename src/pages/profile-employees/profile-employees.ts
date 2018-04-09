import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { employess_profile } from '../../models/employess_profile';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ProfileEmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-employees',
  templateUrl: 'profile-employees.html',
})
export class ProfileEmployeesPage {
  employess_profile = {} as employess_profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe( auth => {
      this.afDatabase.list(`employess_profile/${auth.uid}`).push(this.employess_profile).then(()=>this.navCtrl.push('HomePage'));

    })
  }

}
