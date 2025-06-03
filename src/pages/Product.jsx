import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../utils/products";

export default function Product() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <p className="text-center text-red-600">Product not found.</p>
        <Link
          to="/store"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Back to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* ── Breadcrumb ─────────────────────────────────────────────────────────────── */}
      <nav className="max-w-6xl mx-auto px-4 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link to="/store" className="hover:underline">
          Store
        </Link>{" "}
        &gt; <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* ── Main Product Section ───────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 animate-fadeIn">
        {/* Left: Large Image */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              {product.name}
            </h1>
            <p className="text-gray-700 mt-4">{product.description}</p>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-2xl font-bold text-green-700">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* ── Related Products Section ───────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Related Products
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((p) => p.id !== product.id) // exclude current product
            .slice(0, 4) // show up to 4 related items
            .map((related) => (
              <div
                key={related.id}
                className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col shadow-sm hover:shadow-md transition"
              >
                <Link to={`/store/product/${related.id}`}>
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-32 object-contain rounded-md mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-medium text-gray-800 hover:text-green-700 transition">
                    {related.name}
                  </h3>
                </Link>
                <p className="text-green-600 font-bold mt-2">
                  ${related.price.toFixed(2)}
                </p>
                <Link
                  to={`/store/product/${related.id}`}
                  className="mt-auto inline-block text-sm text-blue-600 hover:underline"
                >
                  View
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
