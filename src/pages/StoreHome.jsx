// src/pages/StoreHome.jsx

import React from "react";
import { motion } from "framer-motion";
import products from "../utils/products";
import ProductCardHome from "../components/ProductCardHome";

export default function StoreHome({ lang, t }) {
  const store = t.store;

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

      <motion.div
        className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {products.map((product, index) => (
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
      </motion.div>
    </div>
  );
}
