import { Component } from '@angular/core';
import { PresentacionModel } from '../Models/presentacionModel';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css',
  standalone: true
})
export class Presentacion {
  titulo = 'Presentación';
  presentacion: PresentacionModel["habilidades"] = new PresentacionModel().habilidades;
  descripcion: PresentacionModel["descripcion"] = new PresentacionModel().descripcion;
}
