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
   endOfDayDataList: EndOfDayData[] = [];
   stockService: StockService = inject(StockService);

   constructor() {
    this.endOfDayDataList = this.stockService.getEndOfDayDataList();
   }
}
