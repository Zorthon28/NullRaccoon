import React, { useState, useEffect } from "react";
import Certifications from "../pages/Certifications";
import Portfolio from "../pages/Portfolio";
import FloatingButtons from "./FloatingButtons";

const translations = {
  en: {
    bilingualBadge: "Bilingual Support",
    availability: "Accepting new clients",
    headline: "Professional Websites",
    subheadline: "We build websites that convert visitors into customers",
    ctaStart: "Get Started",
    ctaPortfolio: "Portfolio",
    indicators: [
      "2+ Years Experience",
      "Bilingual Support",
      "Mobile First",
      "Fast Loading",
    ],
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "Some of our recent work",
    portfolioProjects: [
      {
        title: "E-commerce Platform",
        description:
          "A modern online store with cart, checkout, and admin panel.",
      },
      {
        title: "Medical Web App",
        description: "A health tech app for managing patient records securely.",
      },
      {
        title: "Personal Portfolio",
        description: "A responsive portfolio site for a creative freelancer.",
      },
    ],

    certificationsTitle: "My Certifications",
    certificationsList: [
      {
        name: "Codecademy User",
        imgSrc: "/images/codecademy-logo.png",
        url: "https://www.codecademy.com/profiles/Zorthon28",
      },
      {
        name: "CSS Certificate",
        imgSrc: "/images/CSS-Cert.png",
        url: "https://example.com/css-cert",
      },
      {
        name: "Junit Certificate",
        imgSrc: "/images/Junit-Cert.png",
        url: "https://example.com/junit-cert",
      },
      {
        name: "React Certificate",
        imgSrc: "/images/React-Cert.png",
        url: "https://example.com/junit-cert",
      },
    ],
  },
  es: {
    bilingualBadge: "Soporte Bilingüe",
    availability: "Aceptando nuevos clientes",
    headline: "Sitios web profesionales",
    subheadline: "Creamos sitios web que convierten visitantes en clientes",
    ctaStart: "Comenzar",
    ctaPortfolio: "Portafolio",
    indicators: [
      "2+ Años de experiencia",
      "Soporte bilingüe",
      "Mobile First",
      "Carga rápida",
    ],
    portfolioTitle: "Portafolio",
    portfolioSubtitle: "Algunos de nuestros trabajos recientes",
    portfolioProjects: [
      {
        title: "Plataforma de Comercio",
        description:
          "Tienda en línea moderna con carrito, pagos y panel de administración.",
      },
      {
        title: "Premier Centro Médico",
        description:
          "Equipment and maintenance management system for a private medical center.",
        image: "/images/premier-project.png",
        link: "/medtechpremier",
      },
      {
        title: "Portafolio Personal",
        description: "Sitio web responsivo para un freelancer creativo.",
      },
    ],
    certificationsTitle: "Mis Certificaciones",
    certificationsList: [
      {
        name: "Usuario de Codecademy",
        imgSrc: "/images/codecademy-logo.png",
        url: "https://www.codecademy.com/profiles/Zorthon28",
      },
      {
        name: "Certificado de CSS",
        imgSrc: "/images/CSS-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/3a62023b0054dc793edc0adecd715fd7",
      },
      {
        name: "Certificado de Junit",
        imgSrc: "/images/Junit-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/e95ecc4c837848d4a6548967fb8fe349",
      },
      {
        name: "Certificado de React",
        imgSrc: "/images/React-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/af00e5032d0a68cc84879983f5d8333b",
      },
    ],
  },
};

export default function Hero() {
  const [lang, setLang] = useState("en");
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
  }, []);

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Animated background */}
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 bg-white opacity-20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative z-10 px-6 py-20 text-center max-w-7xl mx-auto">
        {/* Bilingual Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/10 animate-fade-in">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t.bilingualBadge}
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/10 animate-fade-in">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t.availability}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
            {t.headline}
          </span>
        </h1>

        {/* Subheadline */}
        <div className="mb-10">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
            {t.subheadline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-200">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300">
            {t.ctaStart}
          </button>
          <button
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {t.ctaPortfolio}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-300">
          {t.indicators.map((text, index) => (
            <div key={index} className="text-center">
              <p className="inline-block px-4 py-2 rounded-full text-sm text-gray-300 uppercase tracking-wider bg-white/10 border border-white/20 backdrop-blur-sm">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div id="portfolio" className="mt-20">
          <Portfolio t={t} />
        </div>

        {/* Certificaciones */}
        <Certifications t={t} />
      </div>
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
        <FloatingButtons
          lang={lang}
          setLang={setLang}
          showQuoteModal={showQuoteModal}
          setShowQuoteModal={setShowQuoteModal}
        />
      </div>
    </section>
  );
}
