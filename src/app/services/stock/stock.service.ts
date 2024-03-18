import { Injectable } from '@angular/core';
import { EndOfDayData } from '../../models/end-of-day-data';
import { IntradayData } from '../../models/intraday-data';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  protected endOfDayDataList: EndOfDayData [] = [
  {
      open: 10,
      high: 30,
      low: 10,
      close: 20,
      volume: 0,
      adj_high: 0,
      adj_low: 0,
      adj_close: 0,
      adj_open: 0,
      adj_volume: 0,
      split_factor: 0,
      dividend: 0,
      symbol: 'ABC',
      exchange: '',
      date: new Date("2024-03-17")
    },
    {
      open: 30,
      high: 40,
      low: 10,
      close: 15,
      volume: 0,
      adj_high: 0,
      adj_low: 0,
      adj_close: 0,
      adj_open: 0,
      adj_volume: 0,
      split_factor: 0,
      dividend: 0,
      symbol: 'XYZ',
      exchange: '',
      date: new Date("2024-03-17")
    }
  ];

  protected intradayDataList: IntradayData [] = [
    {
      date: new Date("2024-03-17T00:00:00+0000"),
      symbol: "ABC",
      exchange: "IEXG",
      open: 317.75,
      high: 322.35,
      low: 317.21,
      close: 317.94,
      last: 318.91,
      volume: 41551000
    },
    {
      date: new Date("2024-03-17T02:00:00+0000"),
      symbol: "ABC",
      exchange: "IEXG",
      open: 337.75,
      high: 312.35,
      low: 387.21,
      close: 217.94,
      last: 318.91,
      volume: 41551000
    },
    {
      date: new Date("2024-03-17T00:00:00+0000"),
      symbol: "XYZ",
      exchange: "IEXG",
      open: 317.75,
      high: 322.35,
      low: 317.21,
      close: 317.94,
      last: 318.91,
      volume: 41551000
    },
        {
      date: new Date("2024-03-17T02:00:00+0000"),
      symbol: "XYZ",
      exchange: "IEXG",
      open: 317.75,
      high: 322.35,
      low: 317.21,
      close: 317.94,
      last: 318.91,
      volume: 41551000
    },

  ]
  constructor() { }

  getEndOfDayDataList(): EndOfDayData[] {
    return this.endOfDayDataList;
  }

  getEndOfDayDataBySymbol(symbol: string): EndOfDayData | undefined {
    return this.endOfDayDataList.find(endOfDayData => endOfDayData.symbol === symbol);
  }

  getIntradayDataListBySymbol(symbol: string): IntradayData[] | undefined {
    return this.intradayDataList.filter(intradayData => intradayData.symbol === symbol);
  }
}
