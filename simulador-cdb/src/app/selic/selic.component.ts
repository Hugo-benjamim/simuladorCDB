import { Component, OnInit } from '@angular/core';
import { SelicService } from './selic.service';
import { ActivatedRoute } from '@angular/router';
import { Selic } from './selic.model';

@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.css']
})
export class SelicComponent implements OnInit {

  taxas: Selic[] ;
  taxa: number;
  constructor(private selicService: SelicService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.selicService.selic().subscribe(items => this.taxas = items,
      (err) => console.error(err), () => this.calculaUltimo());
  }
  calculaUltimo() {
    this.taxa = parseFloat(this.taxas[this.taxas.length - 1].valor);
  }


}
