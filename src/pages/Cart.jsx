import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from "react";

function CartItemImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-24 h-24 rounded-lg overflow-hidden relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-contain transition-opacity duration-300 ease-in-out
          ${loaded ? "opacity-100" : "opacity-0"}
          hover:scale-105 transform hover:shadow-md`}
        loading="lazy"
      />
    </div>
  );
}

export default function Cart({ lang, t}) {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 max-w-5xl mx-auto animate-fadeIn">
      <h1 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
        {t.cartTitle}
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <img
            src="/images/empty-cart.png"
            alt="Empty cart"
            className="w-50 h-40 mb-6 opacity-80"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {t.cartEmptyTitle}
          </h2>
          <p className="text-gray-500 mb-6">
            {t.cartEmptySubtitle}
          </p>
          <Link to="/store">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition transform hover:scale-105">
              {t.cartBrowseButton}
            </button>
          </Link>
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all gap-6"
              >
                <CartItemImage src={item.image} alt={item.name} />

                <div className="flex-grow flex flex-col justify-center">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-green-700 font-semibold text-md">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        if (item.quantity - 1 < 1) {
                          removeFromCart(item.id);
                          toast.success(t("cartRemoved", { name: item.name }));
                        } else {
                          const newQty = item.quantity - 1;
                          updateQuantity(item.id, newQty);
                          toast.info(
                            t("cartQtyUpdated", {
                              qty: newQty,
                              name: item.name,
                            })
                          );
                        }
                      }}
                      className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 text-sm font-bold text-gray-700"
                    >
                      −
                    </button>

                    <span className="px-4 py-1 border border-gray-300 rounded text-center min-w-[30px]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => {
                        const newQty = item.quantity + 1;
                        updateQuantity(item.id, newQty);
                        toast.info(
                          `Quantity updated to ${newQty} for ${item.name}`
                        );
                      }}
                      className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 text-sm font-bold text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.success(`${item.name} removed from cart`);
                  }}
                  className="text-red-500 hover:text-red-700 text-sm hover:underline transition duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-12 bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-2xl font-extrabold text-green-800">
              Total: ${total.toFixed(2)}
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={clearCart}
                className="text-sm text-red-600 underline hover:text-red-800 transition"
              >
                {t.cartClear}
              </button>

              <button
                onClick={() => alert("Checkout process coming soon!")}
                disabled={cartItems.length === 0}
                className={`bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {t.cartCheckout}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
