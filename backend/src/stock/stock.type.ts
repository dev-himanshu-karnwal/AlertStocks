export interface IStockQuoteResponse {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: [
    {
      T: string;
      v: number;
      vw: number;
      o: number;
      c: number;
      h: number;
      l: number;
      t: number;
      n: number;
    },
  ];
  status: string;
  request_id: string;
  count: number;
}
