import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GitResultsComponent } from './git-results';

@NgModule({
  declarations: [
    GitResultsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    GitResultsComponent
  ]
})
export class GitResultsComponentModule {}
