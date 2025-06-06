import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import translations from "../utils/translations";
import { fetchExchangeRate, formatCurrency } from "../utils/currency";

export const getTranslatedText = (lang, key, category = "products") => {
  if (translations[lang] && translations[lang][category]) {
    return translations[lang][category][key] || key;
  }
  return key;
};

export default function ProductCardHome({ product, lang }) {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const buttonWidth = "auto";
  const buttonRef = useRef(null);
  const [convertedPrice, setConvertedPrice] = useState(product.price);

  const translatedName = getTranslatedText(lang, product.nameKey, "products");
  const translatedDescription = getTranslatedText(
    lang,
    product.descriptionKey,
    "products"
  );
  const t = (key, category = "common") =>
    getTranslatedText(lang, key, category);

  const cartItem = cartItems.find((item) => item.id === product.id);

  useEffect(() => {
    if (justAdded) {
      const timer = setTimeout(() => setJustAdded(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [justAdded]);

  useEffect(() => {
    const convertPrice = async () => {
      if (lang === "es") {
        const rate = await fetchExchangeRate("USD", "MXN");
        if (rate) {
          setConvertedPrice(product.price * rate);
        }
      } else {
        setConvertedPrice(product.price);
      }
    };

    convertPrice();
  }, [lang, product.price]);

  const handleAddToCart = () => {
    if (!cartItem) {
      addToCart({
        ...product,
        name: translatedName,
        quantity: 1,
        image: product.images?.[0],
        price: Number(product.price),
      });
      setJustAdded(true);
    } else if (!showQuantity) {
      setShowQuantity(true);
    }
  };

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) {
      removeFromCart(product.id);
      setShowQuantity(false);
    } else {
      updateQuantity(product.id, newQty);
    }
  };

  const shouldShowQuantitySelector = cartItem && showQuantity && !justAdded;

  return (
    <div className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100">
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

        <div className="mt-4">
          <span className="text-green-700 font-extrabold text-xl">
            {formatCurrency(
              lang,
              convertedPrice,
              lang === "es" ? "MXN" : "USD"
            )}
          </span>

          {!shouldShowQuantitySelector ? (
            <div className="relative mt-2" style={{ width: buttonWidth }}>
              <button
                ref={buttonRef}
                onClick={handleAddToCart}
                disabled={justAdded}
                className={`
          bg-green-600 text-white px-4 py-1 rounded
          transition-all duration-300 transform
          h-8 flex items-center justify-center
          ${
            justAdded
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100 scale-100 hover:scale-105 active:scale-95 pointer-events-auto"
          }
        `}
              >
                {t("addToCart")}
              </button>

              <div
                className={`
          bg-green-700 text-white px-4 py-1 rounded
          absolute inset-0
          flex items-center justify-center
          transition-all duration-300 transform
          h-8
          ${
            justAdded
              ? "opacity-100 scale-100 animate-pulse-once pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
              >
                {t("addedToCart")}
              </div>
            </div>
          ) : (
            <div
              className="flex items-center space-x-2 bg-gray-100 text-gray-800 rounded-full px-3 py-1 shadow-sm mt-2"
              style={{ maxWidth: "100px" }}
            >
              <button
                onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                className="text-lg font-bold hover:text-green-600"
              >
                −
              </button>
              <span className="font-semibold">{cartItem.quantity}</span>
              <button
                onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                className="text-lg font-bold hover:text-green-600"
              >
                +
              </button>

              <button
                onClick={() => setShowQuantity(false)}
                className="ml-2 text-gray-400 hover:text-gray-600"
                aria-label="Close quantity selector"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
