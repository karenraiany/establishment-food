import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { ValorModalPage } from '../valor-modal/valor-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page,
    ItemModalPage,
    ValorModalPage],
  entryComponents: [ItemModalPage, ValorModalPage],
})
export class Tab2PageModule {}
