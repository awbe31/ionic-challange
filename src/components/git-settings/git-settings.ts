import { Component, OnInit } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { GitWebProvider } from '../../providers/git-web/git-web';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'git-settings',
  templateUrl: 'git-settings.html'
})
export class GitSettingsComponent implements OnInit {
//sets up intial data model that will be saved in ionic database 
settingData = {
    username:"",
    avatar:"",
    name:"",
    location:""
}
constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, public gitWeb: GitWebProvider, private storage: Storage) {
}

ngOnInit(){
  //checks to see if user data has been set and if it has, it pulls down updated content
  if(this.settingData.username != ""){
    this.storage.set('userInfo',this.settingData);
  }else{
  this.storage.get('userInfo').then((val) => {
      this.settingData = val;
  });
  }
  //This will dump the DB, Warning this is Hot!! #haltandcatchfire
  //this.storage.clear();
}

//close modal using Ionics ViewControllers dismiss method
gitSettingClose() {
   this.viewCtrl.dismiss();
   this.storage.set('userInfo',this.settingData);
}
//takes the username and pulls the avatar url from the github API 
gitUserSettings(){
  let name = this.settingData.username;
  this.gitWeb.gitsettingsName(name).subscribe((data) => {
    this.settingData.avatar = data.avatar_url;
  });;
}
}
