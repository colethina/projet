import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionemployePage } from './gestionemploye.page';

const routes: Routes = [
  {
    path: '',
    component: GestionemployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionemployePageRoutingModule {}
