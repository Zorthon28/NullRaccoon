import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import translations from '../utils/translations';

export const getTranslatedText = (lang, key, category = "products") => {
  if (translations[lang] && translations[lang][category]) {
    return translations[lang][category][key] || key;
  }
  return key;
};

export default function ProductCardHome({ product, lang}) {
  const { addToCart } = useCart();

  // Use the translation function here
  const translatedName = getTranslatedText(lang, product.nameKey);
  const translatedDescription = getTranslatedText(lang, product.descriptionKey);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100">
      <Link to={`/store/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={translatedName}
          className="h-48 w-full object-contain rounded-t-lg bg-gray-100 p-4"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/store/product/${product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 hover:text-green-700 transition">
            {translatedName}
          </h2>
        </Link>
        <p className="text-gray-600 mt-2 flex-grow">{translatedDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-700 font-extrabold text-xl">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() =>
              addToCart({
                ...product,
                quantity: 1,
                image: product.images?.[0],
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
