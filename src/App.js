import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ExternalLink, X, CheckCircle, Star, Plus } from "lucide-react";
import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import FloatingButtons from "./components/FloatingButtons";
import StoreHome from "./pages/StoreHome";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import translations from "./utils/translations";
import StoreLayout from "./layouts/StoreLayout";
import StoreLanding from "./pages/StoreLanding";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

import "./index.css";

function AppContent() {
  const [lang, setLang] = useState("es");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
    console.log(
      `App.js: Initial language set to: ${
        userLang.startsWith("es") ? "es" : "en"
      }`
    );
  }, []);

  const t = translations[lang];

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("welcomeModalShown");
    if (!hasSeenModal && location.pathname === "/") {
      setShowWelcomeModal(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.title =
      lang === "es"
        ? "NullRaccoon | Sitios Web Profesionales"
        : "NullRaccoon | Professional Websites";
  }, [lang]);

  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                lang={lang}
                t={t}
                showQuoteModal={showQuoteModal}
                setShowQuoteModal={setShowQuoteModal}
              />
            }
          />

          <Route
            path="/case-study/:caseId"
            element={
              <CaseStudy
                lang={lang}
                t={t}
                showQuoteModal={showQuoteModal}
                setShowQuoteModal={setShowQuoteModal}
              />
            }
          />

          {/* 🛍️ Store Routes */}

          {/* Store routes wrapped with StoreLayout */}
          <Route path="/store" element={<StoreLayout lang={lang} t={t} />}>
            <Route index element={<StoreLanding lang={lang} t={t} />} />
            {/* 🏠 Landing */}
            <Route
              path="products"
              element={<StoreHome lang={lang} t={t} />}
            />{" "}
            {/* 🛍️ Product list */}
            <Route
              path="product/:productId"
              element={<Product lang={lang} t={t} />}
            />
            <Route path="cart" element={<Cart lang={lang} t={t} />} />
          </Route>

          <Route
            path="*"
            element={
              <Hero
                lang={lang}
                t={t}
                showQuoteModal={showQuoteModal}
                setShowQuoteModal={setShowQuoteModal}
              />
            }
          />
        </Routes>

        {showWelcomeModal && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setShowWelcomeModal(false)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden relative border border-gray-200"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowWelcomeModal(false);
                  sessionStorage.setItem("welcomeModalShown", "true");
                }}
                className="absolute top-2 text-gray-400 hover:text-gray-600 transition duration-200 p-2 hover:bg-gray-100 rounded-full bg-white shadow-lg z-10"
                style={{ left: "94%", top: "3%" }}
              >
                <X size={20} />
              </button>
              {/* Content Section */}
              <div className="p-6 sm:p-8">
                <motion.div
                  className="text-center mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <img
                      src="/images/nulldental-logo.png"
                      alt="NullDental Logo"
                      className="h-12 w-auto"
                    />
                    <h2 className="text-2xl font-bold text-blue-600">
                      NullDental
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    {t.nullDentalSubtitle}
                  </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-1 sm:gap-2 mb-6 sm:mb-8 justify-items-center max-w-lg mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {t.nullDentalBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 min-w-[200px] flex-1 max-w-[250px]"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      {benefit.startsWith("+") ? (
                        <Plus
                          size={20}
                          className="text-blue-600 mx-auto mb-3"
                        />
                      ) : (
                        <CheckCircle
                          size={20}
                          className="text-green-600 mx-auto mb-3"
                        />
                      )}
                      <span className="text-sm font-semibold text-gray-800 text-center block">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-1 text-center">
                      {t.stayOnPortfolioLabel}
                    </p>
                    <motion.button
                      onClick={() => {
                        setShowWelcomeModal(false);
                        sessionStorage.setItem("welcomeModalShown", "true");
                      }}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-6 rounded-xl font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base border border-gray-300"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Home size={20} className="mr-3" />
                      {t.stayOnPortfolio}
                    </motion.button>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-1 text-center">
                      {t.goToNullDentalLabel}
                    </p>
                    <motion.button
                      onClick={() => {
                        setShowWelcomeModal(false);
                        sessionStorage.setItem("welcomeModalShown", "true");
                        window.location.href = "https://nulldental.com/";
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} className="mr-3" />
                      {t.nullDentalCTA}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}

        <Footer lang={lang} t={t} />

        <FloatingButtons
          lang={lang}
          setLang={setLang}
          showQuoteModal={showQuoteModal}
          setShowQuoteModal={setShowQuoteModal}
        />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
