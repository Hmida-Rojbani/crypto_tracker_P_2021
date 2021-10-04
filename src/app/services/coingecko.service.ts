import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coingeko } from '../models/coingeko';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  constructor(private http: HttpClient) { }

  getCoingekoData(fiat: string, crypto: string){
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=';
    return this.http.get<Coingeko[]>(URL+fiat+'&ids='+crypto);
  }
}
