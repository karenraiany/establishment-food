import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { ProdutosService } from 'src/providers/produtos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itens: any = [];
  itensOrigin: any = [];
  searchTerm: string = "";
  searching: any = false;

  modal;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    private produtosService: ProdutosService) {
  }

  ngOnInit() {

    this.itens = this.produtosService.getAll();

    console.log(this.itens)
    this.itensOrigin = this.itens;
    this.setFilteredItems();
  }

  
  onSearchInput(){
    this.searching = true;
    setTimeout( () => {
      this.searching = false;
      this.setFilteredItems();
    }, 700)
  }
  
  filterItems(searchTerm) {
    return this.itens.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
  setFilteredItems() {
    this.itens = this.itensOrigin;
    this.itens = this.filterItems(this.searchTerm);
  }
  
  async presentModal(item) {
    this.modal = await this.modalCtrl.create({
      component: ItemModalPage,
      componentProps: { item: item }
    });
    return await this.modal.present();
  }
  
  async modalDimiss() {
    await this.modal.onDidDismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Novo Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nome'
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
            this.itens.push({
              title: result.name
            });
            this.itensOrigin.push({
              title: result.name
            });
          }
        }
      ]
    });

    await alert.present();
  }
  
}

