import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then(
        mensaje => console.log("Terminó", mensaje) // pintas el mensaje enviado desde la promesa
      )
      .catch(error => console.error("Error en la promsa", error));
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true); // mensaje que se envía con la promesa, puede ser un strin pero hemos puesto un boolenao
          // reject('Mensaje del error que quieres enviar') // si quieres ejecutar cuando algo ha fallado, el string es el mensaje que se imprimirá en el console.error
          clearInterval(intervalo); // paraliza la promesa cuando el contador llega a 3, tienes que declarar el intervalo
        }
      }, 1000);
    });
  }
}
