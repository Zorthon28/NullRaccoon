import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider, Helmet } from "react-helmet-async";
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


  const pageTitle =
    lang === "es"
      ? "NullRaccoon | Sitios Web Profesionales"
      : "NullRaccoon | Professional Websites";

  const pageDescription =
    lang === "es"
      ? "Desarrollo de sitios web profesionales, tiendas en línea y soluciones digitales. Especialistas en React, SEO y diseño moderno."
      : "Professional website development, online stores, and digital solutions. Specialists in React, SEO, and modern design.";

  const keywords =
    lang === "es"
      ? "desarrollo web, sitios web, tiendas en línea, React, SEO, diseño web, NullRaccoon"
      : "web development, websites, online stores, React, SEO, web design, NullRaccoon";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="NullRaccoon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/logo192.png" />
        <meta property="og:url" content="https://zorthon28.github.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/logo192.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NullRaccoon",
            url: "https://zorthon28.github.io",
            logo: "https://zorthon28.github.io/logo192.png",
            description: pageDescription,
            founder: {
              "@type": "Person",
              name: "Gustavo Tello",
            },
            sameAs: ["https://github.com/zorthon28"],
          })}
        </script>
      </Helmet>
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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
