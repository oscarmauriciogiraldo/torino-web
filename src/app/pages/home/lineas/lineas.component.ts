import { Component } from '@angular/core';
import { Lienas } from './model/lineas.model'

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


}
