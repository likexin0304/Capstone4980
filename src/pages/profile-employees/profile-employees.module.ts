import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileEmployeesPage } from './profile-employees';

@NgModule({
  declarations: [
    ProfileEmployeesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileEmployeesPage),
  ],
})
export class ProfileEmployeesPageModule {}
