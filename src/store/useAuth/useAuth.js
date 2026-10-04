import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      user: null,

      login: (user) =>
        set({
          user,
        }),

      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);

export default useAuth;
