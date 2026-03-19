import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import FloatingButtons from "./components/FloatingButtons";
import StoreHome from "./pages/StoreHome";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Services from "./pages/Services";
import translations from "./utils/translations";
import StoreLayout from "./layouts/StoreLayout";
import StoreLanding from "./pages/StoreLanding";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

import "./index.css";

function AppContent() {
  const [lang, setLang] = useState("es");
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
    console.log(
      `App.js: Initial language set to: ${
        userLang.startsWith("es") ? "es" : "en"
      }`,
    );
  }, []);

  const t = translations[lang];

  const pageTitle =
    lang === "es"
      ? "Desarrollador Web Profesional | Sitios Web Personalizados | Soluciones Web Tijuana"
      : "Professional Web Developer | Custom Websites & Web Solutions | NullRaccoon";

  const pageDescription =
    lang === "es"
      ? "Desarrollador web certificado especializado en sitios web personalizados, tiendas en línea y soluciones digitales. Experto en React, diseño responsivo y SEO. ✓ 2+ años de experiencia. ✓ Apoyo bilingüe. Obtén tu sitio web profesional hoy."
      : "Certified web developer specializing in custom websites, e-commerce solutions & digital services. React expert, responsive design, SEO-optimized. ✓ 2+ years experience. ✓ Bilingual support. Get your professional website today.";

  const keywords =
    lang === "es"
      ? "desarrollador web, desarrollo web, programador web, sitios web personalizados, soluciones web, tienda online, React developer, diseño web responsivo, web solutions colombia, desarrollo sitios web mexico"
      : "web developer, web development, professional websites, web solutions, custom website development, react developer, responsive web design, online stores, freelance web developer, web development services";

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
        <meta property="og:url" content="https://www.nullraccoon.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/logo192.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "NullRaccoon",
            url: "https://www.nullraccoon.com",
            logo: "https://www.nullraccoon.com/logo192.png",
            image: "https://www.nullraccoon.com/logo192.png",
            description: pageDescription,
            priceRange: "$$",
            areaServed: [
              { "@type": "Country", name: "Mexico" },
              { "@type": "Country", name: "Colombia" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Worldwide" },
            ],
            serviceArea: "Worldwide",
            knowsAbout: [
              "Web Development",
              "React",
              "JavaScript",
              "Web Design",
              "E-commerce",
              "SEO",
              "Web Solutions",
              "Custom Websites",
              "Responsive Design",
              "Frontend Development",
            ],
            founder: {
              "@type": "Person",
              name: "Gustavo Tello",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              availableLanguage: ["en", "es"],
            },
            sameAs: ["https://github.com/zorthon28"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "2",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "1000",
              highPrice: "15000",
              offers: [
                {
                  "@type": "Offer",
                  name: "Custom Website Development",
                  description:
                    "Professional website design and development for businesses",
                  priceCurrency: "USD",
                  price: "2500",
                },
                {
                  "@type": "Offer",
                  name: "E-commerce Solutions",
                  description:
                    "Complete online store development with payment integration",
                  priceCurrency: "USD",
                  price: "5000",
                },
                {
                  "@type": "Offer",
                  name: "Web Application Development",
                  description:
                    "Custom web applications and tools built with modern technologies",
                  priceCurrency: "USD",
                  price: "8000",
                },
              ],
            },
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
            path="/services"
            element={
              <Services
                lang={lang}
                t={t}
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
