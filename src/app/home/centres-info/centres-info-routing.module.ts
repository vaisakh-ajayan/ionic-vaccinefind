import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentresInfoPage } from './centres-info.page';

const routes: Routes = [
  {
    path: '',
    component: CentresInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentresInfoPageRoutingModule {}
