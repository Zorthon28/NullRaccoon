import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ScrollLogo from "../components/ScrollLogo";
import { Helmet } from "react-helmet-async";
import Header from "../components/HeaderHero";
import Guarantees from "../components/Guarantees";
import { ArrowUpRight, Clock3, Smartphone, Search, MessageCircle, CreditCard, ShoppingBag, Package, Users, CalendarDays, LayoutDashboard, ShieldCheck, DatabaseBackup, Headphones, Languages, Globe, Activity } from "lucide-react";
import "./Services.css";

const serviceVisuals = {
  "custom-websites": { accent: "blue", image: "/images/restaurant.png", project: "Restaurant Platform", href: "https://restaurant.nullraccoon.com/", interactive: true, icons: [Smartphone, Search, MessageCircle] },
  "ecommerce-solutions": { accent: "green", image: "/images/store-showroom-preview.jpg", project: "NullRaccoon Store", href: "/store/products", interactive: true, icons: [CreditCard, ShoppingBag, Package] },
  "web-applications": { accent: "purple", image: "/images/Reports.png", project: "MedTech Premier", href: "/case-study/medtech-premier", interactive: false, icons: [Users, CalendarDays, LayoutDashboard] },
  "maintenance-support": { accent: "teal", icons: [ShieldCheck, DatabaseBackup, Headphones] },
};

export default function Services({ lang, t }) {
  const { hash } = useLocation();
  const selectedService = hash.slice(1);
  const servicesUrl = "https://www.nullraccoon.com/services";
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "view_services", {
        event_category: "navigation",
        event_label: "Services Page Viewed",
      });
    }
  }, []);

  const services =
    lang === "es"
      ? [
          {
            id: "custom-websites",
            title: "Webs que generan clientes",
            highlights: ["Responsive","SEO","WhatsApp"],
            description:
              "Sitios rápidos y responsivos que fortalecen tu marca y convierten visitas en clientes mediante WhatsApp y formularios.",
            features: [
              "Diseño responsivo para móvil y desktop",
              "Optimización SEO integral",
              "Diseño orientado a conversión",
              "CMS personalizado",
              "Captación por WhatsApp y formularios",
              "Certificado SSL incluido",
            ],
            idealFor: "Para clínicas, consultores y negocios locales.",
            timeline: "5–10 días hábiles",
          },
          {
            id: "ecommerce-solutions",
            title: "Tiendas que venden",
            highlights: ["Pagos seguros","Compra fácil","Inventario"],
            description:
              "Experiencias de compra fluidas, checkout sin fricción y control de inventario para vender con menos tareas manuales.",
            features: [
              "Catálogo de productos dinámico",
              "Carrito de compras inteligente",
              "Integración de pagos (Stripe, PayPal)",
              "Control de inventario y administración",
              "Seguimiento de pedidos",
              "Reportes de ventas",
            ],
            idealFor: "Para marcas que quieren vender en línea.",
            timeline: "2–3 semanas",
          },
          {
            id: "web-applications",
            title: "Sistemas a tu medida",
            highlights: ["Portales","Citas","Dashboards"],
            description:
              "Portales de clientes, sistemas de citas y herramientas internas para digitalizar y automatizar tu operación.",
            features: [
              "Arquitectura a la medida de tu operación",
              "Portales de clientes y equipos internos",
              "Reservas y flujos automatizados",
              "Panel de control intuitivo",
              "Autenticación segura",
              "Análisis y reportes",
            ],
            idealFor: "Para empresas que quieren automatizar procesos.",
            timeline: "MVP por fases",
          },
          {
            id: "maintenance-support",
            title: "Soporte y seguridad",
            highlights: ["Seguridad","Respaldos","Soporte"],
            description:
              "Monitoreo, mantenimiento preventivo y respaldos para que puedas concentrarte en tu negocio con tranquilidad.",
            features: [
              "Actualizaciones de seguridad",
              "Copias de seguridad automáticas",
              "Monitoreo de rendimiento",
              "Soporte bilingüe según contrato",
              "Actualizaciones de contenido",
              "Optimización de velocidad",
            ],
            idealFor: "Para negocios que quieren delegar el cuidado de su web.",
            timeline: "Inicio en 48 horas",
          },
        ]
      : [
          {
            id: "custom-websites",
            title: "Websites that win customers",
            highlights: ["Responsive","SEO","WhatsApp"],
            description:
              "Fast, responsive websites that strengthen your brand and turn visits into customers through WhatsApp and forms.",
            features: [
              "Mobile & desktop responsive design",
              "Comprehensive SEO optimization",
              "Conversion-focused design",
              "Custom CMS",
              "WhatsApp & form lead capture",
              "SSL certificate included",
            ],
            idealFor: "For clinics, consultants, and local businesses.",
            timeline: "5–10 business days",
          },
          {
            id: "ecommerce-solutions",
            title: "Stores that sell",
            highlights: ["Secure payments","Easy shopping","Inventory"],
            description:
              "Smooth shopping experiences, frictionless checkout, and inventory control to sell with less manual work.",
            features: [
              "Dynamic product catalog",
              "Smart shopping cart",
              "Payment integration (Stripe, PayPal)",
              "Inventory & admin controls",
              "Order tracking",
              "Sales reports",
            ],
            idealFor: "For brands ready to sell online.",
            timeline: "2–3 weeks",
          },
          {
            id: "web-applications",
            title: "Systems built for you",
            highlights: ["Portals","Bookings","Dashboards"],
            description:
              "Customer portals, booking systems, and internal tools to digitize and automate your operations.",
            features: [
              "Architecture tailored to your operations",
              "Customer & internal team portals",
              "Bookings & automated workflows",
              "Intuitive control panel",
              "Secure authentication",
              "Analytics & reporting",
            ],
            idealFor: "For businesses ready to automate manual work.",
            timeline: "Phased MVP delivery",
          },
          {
            id: "maintenance-support",
            title: "Support & security",
            highlights: ["Security","Backups","Support"],
            description:
              "Monitoring, preventive maintenance, and backups so you can focus on your business with peace of mind.",
            features: [
              "Security updates",
              "Automatic backups",
              "Performance monitoring",
              "Bilingual support under your service agreement",
              "Content updates",
              "Speed optimization",
            ],
            idealFor: "For businesses that want their website taken care of.",
            timeline: "Starts in 48 hours",
          },
        ];

  const pageTitle =
    lang === "es"
      ? "NullRaccoon | Desarrollo Web y Sistemas Digitales"
      : "NullRaccoon | Web Platforms & Digital Systems";

  const pageDescription =
    lang === "es"
      ? "Estudio de desarrollo web y sistemas digitales: plataformas de alta conversión, comercio electrónico, sistemas de citas y gestión, con entrega llave en mano y soporte bilingüe."
      : "Web development and digital systems studio: high-conversion platforms, e-commerce, booking and management systems, with turnkey delivery and bilingual support.";

  const faqs = [
    {
      "@type": "Question",
      name: lang === "es" ? "¿Cuándo empieza el plazo de entrega?" : "When does the delivery timeline start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: lang === "es"
          ? "El plazo comienza al aprobar el alcance y recibir contenidos y accesos. En sistemas a la medida, acordamos las fases y el MVP funcional contigo."
          : "Timelines begin after scope approval and receipt of content and access. For custom systems, we agree on the phases and functional MVP with you.",
      },
    },
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
  ];

  const getWhatsAppUrl = (service) => {
    const message = lang === "es"
      ? service
        ? `Hola, me interesa cotizar el servicio "${service.title}". ¿Podemos conversar sobre mi proyecto?`
        : "Hola, me gustaría agendar una llamada de 15 minutos para conversar sobre mi proyecto."
      : service
        ? `Hi, I'd like a quote for "${service.title}". Can we discuss my project?`
        : "Hi, I'd like to schedule a 15-minute call to discuss my project.";
    return `https://wa.me/526645789729?text=${encodeURIComponent(message)}`;
  };

  const trackWhatsAppClick = (service) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "request_quote", {
        event_category: "engagement",
        event_label: service ? `WhatsApp: ${service.title}` : "WhatsApp: Discovery Call",
      });
    }
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
                serviceType: "Software Development Agency / Web Studio",
                description: service.description,
                provider: {
                  "@type": "ProfessionalService",
                  name: "NullRaccoon",
                  url: "https://www.nullraccoon.com",
                },
                audience: {
                  "@type": "BusinessAudience",
                  audienceType: service.idealFor,
                },
              },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs,
          })}
        </script>
      </Helmet>
      <section className="relative min-h-screen bg-slate-950 text-white">
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

        <Header t={t} heroLogo />

        <div data-logo-hero className="services-hero services-width">
          <div className="services-hero-copy">
            <p className="services-eyebrow">NullRaccoon</p>
            <h1>{lang === "es" ? <>¿Qué quieres mejorar<br /><span>en tu negocio?</span></> : <>What would you like<br /><span>to improve?</span></>}</h1>
            <p className="services-intro">{lang === "es" ? "Elige una solución para captar clientes, vender o simplificar tu operación." : "Choose a solution to win customers, sell online, or simplify operations."}</p>
            <a href={getWhatsAppUrl()} onClick={() => trackWhatsAppClick()} target="_blank" rel="noopener noreferrer" className="services-primary-cta">
              <MessageCircle size={19} aria-hidden="true" />
              {lang === "es" ? "Hablemos de tu proyecto" : "Let’s discuss your project"}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="services-mascot" aria-hidden="true">
            <div className="services-mascot-orbit" />
            <ScrollLogo className="services-logo-anchor" />
            <span className="services-mascot-tag services-mascot-tag-web"><Globe size={18} /> Web</span>
            <span className="services-mascot-tag services-mascot-tag-systems"><LayoutDashboard size={18} /> {lang === "es" ? "Sistemas" : "Systems"}</span>
          </div>
        </div>
        <ul className="services-trust services-width" aria-label={lang === "es" ? "Cómo trabajamos" : "How we work"}>
          <li><Clock3 aria-hidden="true" /><span>{lang === "es" ? "Webs en 5–10 días hábiles" : "Websites in 5–10 business days"}</span></li>
          <li><Languages aria-hidden="true" /><span>{lang === "es" ? "Soporte bilingüe" : "Bilingual support"}</span></li>
          <li><CreditCard aria-hidden="true" /><span>Stripe & PayPal</span></li>
          <li><Headphones aria-hidden="true" /><span>{lang === "es" ? "Soporte: inicio en 48 h" : "Support: starts in 48 h"}</span></li>
        </ul>

        {["custom-websites", "ecommerce-solutions", "web-applications", "maintenance-support"].includes(selectedService) && <div className="service-selection services-width" role="status"><span>{lang === "es" ? "Resaltamos la solución que elegiste." : "We’ve highlighted the solution you chose."}</span><Link to="/services">{lang === "es" ? "Ver todas por igual" : "Clear selection"}</Link></div>}
        <div className="services-grid services-width">
          {services.map((service) => {
            const visual = serviceVisuals[service.id];
            return (
              <article key={service.id} id={service.id} aria-labelledby={service.id + "-title"} data-selected={selectedService === service.id ? "true" : undefined} className={`service-card service-accent-${visual.accent}`}>
                <div className="service-timeline"><Clock3 size={14} aria-hidden="true" />{service.timeline}</div>
                <figure className="service-visual">
                  {visual.image ? (
                    <>
                      <a href={visual.href} className="service-browser" target={visual.interactive ? "_blank" : undefined} rel={visual.interactive ? "noopener noreferrer" : undefined} aria-label={visual.interactive ? (lang === "es" ? `Probar demo: ${visual.project}, abre en una nueva pestaña` : `Try demo: ${visual.project}, opens in a new tab`) : (lang === "es" ? `Ver caso de estudio: ${visual.project}` : `Read case study: ${visual.project}`)}>
                        <div className="service-browser-chrome" aria-hidden="true"><i /><i /><i /><span>{visual.project}</span><ArrowUpRight size={12} /></div>
                        <img src={visual.image} alt={lang === "es" ? `Captura del proyecto ${visual.project}` : `Screenshot of ${visual.project}`} loading="lazy" width="600" height="330" />
                      </a>
                      <figcaption><a href={visual.href} target={visual.interactive ? "_blank" : undefined} rel={visual.interactive ? "noopener noreferrer" : undefined}>{visual.interactive ? (lang === "es" ? "Probar demo · nueva pestaña" : "Try demo · new tab") : (lang === "es" ? "Ver caso de estudio" : "Read case study")}<ArrowUpRight size={14} aria-hidden="true" /></a></figcaption>
                    </>
                  ) : (
                    <div className="service-support-art" role="img" aria-label={lang === "es" ? "Seguridad, monitoreo y respaldos" : "Security, monitoring, and backups"}>
                      <div className="service-shield"><ShieldCheck size={66} strokeWidth={1.3} aria-hidden="true" /></div>
                      <div className="service-support-signal"><Activity size={18} aria-hidden="true" /><span>{lang === "es" ? "Monitoreo continuo" : "Ongoing monitoring"}</span></div>
                      <div className="service-support-backup"><DatabaseBackup size={17} aria-hidden="true" /><span>{lang === "es" ? "Respaldo y recuperación" : "Backup & recovery"}</span></div>
                    </div>
                  )}
                </figure>
                <div className="service-card-content">
                  <h2 id={service.id + "-title"}>{service.title}</h2>
                  <p className="service-audience">{service.idealFor}</p>
                  <ul className="service-pills">
                    {service.highlights.map((highlight, index) => {
                      const Icon = visual.icons[index];
                      return <li key={highlight}><Icon size={15} aria-hidden="true" />{highlight}</li>;
                    })}
                  </ul>
                  <details className="service-details">
                    <summary>{lang === "es" ? "Ver detalles" : "View details"}</summary>
                    <p>{service.description}</p>
                    <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </details>
                  <a href={getWhatsAppUrl(service)} onClick={() => trackWhatsAppClick(service)} target="_blank" rel="noopener noreferrer" className="service-card-cta">
                    {lang === "es" ? "Hablemos por WhatsApp" : "Let’s talk on WhatsApp"}<ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
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
                    ? "Acordamos objetivos, alcance, calendario y contrato de prestación de servicios."
                    : "We agree on goals, scope, delivery dates, and a service agreement.",
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
                    ? "Desarrollamos tu plataforma, conectamos integraciones y verificamos seguridad y rendimiento."
                    : "We build your platform, connect integrations, and verify security and performance.",
              },
              {
                step: "04",
                title: lang === "es" ? "Lanzamiento" : "Launch",
                desc:
                  lang === "es"
                    ? "Validamos contigo, desplegamos llave en mano y coordinamos tu plan de mantenimiento."
                    : "We validate with you, deliver a turnkey launch, and arrange your maintenance plan.",
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

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <Guarantees t={t} />
        </div>

        <section aria-labelledby="services-faq-title" className="relative z-10 px-6 py-12 max-w-5xl mx-auto">
          <h2 id="services-faq-title" className="text-3xl font-bold mb-8">
            {lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.name} className="border-t border-gray-800 pt-4">
                <summary className="cursor-pointer text-lg font-semibold text-blue-200 py-2">{faq.name}</summary>
                <p className="text-gray-300 leading-relaxed pt-3">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="relative z-10 px-6 py-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es"
              ? "¿Listo para transformar tu negocio?"
              : "Ready to transform your business?"}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {lang === "es"
              ? "Cuéntanos qué necesitas resolver. Definimos una solución con alcance claro, contrato y facturación disponible."
              : "Tell us what you need to solve. We define a solution with a clear scope, a service agreement, and invoicing available."}
          </p>
          <a
            href={getWhatsAppUrl()}
            onClick={() => trackWhatsAppClick()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105 transform duration-300"
          >
            {lang === "es" ? "Agendar Llamada de 15 Min" : "Schedule a 15-Minute Call"}
          </a>
        </div>
      </section>
    </>
  );
}
