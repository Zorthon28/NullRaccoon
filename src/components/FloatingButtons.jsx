import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import QuoteModal from "../pages/QuoteModal";

export default function FloatingButtons({ lang, setLang, showQuoteModal, setShowQuoteModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const menuRef = useRef(null);
  const quoteButtonRef = useRef(null);

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (!isDesktop) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktop]);

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-auto"
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition duration-300 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {(menuOpen || isDesktop) && (
          <div ref={menuRef} className="flex flex-col items-end gap-4">
            <a
              href="https://wa.me/526645789729?text=Hola,%20estoy%20interesado/a%20en%20sus%20servicios.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-full shadow-md transition duration-300 text-sm min-w-[140px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601..." />
              </svg>
              WhatsApp
            </a>

            <button
              onClick={() => setShowQuoteModal(prev => !prev)}
              ref={quoteButtonRef}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full shadow-md transition duration-300 text-sm min-w-[140px]"
              aria-expanded={showQuoteModal}
              aria-controls="quote-modal"
              aria-haspopup="dialog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18M3 16h18" />
              </svg>
              {lang === "en" ? "Get Quote" : "Cotización"}
            </button>

            <div
              className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full shadow-md transition duration-300 text-sm min-w-[140px] cursor-pointer select-none"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
            >
              🌐 {lang === "en" ? "Ver en Español" : "View in English"}
            </div>
          </div>
        )}
      </div>

      {/* Quote Modal */}
      {showQuoteModal && ReactDOM.createPortal(
        <QuoteModal
          isOpen={showQuoteModal}
          onClose={() => {
            setShowQuoteModal(false);
            quoteButtonRef.current?.focus();
          }}
          lang={lang}
        />,
        document.body
      )}
    </>
  );
}
