import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../utils/products";

export default function StoreHome() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
        Welcome to MedTech Premier Store
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100"
          >
            <Link to={`/store/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-contain rounded-t-lg bg-gray-100 p-4"
              />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <Link to={`/store/product/${product.id}`}>
                <h2 className="text-lg font-semibold text-gray-800 hover:text-green-700 transition">
                  {product.name}
                </h2>
              </Link>
              <p className="text-gray-600 mt-2 flex-grow">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-700 font-extrabold text-xl">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
