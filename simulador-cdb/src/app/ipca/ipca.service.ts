import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class IPCAService {
  constructor(private http: HttpClient) {}
    link = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.16121/dados?formato=json';
    formula = '1 + ia = (1 + ip)^n'; // ia anual; ip período
    localhost = 'http://localhost:3000/selic';
    ipca(): Observable<any> {
      return this.http.get(this.link);
    }
}
