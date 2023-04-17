import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  //variáveis
  Residente!: number;
  Comodos!: number;
  LavaRoupa: boolean = false;
  SecadoraRoupa: boolean = false;
  Qnt_Tv!: number;
  Qnt_Comp!: number;
  Valor_tarifa: number = 0;

  Estimativa: number = 0;
  Valor_mensal: number = 0;

  
calc() {
  /*
  //valores padrão
  const consumoTv = 0.18; // consumo em kW/hora por TV
  const consumoComp = 0.25; // consumo em kW/hora por computador
  const consumoLavaRoupa = 0.3; // consumo em kW/hora por hora de uso da lavadora
  const consumoSecadoraRoupa = 0.5; // consumo em kW/hora por hora de uso da secadora

  let consumoTotal = 0;
  consumoTotal += this.Residente * 150; // consumo base por residente
  consumoTotal += this.Comodos * 100; // consumo base por cômodo

  if (this.LavaRoupa) {
    consumoTotal += consumoLavaRoupa * 4; // considerando 4 lavagens por semana
  }

  if (this.SecadoraRoupa) {
    consumoTotal += consumoSecadoraRoupa * 4; // considerando 4 secagens por semana
  }

  consumoTotal += this.Qnt_Tv * consumoTv * 6; // considerando 6 horas por dia de uso de cada TV
  consumoTotal += this.Qnt_Comp * consumoComp * 8; // considerando 8 horas por dia de uso de cada computador

  this.Estimativa = consumoTotal;
  this.Valor_mensal = consumoTotal * this.Valor_tarifa;
*/
  
  }
}
