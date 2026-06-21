import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Estudios } from './estudios/estudios';
import { Presentacion } from './presentacion/presentacion';
import { Experiencia } from './experiencia/experiencia';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollAnimateDirective } from './scroll-animate.directive';
import { fadeInUp } from './animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Estudios, Presentacion, Experiencia, MatToolbarModule, ScrollAnimateDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [fadeInUp]
})
export class App {
  protected readonly title = signal('cv-miguel-ayala');
}
