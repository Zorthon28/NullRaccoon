import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import {
  Slideshow,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "../index.css";
import Header from "./HeaderHero";

// Helper function to get nested translation safely
const getNestedTranslation = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

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
    documentUrl: "/files/medtech-premier-report.pdf",
    screenshots: [
      {
        src: "/images/Calendar.png",
        altKey: "caseStudies.medtechPremier.screenshots.calendar.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.calendar.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.calendar.altMobile",
      },
      {
        src: "/images/label.png",
        altKey: "caseStudies.medtechPremier.screenshots.label.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.label.description",
        altMobileKey: "caseStudies.medtechPremier.screenshots.label.altMobile",
      },
      {
        src: "/images/MachineInfo.png",
        altKey: "caseStudies.medtechPremier.screenshots.machineInfo.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.machineInfo.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.machineInfo.altMobile",
      },
      {
        src: "/images/Main.png",
        altKey: "caseStudies.medtechPremier.screenshots.main.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.main.description",
        altMobileKey: "caseStudies.medtechPremier.screenshots.main.altMobile",
      },
      {
        src: "/images/Manuales.png",
        altKey: "caseStudies.medtechPremier.screenshots.manuals.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.manuals.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.manuals.altMobile",
      },
      {
        src: "/images/MultipleLabels.png",
        altKey: "caseStudies.medtechPremier.screenshots.multipleLabels.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.multipleLabels.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.multipleLabels.altMobile",
      },
      {
        src: "/images/NurseEstation.png",
        altKey: "caseStudies.medtechPremier.screenshots.nurseEstation.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.nurseEstation.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.nurseEstation.altMobile",
      },
      {
        src: "/images/Reports.png",
        altKey: "caseStudies.medtechPremier.screenshots.reports.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.reports.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.reports.altMobile",
      },
      {
        src: "/images/Tickets.png",
        altKey: "caseStudies.medtechPremier.screenshots.tickets.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.tickets.description",
        altMobileKey:
          "caseStudies.medtechPremier.screenshots.tickets.altMobile",
      },
    ],
  },
];

// Animation variants for scroll reveal
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts invisible and 50px below its final position
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Fades in and slides up
};

export default function CaseStudy({
  lang,
  t,
  showQuoteModal,
  setShowQuoteModal,
}) {
  const navigate = useNavigate();
  const { caseId } = useParams();
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === caseId);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Assuming 'md' breakpoint from Tailwind CSS (768px) is your mobile cutoff
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Function to open the lightbox
  const openLightbox = () => {
    console.log("openLightbox called!");
    setLightboxOpen(true);
  };

  const handleGoBack = () => {
    navigate(-1); // This tells React Router to go back one step in history
  };

  const hasScreenshots = caseStudy?.screenshots?.length > 0;
  const currentScreenshot = hasScreenshots
    ? caseStudy.screenshots[currentScreenshotIndex]
    : null;

  const currentScreenshotAlt =
    currentScreenshot?.altMobileKey && isMobile
      ? getNestedTranslation(t, currentScreenshot.altMobileKey)
      : currentScreenshot?.altKey
      ? getNestedTranslation(t, currentScreenshot.altKey)
      : `${t?.screenshot || "Screenshot"} ${currentScreenshotIndex + 1}`;

  const currentScreenshotDescription = currentScreenshot?.descriptionKey
    ? getNestedTranslation(t, currentScreenshot.descriptionKey)
    : "";

  const goToPreviousSlide = () => {
    setCurrentScreenshotIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : caseStudy.screenshots.length - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentScreenshotIndex((prevIndex) =>
      prevIndex < caseStudy.screenshots.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToSpecificSlide = (index) => {
    setCurrentScreenshotIndex(index);
  };

  useEffect(() => {
    console.log("lightboxOpen state changed to:", lightboxOpen);
  }, [lightboxOpen]);

  // Debug logging for lightbox
  useEffect(() => {
    if (lightboxOpen && caseStudy.screenshots) {
      console.log(
        "Lightbox condition met! caseStudy.screenshots:",
        caseStudy.screenshots
      );
    }
  }, [lightboxOpen, caseStudy.screenshots]);

  console.log("CaseStudy component rendered/re-rendered.");
  console.log("Current caseStudy:", caseStudy); // DEBUG: Check if caseStudy data is loaded
  console.log("hasScreenshots:", hasScreenshots); // DEBUG: Check if hasScreenshots is true for expected items

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

  const CarouselNavigation = ({
    onPrevious,
    onNext,
    currentIndex,
    totalItems,
    className = "",
    showCounter = true,
  }) => {
    return (
      <div className={`relative ${className}`}>
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            className="bg-blue-700/50 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none transition"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {showCounter && (
            <div className="text-gray-400 text-sm mx-4">
              {currentIndex + 1} / {totalItems}
            </div>
          )}

          <button
            onClick={onNext}
            className="bg-blue-700/50 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none transition"
            aria-label="Next"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    );
  };

  console.log(
    `CaseStudy loaded: ${getNestedTranslation(t, caseStudy?.titleKey)}`
  );
  console.log("CaseStudy details:", caseStudy);

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
      <Header t={t} pageType="casestudy" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <div className="absolute top-12 left-8 z-50 sm:top-14 sm:left-10 md:top-16 md:left-12">
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
        <div id="images" className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 break-words px-4 sm:px-0">
              {getNestedTranslation(t, caseStudy?.titleKey)}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {getNestedTranslation(t, caseStudy?.subtitleKey)}
          </p>
        </div>

        {/* Main Carousel */}
        <div>
          {hasScreenshots && (
            <motion.section
              className="mb-20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-lg font-semibold text-white text-center mb-4">
                  {currentScreenshotAlt}
                </h3>

                <div className="relative flex justify-center items-center mb-4 w-full max-w-4xl mx-auto h-[350px] bg-gray-800 rounded-lg overflow-hidden group">
                  {/* Main Image with Transition */}
                  <img
                    src={currentScreenshot.src}
                    alt={currentScreenshotAlt}
                    className="max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300 ease-in-out opacity-100"
                  />
                  {/* Fix: Conditionally render the overlay so it hides when the lightbox is open */}
                  {!lightboxOpen && (
                    <button
                      onClick={openLightbox} // Use the new openLightbox function
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 p-4"
                      aria-label="View full screen image"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <ArrowsPointingOutIcon className="h-12 w-12 text-white drop-shadow-lg mb-2" />{" "}
                        {/* Larger icon, shadow */}
                        <span className="text-white text-lg font-semibold tracking-wide">
                          {t?.viewFullscreen || "View Fullscreen"}{" "}
                          {/* Translatable text */}
                        </span>
                      </div>
                    </button>
                  )}
                </div>
                <CarouselNavigation
                  onPrevious={goToPreviousSlide}
                  onNext={goToNextSlide}
                  currentIndex={currentScreenshotIndex}
                  totalItems={caseStudy.screenshots.length}
                  className="mt-4 justify-center"
                />

                {/* Thumbnails */}
                {caseStudy.screenshots.length > 1 && (
                  <div className="flex justify-start sm:justify-center overflow-x-auto whitespace-nowrap gap-3 mt-6 pb-2 scrollbar-hide">
                    {caseStudy.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot.src}
                        alt={
                          getNestedTranslation(t, screenshot.altKey) ||
                          `Thumbnail ${index + 1}`
                        }
                        className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
                          index === currentScreenshotIndex
                            ? "border-blue-500 ring-2 ring-blue-500"
                            : "border-transparent hover:border-blue-300"
                        }`}
                        onClick={() => goToSpecificSlide(index)}
                      />
                    ))}
                  </div>
                )}

                {/* Add the description here */}
                {currentScreenshotDescription && (
                  <p
                    id="overview"
                    className="text-center text-gray-300 text-sm mt-4"
                  >
                    {currentScreenshotDescription}
                  </p>
                )}
              </div>
            </motion.section>
          )}
        </div>
        {/* Lightbox Portal */}
        {typeof document !== "undefined" &&
          ReactDOM.createPortal(
            <div>
              {lightboxOpen && caseStudy.screenshots && (
                <>
                  {/* DEBUG LOGGING */}
                  {console.log(
                    "Lightbox Slides being passed:",
                    caseStudy.screenshots.map((screenshot) => ({
                      src: screenshot.src,
                      alt: getNestedTranslation(t, screenshot.altKey) || "",
                      description:
                        getNestedTranslation(t, screenshot.descriptionKey) ||
                        "",
                    }))
                  )}
                  <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={caseStudy.screenshots.map((screenshot) => ({
                      src: screenshot.src,
                      alt: getNestedTranslation(t, screenshot.altKey) || "",
                      description:
                        getNestedTranslation(t, screenshot.descriptionKey) ||
                        "",
                    }))}
                    index={currentScreenshotIndex}
                    on={{
                      view: ({ index }) => setCurrentScreenshotIndex(index),
                      closed: () => setLightboxOpen(false),
                    }}
                    plugins={[Slideshow, Fullscreen, Thumbnails, Zoom]}
                    styles={{
                      container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                    }}
                  />
                </>
              )}
            </div>,
            document.body
          )}

        {/* Consolidated Demo Button Logic */}
        {caseStudy?.demoUrl && (
          <div
            className={`flex justify-center animate-fade-in-up ${
              hasScreenshots ? "mt-10 mb-20" : "mb-20"
            }`}
          >
            <a
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300 inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1  0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {t?.viewDemo || "View Demo"}
            </a>
          </div>
        )}

        {/* Case Study Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Sidebar - we will place the 'Results' section here with order control */}
          <div className="md:col-span-1 flex flex-col space-y-8">
            {/* Results Section - Moved here to control its order for mobile */}
            <motion.section
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 order-first transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
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
            </motion.section>

            {/* Technologies */}
            <motion.section
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
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
            </motion.section>

            {/* Testimonial */}
            <motion.section
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4 text-pink-300">
                {t?.testimonial}
              </h2>
              <blockquote className="text-gray-300 italic mb-2">
                "{getNestedTranslation(t, caseStudy?.testimonialKey)}"
              </blockquote>
              <p className="text-gray-400 text-sm">— {caseStudy?.client}</p>
            </motion.section>

            {/* PDF Report Link (if applicable) */}
            {caseStudy?.documentUrl && (
              <motion.section
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
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
              </motion.section>
            )}
          </div>

          {/* Main content */}
          <div className="md:col-span-2 space-y-12 order-2 md:order-none">
            {/* Overview */}
            <motion.section
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-300">
                {t?.overview}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {getNestedTranslation(t, caseStudy?.overviewKey)}
              </p>
            </motion.section>

            {/* Challenge */}
            <motion.section
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                {t?.challenge}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {getNestedTranslation(t, caseStudy?.challengeKey)}
              </p>
            </motion.section>

            {/* Solution */}
            <motion.section
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-pink-300">
                {t?.solution}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {getNestedTranslation(t, caseStudy?.solutionKey)}
              </p>
            </motion.section>

            {/* Key Features (if applicable) */}
            {caseStudy?.featuresKeys?.length > 0 && (
              <motion.section
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-green-300">
                  {t?.features}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {caseStudy.featuresKeys.map((featureKey, index) => (
                    <li key={index}>{getNestedTranslation(t, featureKey)}</li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>
        </div>

        {/* Next Case Study */}
        <section className="text-center border-t border-white/10 pt-12"></section>
      </div>
    </section>
  );
}
