import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  fecha: Date;
  numero: number;
  mensajes: string[];
  mensajeMapping: {[k: string]: string};
  usuario: any;
  map: {[k: string]: string};
  constructor() { }
  
  ngOnInit() {
    this.fecha = new Date();
    this.numero = 125.50;
    this.mensajes = ['1', '2', 'mensaje'];
    this.mensajeMapping ={'=0': 'no hay mensajes',
    '=1':'solo hay un mensaje', 'other': 'tienes # de mensajes'};
    this.usuario = {apellidos: 'sanches', sexo: 'hombre'};
    this.map = { 'hombre': 'Sr.' , 'mujer' : 'Sra.'}
  }

}
