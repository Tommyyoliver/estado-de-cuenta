import { Component, OnInit } from '@angular/core';
import { IEstadoDeCuenta } from './model/estado-de-cuenta'
import { DecimalPipe } from '@angular/common';
import datosCuenta from '../../datos-cuenta.json';

@Component({
  selector: 'app-estado-de-cuenta',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './estado-de-cuenta.component.html',
  styleUrl: './estado-de-cuenta.component.scss'
})
export class EstadoDeCuentaComponent implements OnInit {

  datos?: IEstadoDeCuenta;

  ngOnInit(): void {
    this.datos = datosCuenta;
  }

}
