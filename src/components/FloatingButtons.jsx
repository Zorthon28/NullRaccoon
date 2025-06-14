import React, { useState, useEffect } from "react";
import QuoteModal from "../pages/QuoteModal";

export default function FloatingButtons({
  lang,
  setLang,
  showQuoteModal,
  setShowQuoteModal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Track window width to handle desktop/mobile rendering safely
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-auto"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 9999,
        }}
      >
        {/* Hamburguesa: solo visible en móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition duration-300 md:hidden"
        >
          {/* Icono hamburguesa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {(menuOpen || isDesktop) && (
          // Add 'items-end' here to align the children (buttons) to the right
          <div className="flex flex-col items-end gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/526645789729?text=Hola,%20estoy%20interesado/a%20en%20sus%20servicios.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles%3F"
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

            {/* Quote Button */}
            <button
              onClick={() => setShowQuoteModal((prev) => !prev)}
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
              {lang === "en" ? "Get Quote" : "Cotización"}
            </button>

            {/* Language Toggle */}
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
      {showQuoteModal && (
        <QuoteModal
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
          lang={lang}
        />
      )}
    </>
  );
}