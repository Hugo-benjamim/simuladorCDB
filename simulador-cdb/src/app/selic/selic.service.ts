import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selic } from './selic.model';

@Injectable()
export class SelicService {
  constructor(private http: HttpClient) {}
    link = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados?formato=json&dataInicial=01/01/2018&dataFinal=01/11/2018';
    formula = '1 + ia = (1 + ip)^n'; // ia anual; ip período
    localhost = 'http://localhost:3000/selic';
    selic(): Observable<any> {
      return this.http.get(this.link);
    }
}
/*Links uteis: https://docs.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/
https://www.c-sharpcorner.com/article/asp-net-web-api-and-sql-server/*/
