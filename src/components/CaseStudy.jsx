import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

// Helper function to get nested translation safely
const getNestedTranslation = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

// THIS ARRAY NOW ONLY CONTAINS REFERENCES TO THE TRANSLATION KEYS AND OTHER NON-TRANSLATABLE DATA
const caseStudies = [
  {
    id: "ecommerce-platform",
    titleKey: "caseStudies.ecommercePlatform.title", // Reference to the translation key
    subtitleKey: "caseStudies.ecommercePlatform.subtitle",
    overviewKey: "caseStudies.ecommercePlatform.overview",
    challengeKey: "caseStudies.ecommercePlatform.challenge",
    solutionKey: "caseStudies.ecommercePlatform.solution",
    resultsKeys: [
      "caseStudies.ecommercePlatform.results.0", // Referencing array elements by index
      "caseStudies.ecommercePlatform.results.1",
      "caseStudies.ecommercePlatform.results.2",
    ],
    testimonialKey: "caseStudies.ecommercePlatform.testimonial",
    client: "Jane Smith, CEO of ShopExample", // This can remain here if it's not translatable
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.example.com",
    imageUrl: "/images/ecommerce-case.jpg",
  },
  {
    id: "medtech-premier",
    titleKey: "caseStudies.medtechPremier.title",
    subtitleKey: "caseStudies.medtechPremier.subtitle",
    overviewKey: "caseStudies.medtechPremier.overview",
    challengeKey: "caseStudies.medtechPremier.challenge",
    solutionKey: "caseStudies.medtechPremier.solution",
    featuresKeys: [
      "caseStudies.medtechPremier.features.0",
      "caseStudies.medtechPremier.features.1",
      "caseStudies.medtechPremier.features.2",
      "caseStudies.medtechPremier.features.3",
      "caseStudies.medtechPremier.features.4",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "QR Code Generation",
    ],
    resultsKeys: [
      "caseStudies.medtechPremier.results.0",
      "caseStudies.medtechPremier.results.1",
      "caseStudies.medtechPremier.results.2",
    ],
    testimonialKey: "caseStudies.medtechPremier.testimonial",
    client: "Centro Médico Premier, Tijuana",
    imageUrl: "/images/medtech-premier.jpg",
    documentUrl: "/docs/medtech-premier-report.pdf",
    screenshots: [
      {
        src: "/images/Calendar.png",
        altKey: "caseStudies.medtechPremier.screenshots.calendar.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.calendar.description",
      },
      {
        src: "/images/label.png",
        altKey: "caseStudies.medtechPremier.screenshots.label.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.label.description",
      },
      {
        src: "/images/MachineInfo.png",
        altKey: "caseStudies.medtechPremier.screenshots.machineInfo.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.machineInfo.description",
      },
      {
        src: "/images/MachineInfoMobile.png",
        altKey: "caseStudies.medtechPremier.screenshots.machineInfoMobile.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.machineInfoMobile.description",
      },
      {
        src: "/images/Main.png",
        altKey: "caseStudies.medtechPremier.screenshots.main.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.main.description",
      },
      {
        src: "/images/Main-mobile.png",
        altKey: "caseStudies.medtechPremier.screenshots.mainMobile.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.mainMobile.description",
      },
      {
        src: "/images/Manuales.png",
        altKey: "caseStudies.medtechPremier.screenshots.manuals.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.manuals.description",
      },
      {
        src: "/images/MultipleLabels.png",
        altKey: "caseStudies.medtechPremier.screenshots.multipleLabels.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.multipleLabels.description",
      },
      {
        src: "/images/NurseEstation.png",
        altKey: "caseStudies.medtechPremier.screenshots.nurseEstation.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.nurseEstation.description",
      },
      {
        src: "/images/Reports.png",
        altKey: "caseStudies.medtechPremier.screenshots.reports.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.reports.description",
      },
      {
        src: "/images/Tickets.png",
        altKey: "caseStudies.medtechPremier.screenshots.tickets.alt",
        descriptionKey: "caseStudies.medtechPremier.screenshots.tickets.description",
      },
    ],
  },
];


export default function CaseStudy({ lang, t, showQuoteModal, setShowQuoteModal }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const { caseId } = useParams();
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === caseId);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  console.log("CaseStudy component rendered/re-rendered.");

  const handleGoBack = () => {
    navigate(-1); // This tells React Router to go back one step in history
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showModal) {
        closeImagePreview();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  if (!caseStudy) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white overflow-hidden flex items-center justify-center">
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
        <div className="relative z-10 text-center p-8 bg-white/10 rounded-xl max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t?.caseStudyNotFound}</h1>
          <p className="text-xl text-gray-300 mb-8">
            {t?.caseStudyNotFoundMessage}
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
          >
            {t?.returnHome}
          </a>
        </div>
      </section>
    );
  }

  console.log(`CaseStudy loaded: ${getNestedTranslation(t, caseStudy?.titleKey)}`);
  console.log("CaseStudy details:", caseStudy);

  const hasScreenshots = caseStudy?.screenshots?.length > 0;
  const currentScreenshot = hasScreenshots
    ? caseStudy.screenshots?.[currentScreenshotIndex]
    : null;

  const currentScreenshotAlt = currentScreenshot?.altKey
    ? getNestedTranslation(t, currentScreenshot.altKey)
    : `${t?.screenshot || 'Screenshot'} ${currentScreenshotIndex + 1}`;

  const currentScreenshotDescription = currentScreenshot?.descriptionKey
    ? getNestedTranslation(t, currentScreenshot.descriptionKey)
    : '';

  const goToPreviousSlide = () => {
    setCurrentScreenshotIndex((prevIndex) => {
      const newIndex =
        prevIndex > 0 ? prevIndex - 1 : caseStudy.screenshots.length - 1;
      console.log(`Navigating to previous slide. New index: ${newIndex}`);
      return newIndex;
    });
  };

  const goToNextSlide = () => {
    setCurrentScreenshotIndex((prevIndex) => {
      const newIndex =
        prevIndex < caseStudy.screenshots.length - 1 ? prevIndex + 1 : 0;
      console.log(`Navigating to next slide. New index: ${newIndex}`);
      return newIndex;
    });
  };

  const openImagePreview = (src) => {
    setModalImageSrc(src);
    setShowModal(true);
    console.log(`Opening image preview for: ${src}`);
  };

  const closeImagePreview = () => {
    setModalImageSrc("");
    setShowModal(false);
    console.log("Closing image preview.");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
      {/* Animated background particles */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-50 sm:top-10 sm:left-10 md:top-12 md:left-12">
          {" "}
          <button
            onClick={handleGoBack}
            className="flex items-center space-x-2 p-3 bg-blue-700/70 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            aria-label="Go back to portfolio"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            <span className="hidden sm:inline">{t?.backToPortfolio}</span>
          </button>
        </div>
        {/* Case Study Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              {getNestedTranslation(t, caseStudy?.titleKey)}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {getNestedTranslation(t, caseStudy?.subtitleKey)}
          </p>
        </div>

        {hasScreenshots && (
          <section className="mb-20">
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              {/* Current Screenshot Container */}
              <div className="flex justify-center items-center mb-4 w-full max-w-4xl mx-auto h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-gray-800 rounded-lg overflow-hidden">
                <div
                  className="block w-full h-full justify-center items-center cursor-pointer"
                  onClick={() => openImagePreview(currentScreenshot?.src)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Open preview of image: ${currentScreenshotAlt}`}
                >
                  <img
                    src={currentScreenshot?.src}
                    alt={currentScreenshotAlt}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              {/* LEFT (Previous) Button */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{ left: "32px" }}
              >
                <button
                  onClick={goToPreviousSlide}
                  className="bg-blue-700/50 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                  <span className="sr-only">{t?.previous}</span>
                </button>
              </div>

              {/* RIGHT (Next) Button */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{ right: "32px" }}
              >
                <button
                  onClick={goToNextSlide}
                  className="bg-blue-700/50 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                  <span className="sr-only">{t?.next}</span>
                </button>
              </div>

              {/* Image Counter */}
              <div className="text-center text-gray-400 text-sm">
                {currentScreenshotIndex + 1} / {caseStudy.screenshots.length}
              </div>
            </div>
          </section>
        )}
        {/* Fallback to original demo CTA if no screenshots */}
        {!hasScreenshots && caseStudy?.demoUrl && (
          <div className="flex justify-center mb-20 animate-fade-in-up">
            <a
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300 inline-flex items-center"
            >
              {t?.viewDemo}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        )}

        {/* Case Study Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Main content */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">
                {t?.overview}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {getNestedTranslation(t, caseStudy?.overviewKey)}
              </p>
            </section>

            {/* Challenge */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                {t?.challenge}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {getNestedTranslation(t, caseStudy?.challengeKey)}
              </p>
            </section>

            {/* Solution */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-pink-300">
                {t?.solution}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {getNestedTranslation(t, caseStudy?.solutionKey)}
              </p>
            </section>

            {/* Key Features (if applicable) */}
            {caseStudy?.featuresKeys?.length > 0 && (
              <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-green-300">
                  {t?.features}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {caseStudy.featuresKeys.map((featureKey, index) => (
                    <li key={index}>{getNestedTranslation(t, featureKey)}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h2 className="text-xl font-bold mb-4 text-blue-300">
                {t?.technologies}
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h2 className="text-xl font-bold mb-4 text-purple-300">
                {t?.results}
              </h2>
              <ul className="space-y-3">
                {caseStudy?.resultsKeys?.map((resultKey, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{getNestedTranslation(t, resultKey)}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Testimonial */}
            <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h2 className="text-xl font-bold mb-4 text-pink-300">
                {t?.testimonial}
              </h2>
              <blockquote className="text-gray-300 italic mb-2">
                "{getNestedTranslation(t, caseStudy?.testimonialKey)}"
              </blockquote>
              <p className="text-gray-400 text-sm">— {caseStudy?.client}</p>
            </section>

            {/* PDF Report Link (if applicable) */}
            {caseStudy?.documentUrl && (
              <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <h2 className="text-xl font-bold mb-4 text-blue-300">
                  {t?.viewFullReport}
                </h2>
                <a
                  href={caseStudy.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0118 8.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 4a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V15a1 1 0 01-1 1H7a1 1 0 01-1-1V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t?.downloadPDF}
                </a>
              </section>
            )}
          </div>
        </div>

        {/* Next Case Study */}
        <section className="text-center border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-8">{t?.nextCase}</h2>
          <a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition duration-300"
          >
            {t?.exploreMoreCaseStudies}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </section>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeImagePreview}
        >
          <div
            className="relative max-w-full max-h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImageSrc}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
            <button
              onClick={closeImagePreview}
              className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full bg-black/50 hover:bg-black/75 transition"
              aria-label="Close image preview"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}