import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionemployePageRoutingModule } from './gestionemploye-routing.module';

import { GestionemployePage } from './gestionemploye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionemployePageRoutingModule
  ],
  declarations: [GestionemployePage]
})
export class GestionemployePageModule {}
