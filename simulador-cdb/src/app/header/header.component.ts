import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [
  {link: '/selic', name: ('SELIC')},
  {link: '/dolar', name: ('DOLAR')},
  {link: '/ipca', name: ('IPCA')}
];


  constructor() { }

  ngOnInit() {
  }

}
