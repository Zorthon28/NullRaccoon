import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/HeaderHero";

export default function Services({ lang, t, setShowQuoteModal }) {
  const servicesUrl = "https://www.nullraccoon.com/services";
  const [usdToMxnRate, setUsdToMxnRate] = useState(17.86);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();

        if (data?.rates?.MXN && Number.isFinite(data.rates.MXN)) {
          setUsdToMxnRate(data.rates.MXN);
        }
      } catch {
        // Keep fallback rate if request fails
      }
    };

    fetchRate();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "view_services", {
        event_category: "navigation",
        event_label: "Services Page Viewed",
      });
    }
  }, []);

  const formatPrettyUsdFromMxn = (mxnAmount) => {
    const rawUsd = mxnAmount / usdToMxnRate;
    const prettyUsd = Math.ceil(rawUsd / 5) * 5;

    return prettyUsd.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const toPrettyUsdNumber = (mxnAmount) => {
    const rawUsd = mxnAmount / usdToMxnRate;
    return Math.ceil(rawUsd / 5) * 5;
  };

  const services =
    lang === "es"
      ? [
          {
            id: "custom-websites",
            title: "Sitios Web Personalizados",
            description:
              "Diseño y desarrollo de sitios web profesionales, modernos y responsivos que convierten visitantes en clientes.",
            features: [
              "Diseño responsivo para móvil y desktop",
              "Optimización SEO integral",
              "Diseño moderno y atractivo",
              "CMS personalizado",
              "Integración de formularios y contacto",
              "Certificado SSL incluido",
            ],
            price: "Desde $2,500 MXN",
            startingPriceMxn: 2500,
            timeline: "3-5 semanas",
          },
          {
            id: "ecommerce-solutions",
            title: "Soluciones de Comercio Electrónico",
            description:
              "Tiendas en línea completas con carrito de compras, pasarela de pago integrada y panel de administración.",
            features: [
              "Catálogo de productos dinámico",
              "Carrito de compras inteligente",
              "Integración de pagos (Stripe, PayPal)",
              "Panel admin completo",
              "Seguimiento de pedidos",
              "Reportes de ventas",
            ],
            price: "Desde $5,000 MXN",
            startingPriceMxn: 5000,
            timeline: "6-10 semanas",
          },
          {
            id: "web-applications",
            title: "Aplicaciones Web Personalizadas",
            description:
              "Aplicaciones web robustas y escalables diseñadas específicamente para tu negocio.",
            features: [
              "Arquitectura escalable",
              "Base de datos optimizada",
              "API REST robusta",
              "Panel de control intuitivo",
              "Autenticación segura",
              "Análisis y reportes",
            ],
            price: "Desde $8,000 MXN",
            startingPriceMxn: 8000,
            timeline: "10-16 semanas",
          },
          {
            id: "maintenance-support",
            title: "Mantenimiento y Soporte",
            description:
              "Servicios continuos de mantenimiento, actualizaciones y soporte técnico para tu sitio.",
            features: [
              "Actualizaciones de seguridad",
              "Copias de seguridad automáticas",
              "Monitoreo de rendimiento",
              "Soporte técnico 24/7",
              "Actualizaciones de contenido",
              "Optimización de velocidad",
            ],
            price: "Desde $1,000 MXN/mes",
            startingPriceMxn: 1000,
            timeline: "Inicio en 48 horas",
          },
        ]
      : [
          {
            id: "custom-websites",
            title: "Custom Website Development",
            description:
              "Professional, modern, and responsive website design and development that converts visitors into customers.",
            features: [
              "Mobile & desktop responsive design",
              "Comprehensive SEO optimization",
              "Modern & attractive design",
              "Custom CMS",
              "Forms & contact integration",
              "SSL certificate included",
            ],
            price: `Starting at $${formatPrettyUsdFromMxn(2500)} USD`,
            startingPriceMxn: 2500,
            timeline: "3-5 weeks",
          },
          {
            id: "ecommerce-solutions",
            title: "E-Commerce Solutions",
            description:
              "Complete online stores with shopping cart, integrated payment gateway, and administration panel.",
            features: [
              "Dynamic product catalog",
              "Smart shopping cart",
              "Payment integration (Stripe, PayPal)",
              "Complete admin panel",
              "Order tracking",
              "Sales reports",
            ],
            price: `Starting at $${formatPrettyUsdFromMxn(5000)} USD`,
            startingPriceMxn: 5000,
            timeline: "6-10 weeks",
          },
          {
            id: "web-applications",
            title: "Custom Web Applications",
            description:
              "Robust and scalable web applications specifically designed for your business needs.",
            features: [
              "Scalable architecture",
              "Optimized database",
              "Robust REST API",
              "Intuitive control panel",
              "Secure authentication",
              "Analytics & reporting",
            ],
            price: `Starting at $${formatPrettyUsdFromMxn(8000)} USD`,
            startingPriceMxn: 8000,
            timeline: "10-16 weeks",
          },
          {
            id: "maintenance-support",
            title: "Maintenance & Support",
            description:
              "Continuous maintenance, updates, and technical support services for your website.",
            features: [
              "Security updates",
              "Automatic backups",
              "Performance monitoring",
              "24/7 technical support",
              "Content updates",
              "Speed optimization",
            ],
            price: `Starting at $${formatPrettyUsdFromMxn(1000)} USD/month`,
            startingPriceMxn: 1000,
            timeline: "Onboarding in 48 hours",
          },
        ];

  const pageTitle =
    lang === "es"
      ? "Servicios de Desarrollo Web | NullRaccoon"
      : "Web Development Services | NullRaccoon";

  const pageDescription =
    lang === "es"
      ? "Servicios completos de desarrollo web: sitios personalizados, tiendas en línea, aplicaciones web y soporte continuo. Expertos en React, diseño responsivo y SEO."
      : "Complete web development services: custom websites, e-commerce, web applications, and ongoing support. React experts specializing in responsive design and SEO.";

  const openQuoteWithService = (service) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "request_quote", {
        event_category: "engagement",
        event_label: `Service Quote Click: ${service.title}`,
      });
    }

    const message =
      lang === "es"
        ? `Hola, me interesa el servicio "${service.title}" (${service.price}, ${service.timeline}).`
        : `Hi, I'm interested in the "${service.title}" service (${service.price}, ${service.timeline}).`;

    localStorage.setItem("quote_prefill_message", message);
    setShowQuoteModal(true);
  };

  const openGenericQuote = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "request_quote", {
        event_category: "engagement",
        event_label: "Generic Quote Click",
      });
    }

    localStorage.removeItem("quote_prefill_message");
    setShowQuoteModal(true);
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={servicesUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={servicesUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.nullraccoon.com/logo192.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={servicesUrl} />
        <meta
          name="twitter:image"
          content="https://www.nullraccoon.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "ProfessionalService",
                  name: "NullRaccoon",
                  url: "https://www.nullraccoon.com",
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: lang === "es" ? "MXN" : "USD",
                  price:
                    lang === "es"
                      ? service.startingPriceMxn
                      : toPrettyUsdNumber(service.startingPriceMxn),
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name:
                  lang === "es"
                    ? "¿Qué incluye el desarrollo web?"
                    : "What's included in web development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    lang === "es"
                      ? "Nuestros servicios incluyen diseño, desarrollo, pruebas, despliegue y soporte inicial. Todos los sitios son responsivos y optimizados para SEO."
                      : "Our web development services include design, development, testing, deployment, and initial support. All websites are mobile-responsive and SEO-optimized.",
                },
              },
              {
                "@type": "Question",
                name:
                  lang === "es"
                    ? "¿Ofrecen hosting y dominio?"
                    : "Do you offer hosting and domain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    lang === "es"
                      ? "Sí, podemos ayudarte con configuración de hosting y dominio según las necesidades de tu proyecto."
                      : "Yes, we can help set up hosting and domain based on your project's needs.",
                },
              },
              {
                "@type": "Question",
                name:
                  lang === "es"
                    ? "¿Pueden rediseñar un sitio existente?"
                    : "Can you redesign my existing website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    lang === "es"
                      ? "Sí, realizamos rediseños enfocados en mejorar experiencia de usuario, conversión y rendimiento SEO."
                      : "Absolutely. We handle redesigns focused on better UX, conversion rate, and SEO performance.",
                },
              },
              {
                "@type": "Question",
                name:
                  lang === "es"
                    ? "¿Cuál es la diferencia entre sitio web y aplicación web?"
                    : "What's the difference between a website and a web app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    lang === "es"
                      ? "Un sitio web suele ser informativo. Una aplicación web es más interactiva e incluye lógica de negocio para tareas específicas."
                      : "Websites are usually informational, while web applications are interactive and include business logic for specific workflows.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
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

        <Header t={t} pageType="services" />

        {/* Hero Section */}
        <div className="relative z-10 px-6 py-16 text-center max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              {lang === "es" ? "Servicios Web" : "Web Services"}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === "es"
              ? "Soluciones web completas adaptadas a tu negocio"
              : "Complete web solutions tailored for your business"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 px-6 py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col"
              >
                <h2 className="text-lg font-bold text-blue-300 mb-2 leading-snug">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                    {lang === "es" ? "Características" : "Features"}
                  </h3>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <svg
                          className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-3 mb-3 mt-auto">
                  <div className="flex justify-between items-end gap-3">
                    <div>
                      <p className="text-xs text-gray-400">
                        {lang === "es" ? "Precio base" : "Base price"}
                      </p>
                      <p className="text-lg font-bold text-blue-300">
                        {service.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">
                        {lang === "es"
                          ? "Tiempo estimado"
                          : "Estimated timeline"}
                      </p>
                      <p className="text-sm font-semibold text-purple-300">
                        {service.timeline}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openQuoteWithService(service)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all hover:scale-[1.02] transform duration-300"
                >
                  {lang === "es" ? "Solicitar Cotización" : "Request Quote"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="relative z-10 px-6 py-16 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              {lang === "es" ? "Nuestro Proceso" : "Our Process"}
            </span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: lang === "es" ? "Consulta" : "Consultation",
                desc:
                  lang === "es"
                    ? "Definimos objetivos, alcance, presupuesto y plan de trabajo claro"
                    : "We define goals, scope, budget, and a clear project plan",
              },
              {
                step: "02",
                title: lang === "es" ? "Diseño" : "Design",
                desc:
                  lang === "es"
                    ? "Creamos wireframes y diseño visual enfocado en conversión"
                    : "We create wireframes and visual design focused on conversion",
              },
              {
                step: "03",
                title: lang === "es" ? "Desarrollo" : "Development",
                desc:
                  lang === "es"
                    ? "Construimos el sitio, conectamos integraciones y optimizamos velocidad"
                    : "We build the site, connect integrations, and optimize performance",
              },
              {
                step: "04",
                title: lang === "es" ? "Lanzamiento" : "Launch",
                desc:
                  lang === "es"
                    ? "Hacemos QA final, publicamos y te entregamos soporte inicial"
                    : "We run final QA, launch, and provide initial post-launch support",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative z-10 px-6 py-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es"
              ? "¿Listo para transformar tu negocio?"
              : "Ready to transform your business?"}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {lang === "es"
              ? "Contáctanos hoy para una consulta gratuita y descubre cómo podemos ayudarte."
              : "Contact us today for a free consultation and discover how we can help."}
          </p>
          <button
            onClick={openGenericQuote}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105 transform duration-300"
          >
            {lang === "es" ? "Empezar Ahora" : "Get Started Now"}
          </button>
        </div>
      </section>
    </>
  );
}
