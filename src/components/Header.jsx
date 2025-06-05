import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ lang, t}) {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/store" className="text-2xl font-extrabold text-green-700 tracking-wide">
          {t.brand}
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600 transition">{t.home}</Link>
          <Link to="/store" className="hover:text-green-600 transition">{t.store}</Link>
          <Link to="/store/cart" className="hover:text-green-600 transition relative">
            {t.cart}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/about" className="hover:text-green-600 transition">{t.about}</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/80 backdrop-blur-md border-t shadow-lg px-6 py-6 space-y-4 text-gray-700 font-semibold"
          >
            {[
              { to: "/", label: t.home },
              { to: "/store", label: t.store },
              { to: "/store/cart", label: t.cart },
              { to: "/about", label: t.about },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
                className="text-lg"
              >
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-green-600 transition"
                >
                  {item.label}
                  {item.label === t.cart && totalItems > 0 && (
                    <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
