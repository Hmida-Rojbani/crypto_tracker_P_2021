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

  constructor(private coinProvider: CoingeckoService) { }

  async ngOnInit() {
    this.bitcoin$ = await this.getDataFromApi();
    console.log('bitcoin price :', this.bitcoin$.current_price);
  }

  async getDataFromApi(){
    const tab = await this.coinProvider.getCoingekoData().toPromise();
    return tab[0];
  }

}
