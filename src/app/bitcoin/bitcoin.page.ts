import { Component, OnInit } from '@angular/core';
import { Coingeko } from '../models/coingeko';
import { CoingeckoService } from '../services/coingecko.service';


@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {
  bitcoin$: Coingeko;
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  selectedFiat = 'USD';

  constructor(private coinProvider: CoingeckoService) {}

  async ngOnInit() {
    this.bitcoin$ = await this.getDataFromApi();
  }

  async changeFiat(){
    this.bitcoin$ = null;
    const d = await this.getDataFromApi();
    this.bitcoin$ = d;
  }

  async getDataFromApi() {
    const tab = await this.coinProvider.getCoingekoData(this.selectedFiat,'bitcoin').toPromise();
    return tab[0];
  }

  /*loopingData() {
    this.coinProvider.getCoingekoData(this.selectedFiat,'bitcoin').subscribe(
      data => {
        setInterval(()=>{
          if (this.bitcoin$ !== data[0]) {
            this.bitcoin$=data[0];
            console.log('bitcoin price :', this.bitcoin$.current_price);
          }

        },1000);
      });
  }*/
}
