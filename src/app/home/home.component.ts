import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EndOfDayData } from '../models/end-of-day-data';
import { StockCardComponent } from '../stock-card/stock-card.component';
import { CommonModule } from '@angular/common';
import { StockService } from '../services/stock/stock.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, MatInputModule, CommonModule, StockCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
   stocks: string[] = ['NVDA', 'AAPL', 'MSFT', 'AMZN', 'GOOG', 'META', 'COF']
   endOfDayDataList: EndOfDayData[] = [];
   stockService: StockService = inject(StockService);

   constructor() {
    this.stockService.getEndOfDayData(this.stocks).then((endOfDayDataList: EndOfDayData[]) => {
      this.endOfDayDataList = endOfDayDataList
    });
   }
}
