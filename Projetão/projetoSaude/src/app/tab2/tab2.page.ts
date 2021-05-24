import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaltwoPage } from '../modaltwo/modaltwo.page';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name : string;
  email: string;
  cpf: number;
  cidade : string;
  sang: string;
  date: number;
  telefone: number;

  constructor( private modalCtrl: ModalController, private router: Router){
     
  }

  async onclick(){
    const modal = await this.modalCtrl.create({
      component: ModaltwoPage
    }); 
    modal.present();
  }
}
