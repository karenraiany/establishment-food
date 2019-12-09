import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModalPage } from './item-modal.page';
import { ValorModalPage } from '../valor-modal/valor-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemModalPage }])
  ],
  declarations: [ItemModalPage, ValorModalPage],
  entryComponents: [ValorModalPage],
})
export class ItemModalPageModule {}
