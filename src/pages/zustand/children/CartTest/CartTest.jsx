import cartStore from "@store/cartStore/cartStore.js";

function CartTest() {
  const cart = cartStore((state) => state.cart);
  const addItem = cartStore((state) => state.addItem);
  const removeItem = cartStore((state) => state.removeItem);
  const incrementQuantity = cartStore((state) => state.incrementQuantity);
  const decrementQuantity = cartStore((state) => state.decrementQuantity);
  const clearCart = cartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-slate-800">Cart Test Page</h1>
      <p className="mb-6 text-sm text-slate-600">
        This is a test page for the shopping cart.
      </p>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          onClick={() =>
            addItem({
              id: 1,
              name: "Keyboard",
              price: 100,
            })
          }
        >
          Add Product 1
        </button>
        <button
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
          onClick={() =>
            addItem({
              id: 2,
              name: "Mouse",
              price: 200,
            })
          }
        >
          Add Product 2
        </button>
        <button
          className="rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
      </div>

      <h2 className="mb-4 text-xl font-semibold text-slate-800">Cart Items:</h2>

      <div className="space-y-3">
        {cart?.length ? (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-slate-800">
                    {item.name}
                  </span>
                  <span className="text-sm text-slate-600">
                    Quantity: {item.quantity}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="h-8 w-8 rounded-md bg-slate-200 text-lg font-semibold text-slate-700 transition hover:bg-slate-300"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="h-8 w-8 rounded-md bg-slate-200 text-lg font-semibold text-slate-700 transition hover:bg-slate-300"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-5 rounded-xl bg-slate-100 p-3 text-lg font-semibold text-slate-800">
              Total: {total}
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
            пусто
          </div>
        )}
      </div>
    </div>
  );
}

export default CartTest;
