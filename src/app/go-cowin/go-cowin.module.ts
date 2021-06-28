import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoCowinPageRoutingModule } from './go-cowin-routing.module';

import { GoCowinPage } from './go-cowin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoCowinPageRoutingModule
  ],
  declarations: [GoCowinPage]
})
export class GoCowinPageModule {}
