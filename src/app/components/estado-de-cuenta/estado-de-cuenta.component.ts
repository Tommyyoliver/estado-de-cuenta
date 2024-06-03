import { Component } from '@angular/core';
import { IEstadoDeCuenta } from './model/estado-de-cuenta'
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-estado-de-cuenta',
  standalone: true,
  imports: [DecimalPipe, DatePipe],
  templateUrl: './estado-de-cuenta.component.html',
  styleUrl: './estado-de-cuenta.component.scss'
})
export class EstadoDeCuentaComponent {

  datos: IEstadoDeCuenta = {
    cliente: 200001901,
    areaCtrlCreditos: "AG16",
    areaControlCredAQUACHILE: "USD",
    limiteCredito: 3000000,
    cuentaCredito: 200001901,
    gradoAgotamiento: 110.37,
    feHorizonteCredito: new Date(2024, 2, 7),
    creditos: 527123.3860,
    comprometEsp: 121319.6200,
    valComercial: 2905221.9583,
    compromTotal: 3311025.7343,
    creditosAseg: 0.0000,
  }

}
