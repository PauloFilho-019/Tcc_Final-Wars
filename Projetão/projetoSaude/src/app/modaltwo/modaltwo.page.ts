import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';
@Component({
  selector: 'app-modaltwo',
  templateUrl: './modaltwo.page.html',
  styleUrls: ['./modaltwo.page.scss'],
})
export class ModaltwoPage implements OnInit {

  constructor(private apiService: UserService, private modalCtrl: ModalController) { 
     
    this.readData();
  }
  
  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
