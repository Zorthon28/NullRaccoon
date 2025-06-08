import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  PlusIcon,
  MinusIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

// Helper function to get nested translation safely
const getNestedTranslation = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
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
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.calendar.description",
      },
      {
        src: "/images/label.png",
        altKey: "caseStudies.medtechPremier.screenshots.label.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.label.description",
      },
      {
        src: "/images/MachineInfo.png",
        altKey: "caseStudies.medtechPremier.screenshots.machineInfo.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.machineInfo.description",
      },
      {
        src: "/images/Main.png",
        altKey: "caseStudies.medtechPremier.screenshots.main.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.main.description",
      },
      {
        src: "/images/Manuales.png",
        altKey: "caseStudies.medtechPremier.screenshots.manuals.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.manuals.description",
      },
      {
        src: "/images/MultipleLabels.png",
        altKey: "caseStudies.medtechPremier.screenshots.multipleLabels.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.multipleLabels.description",
      },
      {
        src: "/images/NurseEstation.png",
        altKey: "caseStudies.medtechPremier.screenshots.nurseEstation.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.nurseEstation.description",
      },
      {
        src: "/images/Reports.png",
        altKey: "caseStudies.medtechPremier.screenshots.reports.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.reports.description",
      },
      {
        src: "/images/Tickets.png",
        altKey: "caseStudies.medtechPremier.screenshots.tickets.alt",
        descriptionKey:
          "caseStudies.medtechPremier.screenshots.tickets.description",
      },
    ],
  },
];

export default function CaseStudy({
  lang,
  t,
  showQuoteModal,
  setShowQuoteModal,
}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const { caseId } = useParams();
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === caseId);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  // For swipe functionality
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50; // Minimum distance for a swipe to be recognized

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

  const openImagePreview = (src, index) => {
    setModalImageSrc(src);
    setCurrentScreenshotIndex(index); // Set the current index when opening the modal
    setShowModal(true);
  };

  const closeImagePreview = () => {
    setModalImageSrc("");
    setShowModal(false);
  };

  const hasScreenshots = caseStudy?.screenshots?.length > 0;
  const currentScreenshot = hasScreenshots
    ? caseStudy.screenshots[currentScreenshotIndex]
    : null;

  const currentScreenshotAlt = currentScreenshot?.altKey
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

  // New functions for modal navigation (already adjusted from previous step, just ensuring context)
  const goToPreviousModalSlide = (e) => {
    e.stopPropagation(); // Prevent modal from closing when clicking buttons
    setCurrentScreenshotIndex((prevIndex) => {
      const newIndex =
        prevIndex > 0 ? prevIndex - 1 : caseStudy.screenshots.length - 1;
      setModalImageSrc(caseStudy.screenshots[newIndex].src); // Update modal image src
      return newIndex;
    });
  };

  const goToNextModalSlide = (e) => {
    e.stopPropagation(); // Prevent modal from closing when clicking buttons
    setCurrentScreenshotIndex((prevIndex) => {
      const newIndex =
        prevIndex < caseStudy.screenshots.length - 1 ? prevIndex + 1 : 0;
      setModalImageSrc(caseStudy.screenshots[newIndex].src); // Update modal image src
      return newIndex;
    });
  };

  // Swipe handlers for the modal carousel
  const onTouchStartModalCarousel = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMoveModalCarousel = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEndModalCarousel = () => {
    if (!caseStudy.screenshots || caseStudy.screenshots.length <= 1) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextModalSlide({ stopPropagation: () => {} }); // Pass dummy stopPropagation
    } else if (isRightSwipe) {
      goToPreviousModalSlide({ stopPropagation: () => {} }); // Pass dummy stopPropagation
    }
  };

  const ImagePreviewModal = ({
    isOpen,
    onClose,
    imageSrc,
    altText,
    description,
    currentIndex,
    totalItems,
    onPrevious,
    onNext,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    // Handle wheel zoom
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * -0.005;
      const newScale = Math.min(Math.max(0.5, scale + delta), 3);
      setScale(newScale);
    };

    // Handle mouse down for dragging
    const handleMouseDown = (e) => {
      if (scale <= 1) return;
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };

    // Handle mouse move for dragging
    const handleMouseMove = (e) => {
      if (!isDragging || scale <= 1) return;

      const newX = e.clientX - startPos.x;
      const newY = e.clientY - startPos.y;

      const container = containerRef.current;
      const img = imageRef.current;
      if (!container || !img) return;

      const containerRect = container.getBoundingClientRect();
      const imgRect = img.getBoundingClientRect();

      const maxX = (imgRect.width * scale - containerRect.width) / 2;
      const maxY = (imgRect.height * scale - containerRect.height) / 2;

      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    };

    // Handle mouse up
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Handle click - zoom in/out
    const handleClick = (e) => {
      if (isDragging) {
        setIsDragging(false);
        return;
      }

      if (e.target.closest("button")) return;

      if (scale > 1) {
        resetImage();
      } else {
        setScale(2);
      }
    };

    // Reset image to default state
    const resetImage = () => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    };

    // Zoom to specific level
    const zoomTo = (level) => {
      setScale(level);
      setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
      resetImage();
    }, [imageSrc]);

    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black backdrop-blur-lg"
        onClick={onClose}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full max-w-6xl h-full flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-50 text-white text-2xl p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Image container */}
          <div
            ref={containerRef}
            className="flex-1 flex items-center justify-center relative overflow-hidden"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={handleClick}
          >
            <div
              className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <img
                ref={imageRef}
                src={imageSrc}
                alt={altText}
                className="max-w-full max-h-[80vh] object-contain rounded-lg transition-transform duration-300"
                style={{
                  transform: `scale(${scale})`,
                  cursor:
                    scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
                }}
              />
            </div>
          </div>

          {/* Controls container at the bottom */}
          <div className="bg-black/50 p-4 rounded-b-lg">
            {/* Zoom controls row */}
            <div className="flex justify-center items-center mb-4 space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomTo(0.5);
                }}
                className={`px-3 py-1 rounded-full ${
                  scale === 0.5 ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <span className="text-white text-sm">50%</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomTo(1);
                }}
                className={`px-3 py-1 rounded-full ${
                  scale === 1 ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <span className="text-white text-sm">100%</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomTo(2);
                }}
                className={`px-3 py-1 rounded-full ${
                  scale === 2 ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <span className="text-white text-sm">200%</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomTo(3);
                }}
                className={`px-3 py-1 rounded-full ${
                  scale === 3 ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <span className="text-white text-sm">300%</span>
              </button>
            </div>

            {/* Navigation and info row */}
            <div className="flex justify-between items-center">
              {/* Navigation arrows (only if multiple items) */}
              {totalItems > 1 && (
                <div className="flex space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrevious(e);
                      resetImage();
                    }}
                    className="bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext(e);
                      resetImage();
                    }}
                    className="bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </div>
              )}

              {/* Image counter */}
              <div className="text-gray-400 text-sm mx-4">
                {currentIndex + 1} / {totalItems}
              </div>

              {/* Empty div to balance the flex layout */}
              {totalItems <= 1 && <div className="flex-1"></div>}
            </div>

            {/* Description */}
            {description && (
              <p className="text-white text-center text-sm md:text-base mt-4">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

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

        {/* Main Carousel */}
        {hasScreenshots && (
          <section className="mb-20">
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-lg font-semibold text-white text-center mb-4">
                {currentScreenshotAlt}
              </h3>

              <div className="flex justify-center items-center mb-4 w-full max-w-4xl mx-auto h-[350px] bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={currentScreenshot.src}
                  alt={currentScreenshotAlt}
                  className="max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openImagePreview(
                      currentScreenshot.src,
                      currentScreenshotIndex
                    )
                  }
                />
              </div>

              <CarouselNavigation
                onPrevious={goToPreviousSlide}
                onNext={goToNextSlide}
                currentIndex={currentScreenshotIndex}
                totalItems={caseStudy.screenshots.length}
                className="mt-4 justify-center"
              />

              {currentScreenshotDescription && (
                <p className="text-center text-gray-300 text-sm mt-2">
                  {currentScreenshotDescription}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Image Preview Modal */}
        <ImagePreviewModal
          isOpen={showModal}
          onClose={closeImagePreview}
          imageSrc={modalImageSrc}
          altText={currentScreenshotAlt}
          description={currentScreenshotDescription}
          currentIndex={currentScreenshotIndex}
          totalItems={caseStudy.screenshots?.length || 0}
          onPrevious={goToPreviousModalSlide}
          onNext={goToNextModalSlide}
          onTouchStart={onTouchStartModalCarousel}
          onTouchMove={onTouchMoveModalCarousel}
          onTouchEnd={onTouchEndModalCarousel}
        />

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
    </section>
  );
}
