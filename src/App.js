import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import FloatingButtons from "./components/FloatingButtons";
import StoreHome from "./pages/StoreHome";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import translations from "./utils/translations";
import StoreLayout from "./layouts/StoreLayout";
import StoreLanding from "./pages/StoreLanding";

import "./index.css";

function App() {
  const [lang, setLang] = useState("en");
  const [showQuoteModal, setShowQuoteModal] = useState(false);

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

  return (
    <Router>
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
            <Route path="product/:productId" element={<Product lang={lang} t={t}/>} />
            <Route path="cart" element={<Cart />} />
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

        <FloatingButtons
          lang={lang}
          setLang={setLang}
          showQuoteModal={showQuoteModal}
          setShowQuoteModal={setShowQuoteModal}
        />
      </div>
    </Router>
  );
}

export default App;
