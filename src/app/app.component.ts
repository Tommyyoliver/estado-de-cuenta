import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstadoDeCuentaComponent } from './components/estado-de-cuenta/estado-de-cuenta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstadoDeCuentaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estado-de-cuenta';
}
