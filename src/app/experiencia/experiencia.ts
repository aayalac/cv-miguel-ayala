import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
  standalone: true
})
export class Experiencia {
  titulo = 'Experiencia';
  descripcion = 'A continuación se muestra un resumen de mi experiencia laboral y proyectos destacados.';
  proyectos = [
    { nombre: 'Proyecto A', descripcion: 'Descripción del Proyecto A' },
    { nombre: 'Proyecto B', descripcion: 'Descripción del Proyecto B' },
    { nombre: 'Proyecto C', descripcion: 'Descripción del Proyecto C' }
  ];
}
