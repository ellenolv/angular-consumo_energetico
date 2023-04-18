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

mes : number =0;
convert : number = 0;


  valor_switch() {
  
    // atualiza o valor da variável com o valor do switch LavaRoupa
    this.LavaRoupa = this.LavaRoupa;
    this.SecadoraRoupa = this.SecadoraRoupa;
  }
  
calc() {
  let banho = this.Residente * 533.33; 
  let lampada = this.Comodos * 360;
  let  televisao = this.Qnt_Tv * 180;
  let computador = this.Qnt_Comp * 800;


// verifica o valor da variável switchValue e executa as condições necessárias
if (this.LavaRoupa && this.SecadoraRoupa) {
  // executa a condição para quando LavaRoupa e SecadoraRoupa estão ligados
} else if (this.LavaRoupa) {
  // executa a condição para quando apenas LavaRoupa está ligado
} else if (this.SecadoraRoupa) {
  // executa a condição para quando apenas SecadoraRoupa está ligado
  this.Estimativa = (banho + lampada + televisao + computador ) / 1000;
  this.Estimativa = this.Estimativa * 30;

  this.Estimativa = this.mes;
  this.Estimativa = parseFloat(this.Estimativa.toFixed(2));
  this.Valor_mensal = this.mes * this.Valor_tarifa;
  this.Valor_mensal = parseFloat(this.Valor_mensal.toFixed(2));
} else {
  // executa a condição para quando nenhum switch está ligado
  this.Estimativa = (banho + lampada + televisao + computador ) / 1000;
  this.Estimativa = this.Estimativa * 30;

  this.Estimativa = this.mes;
  this.Estimativa = parseFloat(this.Estimativa.toFixed(2));
  this.Valor_mensal = this.mes * this.Valor_tarifa;
  this.Valor_mensal = parseFloat(this.Valor_mensal.toFixed(2));
}
  



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
