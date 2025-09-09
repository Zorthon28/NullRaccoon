import Certifications from "../pages/Certifications";
import Portfolio from "../pages/Portfolio";
import Header from "../components/HeaderHero";

export default function Hero({ lang, t, showQuoteModal, setShowQuoteModal }) {
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

      <Header t={t} pageType="hero" />

      <div className="relative z-10 px-6 py-20 text-center max-w-7xl mx-auto">
        {/* Bilingual Badge */}
        {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/10 animate-fade-in">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t.bilingualBadge}
        </div> */}

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

        {/* Secondary mention (Tech Services) */}
        <div className="mb-10">
          <p className="text-md text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t.secondaryNote}
          </p>

          {/* Learn More Button */}
          <div className="mt-6">
            <a
              href="#tech-services"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300 animate-fade-in-up animation-delay-300"
            >
              {t.learnMore}
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div id="portfolio" className="mt-0">
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-5 animate-fade-in animation-delay-300">
            {t.indicators.map((text, index) => (
              <div key={index} className="text-center">
                <p className="inline-block px-2 py-1 rounded-full text-xs sm:text-sm text-gray-300 uppercase tracking-wider bg-white/10 border border-white/20 backdrop-blur-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Portfolio Section */}

          <Portfolio t={t} />
        </div>

        <div id="certifications" className="mt-0">
          {/* Certificaciones */}
          <Certifications t={t} />
        </div>
      </div>
    </section>
  );
}
