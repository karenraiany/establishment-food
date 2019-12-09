import { Component, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ValorModalPage } from '../valor-modal/valor-modal.page';

@Component({
  selector: 'app-item-modal',
  templateUrl: 'item-modal.page.html',
  styleUrls: ['item-modal.page.scss']
})
export class ItemModalPage {

  // "value" passed in componentProps
  @Input() item: any;
  modal;

  constructor(navParams: NavParams, 
    private modalController: ModalController,
    public alertController: AlertController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  onDidDismiss() {
    this.modalController.dismiss();
  }

  async presentAlertLocal() {
    const alert = await this.alertController.create({
      header: 'Novo Lugar',
      inputs: [
        {
          name: 'lugar',
          type: 'text',
          placeholder: 'Nome do Local'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: result => {
            console.log(result.lugar)
          }
        }
      ]
    });

    await alert.present();
  }

  async presentModal(item) {
    this.modal = await this.modalController.create({
      component: ValorModalPage,
      componentProps: { item: item }
    });
    return await this.modal.present();
  }
  
  async modalDimiss() {
    await this.modal.onDidDismiss();
  }

}
