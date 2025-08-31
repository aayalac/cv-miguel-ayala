import { Component } from '@angular/core';
import { EstudiosModel } from '../Models/estudiosModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudios',
  imports: [CommonModule],
  templateUrl: './estudios.html',
  styleUrl: './estudios.css',
  standalone: true
})
export class Estudios {
  titulo = 'Estudios';
  estudios = new EstudiosModel().estudios;
}
