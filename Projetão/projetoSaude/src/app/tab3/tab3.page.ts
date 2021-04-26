import { Component } from '@angular/core';
//import { EmailComposer } from '@ionic-native/email-composer'; 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(){//private composer: EmailComposer 

  }
  //openEmail() {
   //let email = {
   //to:'paulo.2012@hotmail.com',
   //cc:'seeier@gmail.com',
   //subject: 'deu certo',
   //body: 'qi qi qi',
   //isHtml: true

    //}
  //this.composer.open(email);
//}
  ngOnInit() {
    alert("Utilize esse formulario para nos informar de qualquer problema relacionado a falhas no sistema ou sugestões para melhorias, ficaremos muito felizes de ver sua avaliação");
  }
}
