import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-data-biding',
  templateUrl: './ejemplo-data-biding.component.html',
  styleUrls: ['./ejemplo-data-biding.component.css']
})
export class EjemploDataBidingComponent implements OnInit {

  mensaje_recibido_hijo : string;
  mensaje: string;
  constructor() { }

  ngOnInit() {
  }
  mensaje_hijo(event) {
    this.mensaje_recibido_hijo = event;
  }

}
