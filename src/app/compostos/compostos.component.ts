import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compostos',
  templateUrl: './compostos.component.html',
  styleUrls: ['./compostos.component.css']
})
export class CompostosComponent implements OnInit {  
  // mf = montante final
  // v = capital inicial
  // t = taxa de juros
  // m = quantidade de meses
  // exp = taxa de juros elevado à quantidade de meses
  // jur = Valor dos juros acumulados

  v: number;
  t: number;
  m: number;

  constructor() {
  this.v = 2;
  this.t = 1;
  this.m = 2;
    
 }

//Fórmula ( x = v * (1 + t) ^ m)

  ngOnInit() {}


  CompostosResultado(){
  
  let exp = Math.pow(1 + this.t/100,this.m);
  let mf = this.v * exp;
  let jur = mf - this.v;
  jur = Number(jur.toFixed(2));
  let composto: Number = this.v + jur;
  let total = composto.toFixed(2);
  return total;

  }

  CompostosTable() {
    let lista: number[] = [];
    let exp = Math.pow(1 + this.t/100,this.m);
    let mf = this.v * exp;
    var jur = mf - this.v;
    let total = jur;
    var z = document.getElementById('tabela');
    if (this.m === 0) {
      z.style.display = 'none';
      }
    else 
      z.style.display = 'block';
      for (let i = 0; i < this.m; i++) {
        //this.m = i,
        //let juros = jur;
        total = + (this.v * ((1 + this.t / 100) ** (i+1)) - this.v);
        lista.push(Number(total.toFixed(2)));
        total = + total;
      }
      return lista;
    }
  }