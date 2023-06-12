import { create } from 'zustand';

export const useDarkmodetore = create<{
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
}>((set) => ({
  darkmode: false,
  setDarkmode: (darkmode: boolean) => set({ darkmode }),
}));
