import { Component, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-valor-modal',
  templateUrl: 'valor-modal.page.html',
  styleUrls: ['valor-modal.page.scss']
})
export class ValorModalPage {

  // "value" passed in componentProps
  @Input() item: any;

  constructor(navParams: NavParams, 
    private modalController: ModalController,
    public alertController: AlertController) {
    // componentProps can also be accessed at construction time using NavParams

  }


  onDidDismiss() {
    this.modalController.dismiss();
  }

}
