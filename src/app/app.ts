import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Estudios } from './estudios/estudios';
import { Presentacion } from './presentacion/presentacion';
import { Experiencia } from './experiencia/experiencia';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Estudios, Presentacion, Experiencia, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'  
})
export class App {
  protected readonly title = signal('cv-miguel-ayala');
}
