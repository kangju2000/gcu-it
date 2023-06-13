export type IndicatorFormType = {
  asset: number;
  ticker: string;
  start_date: string;
  buy_rsi_value: number | string | '';
  buy_mfi_value: number | string | '';
  buy_macd_value: number | string | '';
  sell_rsi_value: number | string | '';
  sell_mfi_value: number | string | '';
  sell_macd_value: number | string | '';
};

export type ExpectedRateType = {
  profit: number;
  rate: number;
};

export type SimulationRequestType = {
  ticker: string;
  stock_share: number;
  buy_date: string;
};

export type SimulationResultType = {
  now_price: number;
  past_price: number;
  profit: number;
  rate: number;
};
