export type indicatorFormType = {
  asset: number;
  ticker: string;
  start_date: string;
  buy_rsi_value: number | '';
  buy_mfi_value: number | '';
  buy_macd_value: number | '';
  sell_rsi_value: number | '';
  sell_mfi_value: number | '';
  sell_macd_value: number | '';
};

export type expectedRateType = {
  profit: number;
  rate: number;
};

export type stockType = {
  id: number;
  name: string;
  ticker: string;
};
