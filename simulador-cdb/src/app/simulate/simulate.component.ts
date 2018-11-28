import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {

  insere: number;
  constructor() { }

  ngOnInit() {
  }

  modelChanged(input: number) {
    this.insere = input;
  }
}
