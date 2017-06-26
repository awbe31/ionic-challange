import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GitWebProvider } from '../../providers/git-web/git-web';
import { GitResultsComponent } from '../../components/git-results/git-results';
import { GitSettingsComponent } from '../../components/git-settings/git-settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //sets up the model for the ngModel inpu
  inputName = {
    title:""
  }
  
  constructor(public navCtrl: NavController, public gitWeb: GitWebProvider, public modalCtrl: ModalController) {
    
  }
//opens the settings page using modal window 
 gitSettings() {
    let profileModal = this.modalCtrl.create(GitSettingsComponent);
    profileModal.present();
  }
//uses navController to go to git-results page and submits username to git-web service
  gitUserPage() {
     let name = this.inputName.title
     this.gitWeb.setUserName(name);
      //push another page onto the history stack
      this.navCtrl.push(GitResultsComponent);
  }
}


