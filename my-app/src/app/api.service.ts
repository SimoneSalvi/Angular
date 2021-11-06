import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Imoedas {
  USD: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  },
  BTC: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  },
  EUR: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  },
  DOGE: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  ARS: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  AUD: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  CAD: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  CHF: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  CNY: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  ETH: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  GBP: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  JPY: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  buscarMoedas() {
    return this.http.get<Imoedas>('https://economia.awesomeapi.com.br/json/all')
  }


}

