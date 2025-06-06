import React, { useState } from "react";
import { motion } from "framer-motion";
import products from "../utils/products";
import ProductCardHome from "../components/ProductCardHome";

export default function StoreHome({ lang, t }) {
  const store = t.store;

  // Filter states
  const [filterName, setFilterName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("popularity"); // Default sorting

  // Get translated product name
  const getTranslatedName = (product) =>
    (t.products?.[product.nameKey] || product.nameKey).toLowerCase();

  // Filter products based on name and price
  const filteredProducts = products
    .filter((product) => {
      const translatedName = getTranslatedName(product);
      const matchesName = translatedName.includes(filterName.toLowerCase());
      const matchesPrice = maxPrice === "" || product.price <= Number(maxPrice);
      return matchesName && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return getTranslatedName(a).localeCompare(getTranslatedName(b));
        case "name-desc":
          return getTranslatedName(b).localeCompare(getTranslatedName(a));
        default:
          return 0; // "popularity" does nothing
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.h1
        className="text-3xl font-extrabold text-green-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {store.welcomeTitle}
      </motion.h1>

      {/* FILTER UI */}
      <div className="mb-6 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Optional: Other filter inputs can go here */}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-46 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 sm:ml-auto"
        >
          <option value="popularity">
            {t.sortByPopularity || "Sort by popularity"}
          </option>
          <option value="price-asc">
            {t.sortByPriceAsc || "Price: Low to High"}
          </option>
          <option value="price-desc">
            {t.sortByPriceDesc || "Price: High to Low"}
          </option>
          <option value="name-asc">{t.sortByNameAsc || "Name: A to Z"}</option>
          <option value="name-desc">
            {t.sortByNameDesc || "Name: Z to A"}
          </option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <motion.div
        className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <ProductCardHome product={product} lang={lang} t={t} />
          </motion.div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            {t.noProductsFound || "No products found."}
          </p>
        )}
      </motion.div>
    </div>
  );
}
