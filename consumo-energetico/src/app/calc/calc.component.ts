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
  Tarifa: number = 0;
  maqLavar: number = 0;
  maqSecar: number = 0; 

  Estimativa: number = 0;
  valorConta: number = 0;


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

   this.Estimativa = (banho + lampada + televisao + computador) / 1000;
   this.Estimativa = (this.Estimativa * 30) + (this.maqSecar + this.maqLavar);
    this.Estimativa = parseFloat(this.Estimativa.toFixed(2));//formatar para 2 casa decimais
    console.log(' Estimativa2: ', this.Estimativa);

    this.valorConta = this.Tarifa * this.Estimativa;
    console.log('Valor1: ', this.Tarifa);


   this.valorConta = parseFloat(this.valorConta.toFixed(2));
   console.log('Valor2: ', this.valorConta);


}
  
}
