import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import FloatingButtons from "./components/FloatingButtons";
import translations from "./utils/translations"; // <--- UPDATED IMPORT PATH

import "./index.css";

function App() {
  const [lang, setLang] = useState("en");
  const [showQuoteModal, setShowQuoteModal] = useState(false); // Global modal state

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
    console.log(
      `App.js: Initial language set to: ${
        userLang.startsWith("es") ? "es" : "en"
      }`
    );
  }, []); // Runs once on mount

  const t = translations[lang]; // Derive translations object here

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                lang={lang}
                t={t} // Pass translations object
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
                t={t} // Make sure this is passed!
                showQuoteModal={showQuoteModal}
                setShowQuoteModal={setShowQuoteModal}
              />
            }
          />

          <Route
            path="*"
            element={
              <Hero
                lang={lang}
                t={t} // Pass translations object
                showQuoteModal={showQuoteModal}
                setShowQuoteModal={setShowQuoteModal}
              />
            }
          />
        </Routes>

        {/* FloatingButtons component rendered globally */}
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
