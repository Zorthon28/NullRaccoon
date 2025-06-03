// src/components/Product.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Product({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100">
      <Link to={`/store/product/${product.id}`}>
        <img
          src={product.images[0]}
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
        <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-700 font-extrabold text-xl">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() =>
              addToCart({
                ...product,
                quantity: 1,
                image: product.images?.[0], // Add this line
              })
            }
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition transform hover:scale-105 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
