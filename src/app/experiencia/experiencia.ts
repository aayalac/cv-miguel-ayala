import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaModel } from '../Models/experienciaModel';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
  standalone: true
})

export class Experiencia {
  titulo = new ExperienciaModel().titulo;
  proyectos = new ExperienciaModel().proyectos;  
}