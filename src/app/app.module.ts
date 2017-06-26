import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { SQLite} from '@ionic-native/sqlite';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GitWebProvider } from '../providers/git-web/git-web';
import { GitResultsComponent } from '../components/git-results/git-results';
import { GitSettingsComponent } from '../components/git-settings/git-settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GitResultsComponent,
    GitSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GitResultsComponent,
    GitSettingsComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    SQLite,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GitWebProvider
  ]
})
export class AppModule {}
