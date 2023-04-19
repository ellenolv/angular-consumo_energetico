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
  maquinaLavar: boolean = false;
  maquinaSecar: boolean = false;
  Qnt_Tv!: number;
  Qnt_Comp!: number;
  ValorTarifa: number = 0;
  maqLavar: number = 0;
  maqSecar: number = 0; 

  Estimativa!: number;
  valorConta!: number;

mes : number =0;
convert : number = 0;

calc() {
  let banho = this.Residente * 533.33; 
  let lampada = this.Comodos * 360;
  let  televisao = this.Qnt_Tv * 180;
  let computador = this.Qnt_Comp * 800;


  if(this.maquinaLavar == true){
    this.maqLavar = 7.2;
   }
   else{
    this.maqLavar = 0;
   }
   if(this.maquinaSecar == true){
    this.maqSecar = 36;
   }
   else{
    this.maqSecar = 0;
   }

   this.convert = (banho + lampada + televisao + computador) / 1000;
   this.mes = (this.convert * 30) + (this.maqSecar + this.maqLavar);

    this.Estimativa = this.mes;
    this.Estimativa = parseFloat(this.Estimativa.toFixed(2));
    this.valorConta = this.mes * this.ValorTarifa;
    this.valorConta = parseFloat(this.valorConta.toFixed(2));
}
  
}
