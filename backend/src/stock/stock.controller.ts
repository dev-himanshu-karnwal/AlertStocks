import { Controller, Get, Query } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get('quote')
  async quote(@Query('symbol') symbol: string) {
    if (!symbol) {
      return { error: 'Symbol parameter is required' };
    }
    return await this.stockService.getStockQuote(symbol);
  }

  @Get('day-chart')
  async dayChart(@Query('symbol') symbol: string) {
    if (!symbol) {
      return { error: 'Symbol parameter is required' };
    }
    return await this.stockService.getStockDayChart(symbol);
  }
}
