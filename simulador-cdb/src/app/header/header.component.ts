import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [{link: '/', name: ('CDB')},
  {link: '/', name: ('SELIC')},
  {link: '/', name: ('Dólar')}
];


  constructor() { }

  ngOnInit() {
  }

}
