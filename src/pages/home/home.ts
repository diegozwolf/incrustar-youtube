import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //-----------------------------------------------------
  //Atributos ruta para los vídeos de youtube 
  //-----------------------------------------------------
  videos: any[] = [
    {
      titulo: 'A Trip to the Moon',
       video:'https://www.youtube.com/embed/_FrdVdKlxUk'
    },
    {
      titulo: 'Nosferatu 1922',
      video: 'https://www.youtube.com/embed/uUueCDfJShg'
    }
  ]

  constructor(public navCtrl: NavController) {  }

}
