import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GitSettingsComponent } from './git-settings';

@NgModule({
  declarations: [
    GitSettingsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    GitSettingsComponent
  ]
})
export class GitSettingsComponentModule {}
