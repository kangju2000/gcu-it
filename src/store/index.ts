import { create } from 'zustand';

export const useDarkmodetore = create<{
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
}>((set) => ({
  darkmode: false,
  setDarkmode: (darkmode: boolean) => set({ darkmode }),
}));

export const useStockNameStore = create<{
  stockName: string;
  setStockName: (stockName: string) => void;
}>((set) => ({
  stockName: '',
  setStockName: (stockName: string) => set({ stockName }),
}));
