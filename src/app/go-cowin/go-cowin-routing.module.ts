import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoCowinPage } from './go-cowin.page';

const routes: Routes = [
  {
    path: '',
    component: GoCowinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoCowinPageRoutingModule {}
