// src/pages/StoreHome.jsx

import React from "react";
import products from "../utils/products";
import ProductCardHome from "../components/ProductCardHome"; // renamed import for clarity

export default function StoreHome() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
        Welcome to the NullRacoon Store
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCardHome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
