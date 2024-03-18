import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../services/stock/stock.service';
import { IntradayData } from '../models/intraday-data';

@Component({
  selector: 'app-intraday-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intraday-details.component.html',
  styleUrl: './intraday-details.component.sass'
})
export class IntradayDetailsComponent {
  stockService: StockService = inject(StockService);
  router: ActivatedRoute = inject(ActivatedRoute);
  intradayDataList: IntradayData[] | undefined;
  symbol: string = "";

  constructor() {
    this.symbol = this.router.snapshot.params['symbol'];
    this.intradayDataList = this.stockService.getIntradayDataListBySymbol(this.symbol);
  }
}
