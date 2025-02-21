// timerAtoms.ts
import { atom } from "jotai";

export const workDurationAtom = atom<number>(25 * 60); // 25 minutes
export const shortBreakDurationAtom = atom<number>(5 * 60); // 5 minutes
export const longBreakDurationAtom = atom<number>(15 * 60); // 15 minutes

// Base atom for remaining time
const baseRemainingTimeAtom = atom<number>(25 * 60);

// Derived atom with read and write
export const remainingTimeAtom = atom(
  (get) => get(baseRemainingTimeAtom),
  (_get, set, newValue: number) => {
    set(baseRemainingTimeAtom, newValue);
  }
);

export const isTimerRunningAtom = atom<boolean>(false);
export const sessionTypeAtom = atom<"work" | "shortBreak" | "longBreak">(
  "work"
);
export const completedSessionsAtom = atom<number>(0);
