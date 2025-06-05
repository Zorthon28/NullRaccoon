// src/components/Product.jsx

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../utils/products";
import translations from '../utils/translations';

export const getTranslatedText = (lang, key, category = "products") => {
  if (translations[lang] && translations[lang][category]) {
    return translations[lang][category][key] || key;
  }
  return key;
};

export default function Product({ lang }) { // Only need 'lang' prop
  const { productId } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  // Create a localized 't' function for convenience within this component
  // This 't' function now correctly calls getTranslatedText with the current 'lang'
  const t = (key, category = "common") => getTranslatedText(lang, key, category);

  useEffect(() => {
    if (!productId || isNaN(productId)) {
      setProduct(null);
      setSelectedImage("");
      return;
    }
    const found = products.find((p) => p.id === parseInt(productId));
    setProduct(found);
    setSelectedImage(found?.images?.[0] || "");
  }, [productId, products]); // Add products to dependency array

  // Get translated name and description for the found product
  // These will be used for rendering directly
  const translatedName = product ? getTranslatedText(lang, product.nameKey, 'products') : '';
  const translatedDescription = product ? getTranslatedText(lang, product.descriptionKey, 'products') : '';


  if (!product) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        {/* Make sure 'productNotFound' and 'backToStore' exist in your 'common' translations */}
        <p className="text-center text-red-600">{t('productNotFound')}</p>
        <Link
          to="/store"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          {t('backToStore')}
        </Link>
      </div>
    );
  }

  // Use the translated name and description here, not directly from 'product'
  // The 'price' and 'images' are numeric/array, so they don't need translation.
  const { price, images } = product; // Destructure only non-translatable properties

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">
          {t('home', 'common')} {/* Access specific keys */}
        </Link>{" "}
        &gt;{" "}
        <Link to="/store" className="hover:underline">
          {t('store', 'common')} {/* Access specific keys. Ensure 'store' itself is a string if used like this */}
          {/* If 'store' in translations.js is an object, you might need t('store.someKey') or to define a specific 'storeLinkText' */}
        </Link>{" "}
        &gt; <span className="text-gray-700">{translatedName}</span>
      </nav>

      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 animate-fadeIn">
        {/* Image Section */}
        <div className="bg-white rounded-xl shadow-md p-4">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt={translatedName} // Use translated name for alt text
              className="w-full h-[400px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
              <span className="text-gray-400">{t('noImageAvailable')}</span>
            </div>
          )}
          <div className="flex space-x-2 mt-4 justify-center">
            {images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${translatedName} ${index + 1}`} // Use translated name
                className={`h-20 w-20 object-contain rounded cursor-pointer border ${
                  img === selectedImage ? "border-green-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{translatedName}</h1> {/* Use translated name */}
            <p className="text-gray-700 mt-4">{translatedDescription}</p> {/* Use translated description */}
            <div className="flex items-center space-x-6">
              <span className="text-2xl font-bold text-green-700">
                ${price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart({
                  ...product,
                  name: translatedName, // Store translated name in cart
                  description: translatedDescription, // Store translated description in cart
                  quantity: 1
                })}
                className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                aria-label={`${t('AddToCart')} ${translatedName}`} // Use translated button text and product name
              >
                {t('AddToCart')} {/* Use translated button text */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t('featuredProductsTitle', 'store')} {/* Ensure this key exists in common or store */}
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((related) => (
              <div
                key={related.id}
                className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col shadow-sm hover:shadow-md transition"
              >
                <Link to={`/store/product/${related.id}`}>
                  <img
                    src={related.images[0]}
                    alt={getTranslatedText(lang, related.nameKey, 'products')} // Use translated related product name
                    className="w-full h-32 object-contain rounded-md mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-medium text-gray-800 hover:text-green-700 transition">
                    {getTranslatedText(lang, related.nameKey, 'products')} {/* Use translated related product name */}
                  </h3>
                </Link>
                <p className="text-green-600 font-bold mt-2">
                  ${related.price.toFixed(2)}
                </p>
                <Link
                  to={`/store/product/${related.id}`}
                  className="mt-auto inline-block text-sm text-blue-600 hover:underline"
                >
                  {t('viewAllProducts', 'store')} {/* Ensure this key exists in common or store */}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}