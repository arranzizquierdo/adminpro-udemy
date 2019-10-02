import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html"
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // acceder al elemente del html, simula un document.getElementById

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0
    } else {
      this.progreso = newValue
    }

    this.txtProgress.nativeElement.value = this.progreso; // como hay 1 componente llamado dos veces utilizamos el viewchild para saber cuál de ellos está siendo usado y acceder a su valor
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
