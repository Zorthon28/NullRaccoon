import React, { useState, useEffect } from "react";
import Certifications from "../pages/Certifications";
import Portfolio from "../pages/Portfolio";

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
        title: "App Médica",
        description:
          "Aplicación de salud para gestionar registros de pacientes de forma segura.",
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
        url: "https://example.com/css-cert",
      },
      {
        name: "Certificado de Junit",
        imgSrc: "/images/Junit-Cert.png",
        url: "https://example.com/junit-cert",
      },
      {
        name: "Certificado de React",
        imgSrc: "/images/React-Cert.png",
        url: "https://example.com/junit-cert",
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

        {/* Botón flotante */}
        <div
          className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 pointer-events-auto"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
          }}
        >
          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/5211234567890?text=Hola,%20quiero%20informes%20sobre%20su%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-full shadow-md transition duration-300 text-sm"
            style={{ minWidth: "140px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            WhatsApp
          </a>

          {/* Botón de cotización */}
          <button
            onClick={() => setShowQuoteModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full shadow-md transition duration-300 text-sm min-w-[140px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8h18M3 16h18M3 12h18"
              />
            </svg>
            Cotización
          </button>

          {/* Botón para cambiar idioma */}
          <div
            className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full shadow-md transition duration-300 text-sm min-w-[140px] cursor-pointer select-none"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setLang(lang === "en" ? "es" : "en");
            }}
          >
            🌐 {lang === "en" ? "Ver en Español" : "View in English"}
          </div>
        </div>
      </div>
    </section>
  );
}
