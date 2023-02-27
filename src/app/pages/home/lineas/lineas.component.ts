import { Component } from '@angular/core';
import { Lienas } from './model/lineas.model';
import { Products } from './model/lineas.model'

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.scss']
})
export class LineasComponent {

  lineas: Lienas[] = [
    {
      title : 'Linea Femenina',
      image : 'https://tejidostotas.com/wp-content/uploads/2023/02/image-tejidos-totas-mujer-plata-marron-1.jpg'
    },
    {
      title : 'Linea Masculina',
      image : 'https://tejidostotas.com/wp-content/uploads/2023/02/image-tejidos-totas-hombre-grecia-azul-oscuro.jpg'
    },
    {
      title : 'Accesorios',
      image : 'https://http2.mlstatic.com/D_NQ_NP_862573-MCO41372923009_042020-O.jpg'
    }
  ]

  productos : Products[] = [
    {
      name : 'Lentes',
      description : '',
      image : './assets/img/products/Ray-Ban.jpg',
    },
    {
      name : 'Jeans',
      description : '',
      image : './assets/img/products/Dsquared2 1982.jpeg',
    },
    {
      name : 'Celulares',
      image : './assets/img/products/IMG_5012.JPG',
    },
    {
      name : 'Tenis',
      description : '',
      image : './assets/img/products/Dolce&Gabbana.JPG',
    },
    {
      name : 'Jackets',
      description : '',
      image : './assets/img/products/Hugo Boss.jpg',
    },
    {
      name : 'Gorras',
      description : '',
      image : './assets/img/products/Gucci(2).jpg',
    },
    {
      name : 'Bolso',
      description : '',
      image : './assets/img/products/Versace .jpg',
    },
    {
      name : 'Sandalia',
      description : '',
      image : './assets/img/products/Louis Vuitton.jpg',
    },
    /* {
      name : 'oro',
      description : '',
      image : '',
    }, */
  ]


}
