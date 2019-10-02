import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 50;
  progreso2: number = 70;

  constructor() { }

  ngOnInit() {
  }


  // Función para actualizar el progreso pero se puede poner directamente en el html (cambioValor)= "progress1 = $event"
  // actualizar(event: number) {
  //   console.log('event', event)
  //   this.progreso1 = event
  // }

}
