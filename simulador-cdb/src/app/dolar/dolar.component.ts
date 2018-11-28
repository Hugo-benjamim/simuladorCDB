import { Component, OnInit, Injectable } from '@angular/core';
import { Dolar } from './dolar.model';
import { DolarService } from './dolar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {
  taxa = 3.74898;
  free: String;
  taxas: Dolar[];
  taxa1: number; // variação anual
  dolarAtual: number;
  dolarAnoPassado: number;
  constructor(private dolarService: DolarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dolarService.dolar().subscribe(items => this.taxas = items,
      (err) => console.error(err), () => this.calculaVariacao());
  }

  calculaVariacao() {
    this.dolarAnoPassado = parseFloat(this.taxas[this.taxas.length - 1].ask);
    this.dolarAtual = parseFloat(this.taxas[0].ask);
    this.taxa = this.dolarAtual;
    this.taxa1 = ((this.dolarAtual / this.dolarAnoPassado) - 1) * 100;
    let taxa1 = this.taxa1.toLocaleString('pt', {minimumFractionDigits: 2});
    this.free = `Variação 12 meses: ${taxa1}%`;
  }
}
