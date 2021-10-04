import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coingeko } from '../models/coingeko';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  constructor(private http: HttpClient) { }

  getCoingekoData(){
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin';
    return this.http.get<Coingeko[]>(URL);
  }
}
