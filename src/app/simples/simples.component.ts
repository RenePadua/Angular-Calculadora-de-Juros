import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simples',
  templateUrl: './simples.component.html',
  styleUrls: ['./simples.component.css']
})
export class SimplesComponent implements OnInit {  
  v: number;
  t: number;
  m: number;

  constructor() {
  this.v = 1;
  this.t = 0;
  this.m = 0;
  
 }
  ngOnInit() {}

  SimplesTable() {
    let lista: number[] = [];
    let x = (this.v * (this.t / 100));
    let total = x;
    var z = document.getElementById('tabela');
    if (this.m === 0) {
      z.style.display = 'none';
      }
    else 
      z.style.display = 'block';
      for (let i = 0; i < this.m; i++) {
        lista.push(Number(total.toFixed(2)));
        total = Number(total) + Number(x);
      }
      return lista;
    }
  }
