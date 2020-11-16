import { atom } from 'jotai';
import create from 'zustand';

const useDaysStore = create((set) => ({
  days: 30,
  setDays: (days: number) => set({ days }),
}));

const daysAtom = atom(30);

export { daysAtom, useDaysStore };
