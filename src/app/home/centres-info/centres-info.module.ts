import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentresInfoPageRoutingModule } from './centres-info-routing.module';

import { CentresInfoPage } from './centres-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentresInfoPageRoutingModule
  ],
  declarations: [CentresInfoPage]
})
export class CentresInfoPageModule {}
