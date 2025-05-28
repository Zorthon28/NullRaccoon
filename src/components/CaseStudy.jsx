import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FloatingButtons from "./FloatingButtons";

const translations = {
  en: {
    backToCases: "Back to Case Studies",
    viewDemo: "View Live Demo",
    overview: "Project Overview",
    challenge: "The Challenge",
    solution: "Our Solution",
    technologies: "Technologies Used",
    results: "Key Results",
    testimonial: "Client Testimonial",
    nextCase: "Next Case Study",
  },
  es: {
    backToCases: "Volver a Casos de Estudio",
    viewDemo: "Ver Demo en Vivo",
    overview: "Resumen del Proyecto",
    challenge: "El Desafío",
    solution: "Nuestra Solución",
    technologies: "Tecnologías Utilizadas",
    results: "Resultados Clave",
    testimonial: "Testimonio del Cliente",
    nextCase: "Siguiente Caso de Estudio",
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
  },
  // Add more case studies as needed
];

export default function CaseStudy() {
  const [lang, setLang] = useState("en");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const { caseId } = useParams();
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === caseId);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLang(userLang.startsWith("es") ? "es" : "en");
  }, []);

  if (!caseStudy) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        <div className="text-center">
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

  const t = translations[lang];

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
          {t.backToCases}
        </a>

        {/* Case Study Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              {caseStudy.title[lang]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {caseStudy.subtitle[lang]}
          </p>
        </div>

        {/* Demo CTA */}
        <div className="flex justify-center mb-20 animate-fade-in-up">
          <a
            href={caseStudy.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300 inline-flex items-center"
          >
            {t.viewDemo}
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

        {/* Case Study Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Main content */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">
                {t.overview}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.overview[lang]}
              </p>
            </section>

            {/* Challenge */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                {t.challenge}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.challenge[lang]}
              </p>
            </section>

            {/* Solution */}
            <section className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-pink-300">
                {t.solution}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.solution[lang]}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h2 className="text-xl font-bold mb-4 text-blue-300">
                {t.technologies}
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
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
                {t.results}
              </h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
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
                    <span>{result[lang]}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Testimonial */}
            <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h2 className="text-xl font-bold mb-4 text-pink-300">
                {t.testimonial}
              </h2>
              <blockquote className="text-gray-300 italic mb-2">
                "{caseStudy.testimonial[lang]}"
              </blockquote>
              <p className="text-gray-400 text-sm">— {caseStudy.client}</p>
            </section>
          </div>
        </div>

        {/* Next Case Study */}
        <section className="text-center border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-8">{t.nextCase}</h2>
          <a
            href="/case-study/medical-app" // Update with your actual next case study URL
            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition duration-300"
          >
            Medical Web App
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
      <FloatingButtons
        lang={lang}
        setLang={setLang}
        showQuoteModal={showQuoteModal}
        setShowQuoteModal={setShowQuoteModal}
      />
    </section>
  );
}
