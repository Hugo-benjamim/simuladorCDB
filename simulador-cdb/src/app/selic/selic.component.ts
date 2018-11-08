import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.css']
})
export class SelicComponent implements OnInit {

  taxa = 6.50;
  constructor() { }

  ngOnInit() {
  }

}
