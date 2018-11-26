// https://economia.awesomeapi.com.br/json/list/USD-BRL?start_date=20181101&end_date=20181130

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DolarService {
  constructor(private http: HttpClient) {}

    link = 'https://economia.awesomeapi.com.br/json/list/USD-BRL?';
    localhost = 'http://localhost:3000/selic';
    dolar(): Observable<any> {
        const hoje = new Date();
        const data = (hoje.getFullYear() + '' + ((hoje.getMonth() + 1)) + '' + hoje.getDate());
        const ano_passado = ((hoje.getFullYear() - 1) + '' + ((hoje.getMonth() + 1)) + '' + hoje.getDate());
        const string_comp = `start_date=${ano_passado}&end_date=${data}`;
        return this.http.get(this.link + string_comp);
    }
}
