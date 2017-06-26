import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { GitWebProvider } from '../../providers/git-web/git-web';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'git-results',
  templateUrl: 'git-results.html'
})
export class GitResultsComponent implements OnInit{
  //declaring variables for later use. 
  gitData = [];
  gitRepoData;
  anyErrors;
  //sets up userInfo model in settings
  userData=[
    {"username":"",
      "name":""
    }
  ];

constructor(public navCtrl: NavController, public gitWeb: GitWebProvider, public alertCtrl: AlertController, private storage: Storage, public modalCtrl: ModalController) {

}

//function calls on module initiation
ngOnInit(){
    this.gitTheProvider();
    this.gitTheRepo();
};

// github API user call, using rxjs subscribe. If error is thrown, alert box is called 
// telling the user to try again.
gitTheProvider(){
  this.gitWeb.gitAPI().subscribe(
    (data) => {
      this.gitData.push(data);
    },
    (error) => {
      this.gitAlert();
  });
}

// github API repo call, using rxjs subscribe. If error is thrown, alert box is called 
gitTheRepo(){
  this.gitWeb.gitRepos().subscribe((data) => {
    this.gitRepoData = data;
  });
}
  
//if error exists in user API call, alert the user about the issue. 
gitAlert(){
  let alert = this.alertCtrl.create({
    title: 'User Not Found',
    subTitle: 'Octocat has found a problem, lets try that again',
    buttons: [
      {
        text: 'Try Again',
        handler: data => {
        this.navCtrl.push(HomePage);
        }
      }
    ]
  });
  alert.present();
}
  

//using navController, send user back to home page if they tap the search icon. 
gitSearch(){
  this.navCtrl.push(HomePage);
}
}
