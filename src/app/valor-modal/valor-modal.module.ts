import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorModalPage } from './valor-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ValorModalPage }])
  ],
  declarations: [ValorModalPage],
})
export class ValorModalPageModule {}
