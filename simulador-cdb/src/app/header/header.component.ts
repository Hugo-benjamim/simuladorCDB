import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [{link: '/cdb', name: ('CDB')},
  {link: '/selic', name: ('SELIC')},
  {link: '/dolar', name: ('Dólar')}
];


  constructor() { }

  ngOnInit() {
  }

}
