import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/store" className="text-2xl font-bold text-green-700">
          MedTech Premier
        </Link>

        <nav className="space-x-6 hidden md:flex text-gray-700 font-semibold">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/store" className="hover:text-green-600 transition">Store</Link>
          <Link to="/store/cart" className="hover:text-green-600 transition relative">
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          {/* You can add hamburger menu here for mobile */}
        </div>
      </div>
    </header>
  );
}
