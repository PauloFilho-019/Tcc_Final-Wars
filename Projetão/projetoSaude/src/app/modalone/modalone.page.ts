import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.page.html',
  styleUrls: ['./modalone.page.scss'],
})
export class ModalonePage implements OnInit {
   data: any;
  info: string;
  info2: string;
  constructor(private modalCtrl: ModalController, private route: ActivatedRoute) { 
    
    //this.route.queryParams.subscribe(params =>{
    //  console.log(params);
    //  if (params && params.data){
    //    this.data = parseFloat(params.data);
    //  }
    //});


    this.data = JSON.parse(localStorage.getItem('imc'));
    
    

    if (this.data.imc < 18.5){
      this.info= "Banana com Arroz";
      this.info2= "Batata frita no jeito";
    }else if  (this.data.imc < 25){
      
    }else if  (this.data.imc < 30){
    alert("ccc")
    }else if  (this.data.imc < 35){
    alert("ddd")
    }else if  (this.data.imc < 40){
    alert("eee")
    }else if (this.data.imc > 40) {
    alert("fff")
  }
}
  ngOnInit() {
  }
  

  close(){
    this.modalCtrl.dismiss();
  }
}
