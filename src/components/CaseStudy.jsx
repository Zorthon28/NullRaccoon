import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Expand, QrCode, CalendarDays, Database, FileText } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Header from "./HeaderHero";
import NotFound from "../pages/NotFound";
import MedTechCaseStudy from "./MedTechCaseStudy";
import { whatsappUrl } from "../utils/contact";
import "../pages/CaseStudy.css";
const translated = (t, key) => key?.split(".").reduce((value, part) => value?.[part], t) || "";

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
    isDemo: true,
    technologies: ["React", "React Router", "Context API", "Tailwind CSS"],
    demoUrl: "/store",
    imageUrl: "/images/store-showroom-preview.jpg",
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
    client: "Centro Médico Premier, Tijuana",
    imageUrl: "/images/medtech-premier-thumbnail.png",
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

export default function CaseStudy({ lang, setLang, t }) {
  const { caseId } = useParams();
  const project = caseStudies.find(item => item.id === caseId);
  const [activeImage, setActiveImage] = useState(null);
  useEffect(() => { setActiveImage(null); }, [caseId]);
  const es = lang === "es";
  if (!project) return <NotFound lang={lang} t={t} />;
  if (project.id === "medtech-premier") return <MedTechCaseStudy lang={lang} setLang={setLang} t={t} project={project} />;
  const screenshots = project.screenshots || [];
  const title = translated(t, project.titleKey);
  const featuredIndex = 3;
  const openScreenshot = (index) => <button type="button" className="case-image-button" onClick={() => setActiveImage(index)} aria-label={(es ? "Ampliar captura: " : "Enlarge screenshot: ") + translated(t, screenshots[index].altKey)}><img src={screenshots[index].src} alt={translated(t, screenshots[index].altKey)} loading="lazy" width="1200" height="700" /><span><Expand size={16} aria-hidden="true" />{es ? "Ampliar captura" : "Enlarge screenshot"}</span></button>;
  const renderScreen = (index) => <figure className="case-gallery-item" key={screenshots[index].src}>{openScreenshot(index)}<figcaption><h3>{translated(t, screenshots[index].altKey)}</h3><p>{translated(t, screenshots[index].descriptionKey)}</p></figcaption></figure>;
  return <main className="studio-page case-page"><Helmet><title>{project.isDemo ? title : "MedTech Premier"} | NullRaccoon</title><meta name="description" content={translated(t, project.overviewKey)} /><meta property="og:title" content={(project.isDemo ? title : "MedTech Premier") + " | NullRaccoon"} /><meta property="og:description" content={translated(t, project.overviewKey)} /><meta name="robots" content={project.isDemo ? "noindex, follow" : "index, follow"} /><link rel="canonical" href={"https://www.nullraccoon.com/case-study/" + project.id} /></Helmet><Header t={t} />
    <section className="case-hero studio-container">
      <div><a href="/projects" className="studio-text-link">← {es ? "Todos los proyectos" : "All projects"}</a><p className="studio-eyebrow">{project.isDemo ? (es ? "Demostración de comercio electrónico" : "E-commerce demonstration") : "MedTech Premier · " + (es ? "Proyecto de cliente" : "Client project")}</p>
        <h1>{project.isDemo ? (es ? "Una experiencia de compra, de principio a carrito." : "A shopping experience, from browsing to cart.") : (es ? "Equipo médico conectado. Operaciones bajo control." : "Connected equipment. Operations under control.")}</h1>
        <p className="case-intro">{project.isDemo ? (es ? "Explora cómo conectamos catálogo, productos y carrito en una tienda de muestra." : "Explore how we connect catalog, products, and cart in a sample store.") : (es ? "Un sistema para que Centro Médico Premier centralice sus equipos, consulte su historial por QR y coordine el mantenimiento desde un solo lugar." : "One system for Centro Médico Premier to centralize equipment, access its history by QR, and coordinate maintenance in one place.")}</p>
        <div className="studio-actions">{project.isDemo ? <a className="studio-button" href="/store/products" target="_blank" rel="noopener noreferrer">{es ? "Probar demo · nueva pestaña" : "Try demo · new tab"}<ArrowUpRight size={18} /></a> : <a className="studio-button" href="#case-story">{es ? "Conocer la solución" : "Explore the solution"} ↓</a>}<a className="studio-text-link" href={project.isDemo ? "#case-story" : "#case-screens"}>{es ? "Cómo funciona" : "How it works"} ↓</a></div>
      </div>
      <aside className="case-brief" aria-label={es ? "Resumen del proyecto" : "Project brief"}><dl><div><dt>{es ? "Proyecto" : "Project"}</dt><dd>{project.isDemo ? (es ? "Demo con datos de muestra" : "Demo with sample data") : project.client}</dd></div><div><dt>{es ? "Qué desarrollamos" : "What we built"}</dt><dd>{project.isDemo ? (es ? "Catálogo, productos y carrito" : "Catalog, products, and cart") : (es ? "Inventario, mantenimiento y trazabilidad QR" : "Inventory, maintenance, and QR tracking")}</dd></div><div><dt>{es ? "Tecnología" : "Technology"}</dt><dd>{project.isDemo ? "React · Context API" : "PHP · MySQL · JavaScript"}</dd></div></dl>{project.isDemo ? <p>{es ? "No procesa pedidos ni pagos reales. No representa resultados de un cliente." : "No real orders or payments. This does not represent client results."}</p> : <a href={project.documentUrl} target="_blank" rel="noopener noreferrer" className="studio-text-link"><FileText size={17} />{es ? "Leer informe del proyecto (PDF)" : "Read project report (PDF)"}<ArrowUpRight size={16} /></a>}</aside>
    </section>
    <section id="case-story" className="studio-container case-story"><div><p className="studio-eyebrow">01 / {es ? "El problema" : "The problem"}</p><h2>{es ? "De procesos dispersos…" : "From fragmented workflows…"}</h2><p>{translated(t, project.challengeKey)}</p></div><div><p className="studio-eyebrow">02 / {es ? "La solución" : "The solution"}</p><h2>{es ? "…a una operación conectada." : "…to a connected operation."}</h2><p>{translated(t, project.solutionKey)}</p></div></section>
    <section className="studio-container case-capabilities" aria-label={es ? "Capacidades entregadas" : "Delivered capabilities"}>{(project.isDemo ? [[Database, es ? "Catálogo navegable" : "Browsable catalog"], [CalendarDays, es ? "Carrito interactivo" : "Interactive cart"], [QrCode, es ? "Datos de muestra" : "Sample data"]] : [[Database, es ? "Inventario centralizado" : "Centralized inventory"], [QrCode, es ? "Historial al escanear un QR" : "Scan a QR to access history"], [CalendarDays, es ? "Mantenimiento organizado" : "Organized maintenance"]]).map(([Icon, text]) => <div key={text}><Icon size={24} aria-hidden="true" /><h3>{text}</h3></div>)}</section>
    <section id="case-screens" className="studio-container studio-section"><div className="studio-section-heading"><div><p className="studio-eyebrow">03 / {es ? "La plataforma" : "The platform"}</p><h2>{es ? "Así se conecta el trabajo diario." : "How the daily work comes together."}</h2></div><p className="project-destination-note">{project.isDemo ? (es ? "Abre la demo para probarla." : "Open the demo to try it.") : (es ? "Haz clic en las capturas para ampliarlas." : "Click a screenshot to enlarge it.")}</p></div>
      {project.isDemo ? <figure className="project-detail-preview"><a href="/store/products" target="_blank" rel="noopener noreferrer"><img src={project.imageUrl} alt={title} width="1400" height="760" loading="lazy" /><span>{es ? "Probar demo · nueva pestaña" : "Try demo · new tab"}<ArrowUpRight size={18} /></span></a></figure> : <><figure className="case-featured-screen">{openScreenshot(featuredIndex)}<figcaption>{translated(t, screenshots[featuredIndex].descriptionKey)}</figcaption></figure><div className="case-gallery">{[0, 1, 2].map(renderScreen)}</div><details className="case-more"><summary>{es ? "Ver más pantallas de la plataforma" : "See more platform screens"}</summary><div className="case-gallery">{[4, 5, 6, 7, 8].map(renderScreen)}</div></details></>}
    </section>
    <section className="studio-container case-delivery"><div><h2>{es ? "Qué permite la solución" : "What the solution enables"}</h2><ul>{project.resultsKeys.map(key => <li key={key}>{translated(t, key)}</li>)}</ul></div><div><h2>{es ? "Cómo se construyó" : "How it was built"}</h2><div className="service-pills">{project.technologies.map(tech => <span className="studio-tag" key={tech}>{tech}</span>)}</div>{project.documentUrl && <a href={project.documentUrl} className="studio-text-link" target="_blank" rel="noopener noreferrer">{es ? "Detalles en el informe del proyecto (PDF)" : "Details in the project report (PDF)"} ↗</a>}</div></section>
    <section className="studio-container studio-section studio-final"><h2>{es ? "¿Un reto parecido en tu operación?" : "A similar challenge in your business?"}</h2><a className="studio-button" href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer">{es ? "Hablemos de tu proyecto" : "Let’s discuss your project"} ↗</a><a className="studio-text-link" href="/projects">{es ? "Ver más proyectos" : "Explore more projects"}</a></section>
    {!project.isDemo && <Lightbox open={activeImage !== null} close={() => setActiveImage(null)} index={activeImage || 0} slides={screenshots.map(screen => ({ src: screen.src, alt: translated(t, screen.altKey) }))} plugins={[Zoom]} />}
  </main>;
}
