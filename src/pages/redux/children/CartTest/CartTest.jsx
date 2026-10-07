import CommonButton from "@components/CommonButton/CommonButton.jsx";
// import cartStore from "@store/cartStore/cartStore.js";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  addItem,
  selectCartCount,
  selectCartTotal,
} from "@store/redux/useCart.js";

function CartTest() {
  const cart = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  // const addItem = cartStore((state) => state.addItem);
  // const removeItem = cartStore((state) => state.removeItem);
  // const incrementQuantity = cartStore((state) => state.incrementQuantity);
  // const decrementQuantity = cartStore((state) => state.decrementQuantity);
  // const clearCart = cartStore((state) => state.clearCart);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    dispatch(addItem(product));
    console.log("tEst", cart);
  };

  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">
        Cart Test Page
      </h1>
      <p className="mb-6 text-sm text-zinc-300">
        This is a test page for the shopping cart.
      </p>

      <div className="mb-6 flex flex-wrap gap-3">
        <CommonButton
          onClick={() =>
            addItemToCart({
              id: 1,
              name: "Keyboard",
              price: 100,
            })
          }
          type="button"
          variant="primary"
        >
          Add Product 1
        </CommonButton>
        <CommonButton
          onClick={() =>
            addItemToCart({
              id: 2,
              name: "Mouse",
              price: 200,
            })
          }
          type="button"
          variant="secondary"
        >
          Add Product 2
        </CommonButton>
        {/*<CommonButton*/}
        {/*  onClick={clearCart}*/}
        {/*  type="button"*/}
        {/*  variant="outline"*/}
        {/*  className="border-white/10 bg-transparent text-zinc-200 hover:bg-white/5"*/}
        {/*>*/}
        {/*  Clear Cart*/}
        {/*</CommonButton>*/}
      </div>

      <h2 className="mb-4 text-xl font-semibold text-white">Cart Items:</h2>

      <div className="space-y-3">
        length: {cart.length}
        Boolean: {Boolean(cart.length)}
        {cart?.length ? (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-white">{item.name}</span>
                  <span className="text-sm text-zinc-400">
                    Quantity: {item.quantity}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/*<button*/}
                  {/*  className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-lg font-semibold text-zinc-200 transition hover:bg-white/10"*/}
                  {/*  onClick={() => incrementQuantity(item.id)}*/}
                  {/*  type="button"*/}
                  {/*>*/}
                  {/*  +*/}
                  {/*</button>*/}
                  {/*<button*/}
                  {/*  className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-lg font-semibold text-zinc-200 transition hover:bg-white/10"*/}
                  {/*  onClick={() => decrementQuantity(item.id)}*/}
                  {/*  type="button"*/}
                  {/*>*/}
                  {/*  -*/}
                  {/*</button>*/}
                  {/*<CommonButton*/}
                  {/*  onClick={() => removeItem(item.id)}*/}
                  {/*  type="button"*/}
                  {/*  variant="danger"*/}
                  {/*  className="px-3 py-1.5"*/}
                  {/*>*/}
                  {/*  Remove*/}
                  {/*</CommonButton>*/}
                </div>
              </div>
            ))}
            <div className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-3 text-lg font-semibold text-violet-100">
              Total: {cartTotal}
              Count: {cartCount}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 bg-zinc-950/20 p-6 text-center text-zinc-400">
            пусто
          </div>
        )}
      </div>
    </div>
  );
}

export default CartTest;
