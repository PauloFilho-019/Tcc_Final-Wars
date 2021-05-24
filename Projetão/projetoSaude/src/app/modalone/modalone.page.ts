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
  img: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  info: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string;
  info7: string;
  info8: string;
  info9: string;
  infoExtra: string;
  
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
      this.infoExtra= "IMC encontra-se abaixo do normal. Faça uma consulta médica e   uma consulta nutricional  para verificação do estado geral da sua saúde e  dos seus hábitos alimentares.";
      this.img= "assets/imagens/img.jpg";
      this.img1= "assets/imagens/img1.jpeg";
      this.img2= "assets/imagens/img2.jpg";
      this.img3= "assets/imagens/img3.jpg";
      this.img4= "assets/imagens/img4.jpg";
      this.img5= "assets/imagens/img5.jpg";

     }else if  (this.data.imc < 25){
      this.info= "Não sei";
      this.info2= "aaa";
      this.info3= "bb";
      this.info4= "violão";
      this.info5= "Nitroglicerina";
      this.info6= "Abacate";
      this.info7= "Tapioca";
      this.info8= "Salada de frutas";
      this.info9= "Suco verde";
      this.infoExtra= "IMC encontra-se dentro da normalidade. Mantenha-se ativo fisicamente, pratique exercícios e alimente-se de maneira saudável, para manter o seu peso ideal, sempre !";
      this.img= "assets/imagens/img6.jpg";
      this.img1= "assets/imagens/img7.jpg";
      this.img2= "assets/imagens/img8.jpg";
      this.img3= "assets/imagens/img9.jpg";
      this.img4= "assets/imagens/img10.jpg";
      this.img5= "assets/imagens/img11.jpg";

    }else if  (this.data.imc < 30){
      this.info= "Guitarra";
      this.info2= "Blastoise";
      this.info3= "Pikachu";
      this.info4= "Gengibre";
      this.info5= "Café";
      this.info6= "Abacate";
      this.info7= "Tapioca";
      this.info8= "kung fu panda";
      this.info9= "Suco verde";
      this.infoExtra= "Ao medir índice de massa corporal e verificar que encontra-se acima do normal, é aconselhável fazer uma avaliação de composição corporal.A finalidade é verificar se o excesso de peso está relacionado à sua quantidade de massa magra (músculos, ossos e peso residual) ou adiposa (gordura). Recomendamos uma consulta médica e uma consulta nutricional  para verificação do seu estado geral de saúde e hábitos alimentares para iniciar um processo saudável para perder peso.";
      this.img= "assets/imagens/img12.jpg";
      this.img1= "assets/imagens/img13.jpg";
      this.img2= "assets/imagens/img14.jpg";
      this.img3= "assets/imagens/img15.jpg";
      this.img4= "assets/imagens/img16.jpg";
      this.img5= "assets/imagens/img17.jpg";
    }else if  (this.data.imc < 35){
      this.info= "Ovo";
      this.info2= "Cereais integrais";
      this.info3= "Iogurte natural";
      this.info4= "Gengibre";
      this.info5= "Café";
      this.info6= "Abacate";
      this.info7= "Tapioca";
      this.info8= "Salada de frutas";
      this.info9= "Suco verde";
      this.infoExtra= "IMC bem acima do normal. Faça uma avaliação de composição corporal para verificar se o excesso de peso está relacionado à quantidade de massa magra (músculos, ossos e peso residual) ou adiposa (gordura). No caso do excesso de adiposidade, recomendamos uma consulta endocrinológica e uma consulta nutricional, para verificação do seu estado geral de saúde e hábitos alimentares. Os exercícios aquáticos, como a hidroginástica e a natação, são os mais indicados para obesos que desejam começar a praticar seus exercícios.";
      this.img= "assets/imagens/img23.jpg";
      this.img1= "assets/imagens/img24.jpg";
      this.img2= "assets/imagens/img25.jpg";
      this.img3= "assets/imagens/img26.jpg";
      this.img4= "assets/imagens/img27.jpg";
      this.img5= "assets/imagens/img28.jpg";
    }else if  (this.data.imc < 40){
      this.info= "Ovo";
      this.info2= "Cereais integrais";
      this.info3= "Iogurte natural";
      this.info4= "Gengibre";
      this.info5= "Café";
      this.info6= "Abacate";
      this.info7= "Tapioca";
      this.info8= "Salada de frutas";
      this.info9= "Suco verde";
      this.infoExtra= "Ao tentar saber o índice de massa corporal calcular um resultado que dê nesta faixa, saiba que os riscos à saúde aumentam a partir do sobrepeso, para doenças como diabetes e hipertensão.Este aumento é contínuo, à medida que aumenta o valor do IMC. Além disso, alguns grupos étnicos apresentam diferentes taxas de distribuição de gordura, como por exemplo, populações asiáticas e polinésias que estariam mais predispostos a diabetes tipo 2 e doenças cardiovasculares do que outras.";
      this.img= "assets/imagens/img29.jpg";
      this.img1= "assets/imagens/img30.jpg";
      this.img2= "assets/imagens/img31.jpg";
      this.img3= "assets/imagens/img32.jpg";
      this.img4= "assets/imagens/img33.jpg";
      this.img5= "assets/imagens/img34.jpg";
    }else if (this.data.imc > 40) {
      this.info= "Ovo";
      this.info2= "Cereais integrais";
      this.info3= "Iogurte natural";
      this.info4= "Gengibre";
      this.info5= "Café";
      this.info6= "Abacate";
      this.info7= "Tapioca";
      this.info8= "Salada de frutas";
      this.info9= "Suco verde";
      this.infoExtra= "Nesta faixa que aponta um IMC de 40 a números mais altos, os riscos cardiovasculares são elevadíssimos,  assim como dificuldade de locomoção e imensa sobrecarga sobre as articulações.";
      this.img= "assets/imagens/img35.jpg";
  }
}
  ngOnInit() {
    alert("O aplicativo não se responsabilizar por problemas envolvendo alergias a algum alimento dos cardapios gerados, consulte um medido para saber quais alimentos você pode comer, sua saude é importante.");
  }
  

  close(){
    this.modalCtrl.dismiss();
  }
}
