import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.page.html',
  styleUrls: ['./modalone.page.scss'],
})
export class ModalonePage implements OnInit {
  sliderOpts= {
    zoom: {
      maxRatio: 2
    }
  }

  data: any;
  info: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string;
  info7: string;
  info8: string;
  info9: string;
  
   constructor(private modalCtrl: ModalController, private route: ActivatedRoute) { 
    
    //this.route.queryParams.subscribe(params =>{
    //  console.log(params);
    //  if (params && params.data){
    //    this.data = parseFloat(params.data);
    //  }
    //});


    this.data = JSON.parse(localStorage.getItem('imc'));
    
    

    if (this.data.imc < 18.5){
      this.info= "Ovo";
      this.info2= "Cereais integrais";
      this.info3= "Iogurte natural";
      this.info4= "Gengibre";
      this.info5= "Café";
      this.info6= "Abacate";
      this.info7= "Tapioca";
      this.info8= "Salada de frutas";
      this.info9= "Suco verde";
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
    alert("O aplicativo não se responsabilizar por problemas envolvendo alergias a algum alimento dos cardapios gerados, consulte um medido para saber quais alimentos você pode comer, sua saude é importante.");
  }
  

  close(){
    this.modalCtrl.dismiss();
  }
}
