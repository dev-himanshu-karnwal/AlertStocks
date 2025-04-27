import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { type IStockQuoteResponse } from './stock.type';

@Injectable()
export class StockService {
  private readonly polygonBaseUrl = 'https://api.polygon.io/v2/aggs';

  // Fetch stock quote from Polygon
  async getStockQuote(symbol: string) {
    try {
      const response = await axios.get<IStockQuoteResponse>(
        `${this.polygonBaseUrl}/ticker/${symbol}/prev`,
        {
          headers: {
            Authorization: `Bearer ${process.env.POLYGON_API_KEY}`,
          },
        },
      );

      // Assuming that the response data has a 'results' field containing the quote
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching stock quote from Polygon:', error);
      throw error;
    }
  }

  async getStockDayChart(symbol: string) {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/200/minute/2024-04-27/2024-04-27`,
        {
          headers: {
            Authorization: `Bearer ${this.polygonApiKey}`,
          },
        },
      );

      return response.data.results;
    } catch (error) {
      console.error('Error fetching stock quote:', error);
      console.log(error.message);
      throw error;
    }
  }
}
