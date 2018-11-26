import { Component, OnInit } from '@angular/core';
import { Ipca } from './ipca.model';
import { Observable } from 'rxjs';
import { IPCAService } from './ipca.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ipca',
  templateUrl: './ipca.component.html',
  styleUrls: ['./ipca.component.css']
})
export class IpcaComponent implements OnInit {

  taxas: Ipca[];
  taxa_anual: number;
  RecebeTaxa: Observable<Ipca[]>;

  constructor(private ipcaService: IPCAService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipcaService.ipca().subscribe(items => this.taxas = items,
      (err) => console.error(err), () => this.calculaAnual());
  }
  calculaAnual() {
    let soma = 0;
    for (let i = 1; i <= 12; i++) {
      soma += parseFloat(this.taxas[this.taxas.length - i].valor);
    }
    this.taxa_anual = soma;
  }

}
