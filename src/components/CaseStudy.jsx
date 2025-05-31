import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FloatingButtons from "./FloatingButtons";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const translations = {
  en: {
    backToCases: "Back to Case Studies",
    viewScreenshots: "View Screenshots",
    overview: "Project Overview",
    challenge: "The Challenge",
    solution: "Our Solution",
    technologies: "Technologies Used",
    results: "Key Results",
    testimonial: "Client Testimonial",
    nextCase: "Next Case Study",
    features: "Key Features",
    screenshot: "Screenshot",
    previous: "Previous",
    next: "Next",
  },
  es: {
    backToCases: "Volver a Casos de Estudio",
    viewScreenshots: "Ver Capturas de Pantalla",
    overview: "Resumen del Proyecto",
    challenge: "El Desafío",
    solution: "Nuestra Solución",
    technologies: "Tecnologías Utilizadas",
    results: "Resultados Clave",
    testimonial: "Testimonio del Cliente",
    nextCase: "Siguiente Caso de Estudio",
    features: "Características Clave",
    screenshot: "Captura de Pantalla",
    previous: "Anterior",
    next: "Siguiente",
  },
};

const caseStudies = [
  {
    id: "ecommerce-platform",
    title: {
      en: "E-commerce Platform",
      es: "Plataforma de Comercio Electrónico",
    },
    subtitle: {
      en: "Modern online store with seamless checkout experience",
      es: "Tienda en línea moderna con experiencia de pago fluida",
    },
    overview: {
      en: "A complete e-commerce solution built to handle high traffic volumes while maintaining fast load times and excellent user experience.",
      es: "Una solución completa de comercio electrónico construida para manejar grandes volúmenes de tráfico manteniendo tiempos de carga rápidos y una excelente experiencia de usuario.",
    },
    challenge: {
      en: "The client needed a scalable platform that could handle seasonal traffic spikes while providing a smooth mobile shopping experience.",
      es: "El cliente necesitaba una plataforma escalable que pudiera manejar picos de tráfico estacionales mientras proporcionaba una experiencia de compra móvil fluida.",
    },
    solution: {
      en: "We developed a custom React frontend with a Node.js backend, implementing lazy loading, optimized images, and a progressive web app approach for mobile users.",
      es: "Desarrollamos un frontend personalizado en React con un backend en Node.js, implementando lazy loading, imágenes optimizadas y un enfoque de aplicación web progresiva para usuarios móviles.",
    },
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    results: [
      {
        en: "40% increase in mobile conversion rate",
        es: "40% de aumento en la tasa de conversión móvil",
      },
      {
        en: "2.5 second average page load time at peak traffic",
        es: "Tiempo de carga promedio de 2.5 segundos en horas pico",
      },
      {
        en: "30% reduction in cart abandonment",
        es: "30% de reducción en el abandono de carritos",
      },
    ],
    testimonial: {
      en: '"The new platform has transformed our online business. The mobile experience is now on par with desktop, and our sales have increased dramatically."',
      es: '"La nueva plataforma ha transformado nuestro negocio en línea. La experiencia móvil ahora está a la par con el escritorio, y nuestras ventas han aumentado dramáticamente."',
    },
    client: "Jane Smith, CEO of ShopExample",
    // No screenshots for this example, only demoUrl (will be ignored if screenshots exist)
    demoUrl: "https://demo-ecommerce.example.com",
    imageUrl: "/images/ecommerce-case.jpg",
  },
  {
    id: "medtech-premier",
    title: {
      en: "Medical Equipment Management Platform",
      es: "Plataforma de Gestión de Equipos Médicos",
    },
    subtitle: {
      en: "Comprehensive maintenance and inventory system for Premier Medical Center",
      es: "Sistema integral de mantenimiento e inventario para el Centro Médico Premier",
    },
    overview: {
      en: "A web-based platform for managing medical equipment maintenance, inventory, and service orders at Premier Medical Center in Tijuana, implementing QR code tracking and a modified Fennigkoh-Smith prioritization method.",
      es: "Plataforma web para la gestión de mantenimiento, inventario y órdenes de servicio de equipos médicos en el Centro Médico Premier de Tijuana, implementando seguimiento por códigos QR y método modificado Fennigkoh-Smith para priorización.",
    },
    challenge: {
      en: "The medical center faced challenges managing equipment due to manual processes, dispersed records, and inefficient maintenance scheduling, leading to delays and unnecessary costs.",
      es: "El centro médico enfrentaba desafíos en la gestión de equipos debido a procesos manuales, registros dispersos y programación ineficiente de mantenimientos, generando retrasos y costos innecesarios.",
    },
    solution: {
      en: "Developed a PHP/MySQL web application with: QR code inventory tracking, dynamic maintenance calendar, service order management, role-based access control, and equipment prioritization system.",
      es: "Desarrollé una aplicación web PHP/MySQL con: seguimiento de inventario por QR, calendario dinámico de mantenimientos, gestión de órdenes de servicio, control de acceso por roles y sistema de priorización de equipos.",
    },
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "QR Code Generation",
    ],
    features: [
      {
        en: "QR Code Equipment Tracking",
        es: "Seguimiento de equipos con QR",
      },
      {
        en: "Dynamic Maintenance Calendar",
        es: "Calendario dinámico de mantenimientos",
      },
      {
        en: "Fennigkoh-Smith Prioritization",
        es: "Priorización Fennigkoh-Smith",
      },
      {
        en: "Role-based Access Control",
        es: "Control de acceso por roles",
      },
      {
        en: "Service Order Management",
        es: "Gestión de órdenes de servicio",
      },
    ],
    results: [
      {
        en: "40% reduction in equipment downtime",
        es: "40% reducción en tiempo de inactividad",
      },
      {
        en: "Centralized equipment database",
        es: "Base de datos centralizada de equipos",
      },
      {
        en: "Automated maintenance scheduling",
        es: "Programación automática de mantenimientos",
      },
    ],
    testimonial: {
      en: '"The platform has revolutionized our biomedical department\'s operations, providing instant access to equipment history and streamlined maintenance processes."',
      es: '"La plataforma ha revolucionado las operaciones de nuestro departamento biomédico, proporcionando acceso instantáneo al historial de equipos y procesos de mantenimiento optimizados."',
    },
    client: "Centro Médico Premier, Tijuana",
    imageUrl: "/images/medtech-premier.jpg",
    documentUrl: "/docs/medtech-premier-report.pdf", // Link to your PDF report
    screenshots: [
      {
        src: "/images/Calendar.png",
        alt: {
          en: "Calendar page for scheduling maintenance",
          es: "Página de calendario para programar mantenimientos",
        },
        description: {
          en: "This page allows hospital staff to schedule and view maintenance appointments for medical equipment.",
          es: "Esta página permite al personal del hospital programar y visualizar citas de mantenimiento para equipos médicos.",
        },
      },
      {
        src: "/images/label.png",
        alt: {
          en: "Medical equipment tracking label leading to MachineInfo.php",
          es: "Etiqueta de seguimiento de equipos médicos que lleva a MachineInfo.php",
        },
        description: {
          en: "A unique QR code label for each piece of medical equipment, linking directly to its detailed information page.",
          es: "Una etiqueta con código QR único para cada equipo médico, que enlaza directamente a su página de información detallada.",
        },
      },
      {
        src: "/images/MachineInfo.png",
        alt: {
          en: "Desktop view of Machine Information page",
          es: "Vista de escritorio de la página de información de la máquina",
        },
        description: {
          en: "Detailed information about a specific medical equipment, including model, brand, serial number, location, status, and maintenance history.",
          es: "Información detallada sobre un equipo médico específico, incluyendo modelo, marca, número de serie, ubicación, estado e historial de mantenimiento.",
        },
      },
      {
        src: "/images/MachineInfoMobile.png",
        alt: {
          en: "Mobile view of Machine Information page",
          es: "Vista móvil de la página de información de la máquina",
        },
        description: {
          en: "The mobile-friendly version of the equipment details page, optimized for on-the-go access.",
          es: "La versión móvil de la página de detalles del equipo, optimizada para el acceso en movimiento.",
        },
      },
      {
        src: "/images/Main.png",
        alt: {
          en: "Main dashboard showing recent tickets and upcoming maintenance",
          es: "Panel principal mostrando tickets recientes y próximos mantenimientos programados",
        },
        description: {
          en: "The main dashboard provides a quick overview of recent service tickets and upcoming maintenance schedules.",
          es: "El panel principal ofrece una visión rápida de los tickets de servicio recientes y los próximos programas de mantenimiento.",
        },
      },
      {
        src: "/images/Main-mobile.png",
        alt: {
          en: "Mobile view of the Main dashboard",
          es: "Vista móvil del panel principal",
        },
        description: {
          en: "The mobile version of the main dashboard, designed for easy navigation on smaller screens.",
          es: "La versión móvil del panel principal, diseñada para una fácil navegación en pantallas más pequeñas.",
        },
      },
      {
        src: "/images/Manuales.png",
        alt: {
          en: "Manuals page to select PDF files",
          es: "Página de manuales para seleccionar archivos PDF",
        },
        description: {
          en: "A dedicated section for accessing PDF manuals for various medical equipment.",
          es: "Una sección dedicada para acceder a los manuales en formato PDF de varios equipos médicos.",
        },
      },
      {
        src: "/images/MultipleLabels.png",
        alt: {
          en: "Page showing multiple medical equipment labels",
          es: "Página mostrando múltiples etiquetas de equipos médicos",
        },
        description: {
          en: "An overview of multiple generated QR code labels for different equipment.",
          es: "Una visión general de múltiples etiquetas de códigos QR generadas para diferentes equipos.",
        },
      },
      {
        src: "/images/NurseEstation.png",
        alt: {
          en: "Nurse Station quick access to report issues",
          es: "Estación de enfermería: acceso rápido para reportar problemas",
        },
        description: {
          en: "A streamlined interface for nurses to quickly report equipment issues, improving response times.",
          es: "Una interfaz optimizada para que las enfermeras reporten rápidamente problemas con el equipo, mejorando los tiempos de respuesta.",
        },
      },
      {
        src: "/images/Reports.png",
        alt: {
          en: "Reports page with graphs and maintenance list",
          es: "Página de informes con gráficos y lista de mantenimientos",
        },
        description: {
          en: "Comprehensive reports displaying maintenance metrics like open/closed orders, total orders, average resolution time, and a detailed list of all maintenance activities.",
          es: "Informes completos que muestran métricas de mantenimiento como órdenes abiertas/cerradas, órdenes totales, tiempo promedio de resolución y una lista detallada de todas las actividades de mantenimiento.",
        },
      },
      {
        src: "/images/Tickets.png",
        alt: {
          en: "Tickets page to create maintenance tickets",
          es: "Página de tickets para crear órdenes de mantenimiento",
        },
        description: {
          en: "The ticketing system allows users to create, modify, prioritize, and view PDF versions of maintenance orders.",
          es: "El sistema de tickets permite a los usuarios crear, modificar, priorizar y ver versiones PDF de las órdenes de mantenimiento.",
        },
      },
    ],
  },
  // Add more case studies as needed
];

export default function CaseStudy() {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [lang, setLang] = useState("en");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const { caseId } = useParams();
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === caseId);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
    setCurrentScreenshotIndex(0); // Reset index when case study changes
  }, [caseId]);

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
  }, [showModal]); // Re-run effect if showModal changes

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
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">
            The requested case study doesn't exist or may have been removed.
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
          >
            Return Home
          </a>
        </div>
      </section>
    );
  }

  const t = translations?.[lang];
  const hasScreenshots = caseStudy?.screenshots?.length > 0;
  const currentScreenshot = hasScreenshots
    ? caseStudy.screenshots?.[currentScreenshotIndex]
    : null;

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

  const openImagePreview = (src) => {
    setModalImageSrc(src);
    setShowModal(true);
  };

  const closeImagePreview = () => {
    setModalImageSrc("");
    setShowModal(false);
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
        {/* Back button */}
        <a
          href="/portfolio"
          className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          {t?.backToCases}
        </a>

        {/* Case Study Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              {caseStudy?.title?.[lang]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {caseStudy?.subtitle?.[lang]}
          </p>
        </div>

        {hasScreenshots && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-300">
              {t?.viewScreenshots}
            </h2>
            {/* THIS DIV MUST HAVE THE 'relative' CLASS for buttons to position correctly */}
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              {/* Current Screenshot Container */}
              <div className="flex justify-center items-center mb-4 w-full max-w-4xl mx-auto h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-gray-800 rounded-lg overflow-hidden">
                <div
                  className="block w-full h-full flex justify-center items-center cursor-pointer"
                  onClick={() => openImagePreview(currentScreenshot?.src)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Open preview of image: ${
                    currentScreenshot?.alt?.[lang] || "Screenshot"
                  }`}
                >
                  <img
                    src={currentScreenshot?.src}
                    alt={
                      currentScreenshot?.alt?.[lang] ||
                      `${t?.screenshot} ${currentScreenshotIndex + 1}`
                    }
                    className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              {/* LEFT (Previous) Button */}
              <div className="absolute top-1/2 left-[32px] transform -translate-y-1/2">
                <button
                  onClick={goToPreviousSlide}
                  className="bg-blue-700/50 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                  <span className="sr-only">{t?.previous}</span>
                </button>
              </div>

              {/* RIGHT (Next) Button */}
              <div className="absolute top-1/2 right-[32px] transform -translate-y-1/2">
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
                {caseStudy?.overview?.[lang]}
              </p>
            </section>

            {/* Challenge */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                {t?.challenge}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy?.challenge?.[lang]}
              </p>
            </section>

            {/* Solution */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-pink-300">
                {t?.solution}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy?.solution?.[lang]}
              </p>
            </section>

            {/* Key Features (if applicable) */}
            {caseStudy?.features?.length > 0 && (
              <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-green-300">
                  {t?.features}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {caseStudy.features.map((feature, index) => (
                    <li key={index}>{feature?.[lang]}</li>
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
                {caseStudy?.results?.map((result, index) => (
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
                    <span>{result?.[lang]}</span>
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
                "{caseStudy?.testimonial?.[lang]}"
              </blockquote>
              <p className="text-gray-400 text-sm">— {caseStudy?.client}</p>
            </section>

            {/* PDF Report Link (if applicable) */}
            {caseStudy?.documentUrl && (
              <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <h2 className="text-xl font-bold mb-4 text-blue-300">
                  View Full Report
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
                  Download PDF
                </a>
              </section>
            )}
          </div>
        </div>

        {/* Next Case Study */}
        <section className="text-center border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-8">{t?.nextCase}</h2>
          {/* You'll need to dynamically link to the next case study */}
          <a
            href="/portfolio" // Or a function to get the next case study ID
            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition duration-300"
          >
            Explore More Case Studies
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
          onClick={closeImagePreview} // Close when clicking on the dimmed background
        >
          <div
            className="relative max-w-full max-h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image itself
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
      <FloatingButtons
        lang={lang}
        setLang={setLang}
        showQuoteModal={showQuoteModal}
        setShowQuoteModal={setShowQuoteModal}
      />
    </section>
  );
}
