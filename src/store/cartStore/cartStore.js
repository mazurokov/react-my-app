import { create } from "zustand";
import { persist } from "zustand/middleware";

const cartStore = create(
  persist(
    (set) => ({
      cart: [],

      addItem: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
 ...item, quantity: item.quantity + 1 
}
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, {
 ...product, quantity: 1 
}],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      incrementQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? {
 ...item, quantity: item.quantity + 1 
} : item,
          ),
        })),

      decrementQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? {
 ...item, quantity: item.quantity - 1 
} : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        cart: state.cart,
      }),
    },
  ),
);

export default cartStore;
