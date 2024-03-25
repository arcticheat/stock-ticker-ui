import { Injectable, inject } from '@angular/core';
import { EndOfDayData } from '../../models/end-of-day-data';
import { IntradayData } from '../../models/intraday-data';
import { HttpClient } from '@angular/common/http';
import { API_URL, END_OF_DAY_PATH, INTRADAY_PATH } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  http: HttpClient = inject(HttpClient);

  constructor() { }

  async getEndOfDayData(symbols: string[]): Promise<EndOfDayData[]> {
    const response = await fetch(API_URL + END_OF_DAY_PATH + "?"+ new  URLSearchParams([
      ["symbols", symbols.join(',')]
    ]));
    const endOfDayData: EndOfDayData[] = await response.json();
    return endOfDayData;
  }

  async getIntradayData(symbols: string[]): Promise<IntradayData[]> {
    const response = await fetch(API_URL + INTRADAY_PATH + new  URLSearchParams([
      ["symbols", symbols.join(',')]
    ]));
    const intradayData: IntradayData[] = await response.json();
    return intradayData;
  }
}
