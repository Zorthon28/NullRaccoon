import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function CartItemImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-20 h-20 rounded overflow-hidden relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-20 h-20 object-contain rounded transform transition duration-300 ease-in-out
          ${loaded ? "opacity-100" : "opacity-0"}
          hover:scale-105 hover:shadow-md`}
        loading="lazy"
      />
    </div>
  );
}

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart(); // ✅ Aquí añadimos updateQuantity

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-5xl mx-auto animate-fadeIn">
      <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16">
          <img
            src="/images/empty-cart.png" // add an illustration to your /public/images
            alt="Empty cart"
            className="w-40 h-40 mb-6 opacity-80"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven’t added anything yet.
          </p>
          <Link to="/store">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-transform transform hover:scale-105">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <CartItemImage src={item.image} alt={item.name} />

                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-green-700 font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 hover:underline transition-all duration-200"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-between items-center bg-white p-6 rounded-lg shadow">
            <p className="text-right text-2xl font-bold text-green-800 mt-6">
              Total: ${total.toFixed(2)}
            </p>

            <button
              onClick={() => alert("Checkout process coming soon!")}
              disabled={cartItems.length === 0}
              className={`bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Checkout
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={clearCart}
              className="text-red-600 hover:underline"
              disabled={cartItems.length === 0}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
