import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  @Input() Elemento: string;
  @Input() Taxa: number;
  @Input() tax: boolean = true; // para identificar se o valor é uma taxa ou moeda
  @Input() currency: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
