import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitWebProvider {
 
  //sets up local variables to be used later in the API calls. 
  gitName:String;
  private gitUrl = 'https://api.github.com/users/';
  private gitLocal = '../../assets/userData.json';
  private gitLocaldata ='../../assets/repoData.json'
  private gitRep = "/repos";
  public avatarUrl;

  constructor(public http: Http) {
  }
  //receives item from input on home component, the item is then set to equal the GitHub user we are looking for. 
  setUserName(item: String){
    this.gitName = item
  }
  // called from the get-results component. Using the user input and the local url variable, we can make an API call to the github url
  gitAPI(){
    return this.http.get(this.gitUrl + this.gitName)
      //once we make the call, we map the response to json using the rxjs library. 
      .map(res => res.json());
  }
  // called from the git-results component. Using the user input and the local url variable, we can make an API call to the github url
  // and get a return of the public repos. 
  gitRepos(){
    return this.http.get(this.gitUrl + this.gitName + this.gitRep)
      //once we make the call, we map the response to json using the rxjs library. 
      .map(res => res.json());
  }
  //called from the git-settings component. Uses the api to get the avatar url
  gitsettingsName(item){
    return this.http.get(this.gitUrl + item)
      //once we make the call, we map the response to json using the rxjs library. 
      .map(res => res.json())
  } 
}

