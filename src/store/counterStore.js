import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  incrementBy: (amount = 0) =>
    set((state) => ({
      count: state.count + amount,
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  decrementBy: (amount = 0) =>
    set((state) => ({
      count: state.count - amount,
    })),

  reset: () =>
    set({
      count: 0,
    }),
}));

export default useCounterStore;