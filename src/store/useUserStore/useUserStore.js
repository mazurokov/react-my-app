import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,

  setUser: (user) =>
    set({
      user,
    }),

  updateUserName: (name) =>
    set((state) => ({
      user: {
        ...state.user,
        name,
      },
    })),

  logout: () =>
    set({
      user: null,
    }),
}));

export default useUserStore;
