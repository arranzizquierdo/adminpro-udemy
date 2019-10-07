import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    // Observable con repeticiones
    // this.regresaObservable().pipe(
    //   retry(2) // repetirá la  operación el nº de veces que le pongas 2 = tres veces (la 1ª vez será la inicial y las 2-3 las dos veces que lo repite)
    // )
    //   .subscribe(
    //   numero => console.log('Subs', numero),
    //   error => console.error("Error en el observable", error),
    //   () => console.log("El observador terminó")

    //   )
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log("Subs", numero),
      error => console.error("Error en el observable", error),
      () => console.log("El observador terminó")
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log('La página se va a cerrar')
  this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador ++;

        const salida = {
          valor: contador
        }

        observer.next(salida);

        // Comentamos esta función para hacer que la función trabaje "interminablemente" para poder probar el ngOnDestroy
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2) {
        //   observer.error("Auxilio")
        // }
      }, 1000);
    }).pipe(
      map(response => response.valor),
      filter( (valor, index) => { // recibe dos argumentos, el valor/respuesta y el nº de veces que se ha llamado el filter
        if (valor % 2 === 1) {
          //impar
          return true
        } else {
          return false
        }
      })
      );
  }
}
