import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EndOfDayData } from '../models/end-of-day-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.sass'
})
export class StockCardComponent {
  @Input() endOfDayData!:EndOfDayData;
}
