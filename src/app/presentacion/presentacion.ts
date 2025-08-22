import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css',
  standalone: true
})
export class Presentacion {
  titulo = 'Presentación';
  descripcion = 'Bienvenido a mi currículum vitae. Aquí encontrarás información sobre mi formación, experiencia y habilidades.';
  habilidades = ['Desarrollo Web', 'Angular', 'JavaScript', 'HTML', 'CSS', 'TypeScript'];
}
