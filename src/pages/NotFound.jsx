import { Helmet } from "react-helmet-async";
import Header from "../components/HeaderHero";
export default function NotFound({ lang = "es", t }) {
  const es = lang === "es";
  return <main className="studio-page"><Helmet><title>{es ? "Página no encontrada" : "Page not found"} | NullRaccoon</title><meta name="robots" content="noindex, follow" /></Helmet>{t && <Header t={t} />}<section className="studio-container studio-page-intro studio-final"><p className="studio-eyebrow">404</p><h1>{es ? "No encontramos esta página." : "We couldn’t find that page."}</h1><p className="studio-lead">{es ? "Puedes conocer el estudio, explorar servicios o ver nuestros proyectos." : "Meet the studio, explore our services, or see our projects."}</p><div className="studio-actions"><a href="/" className="studio-button">{es ? "Inicio" : "Home"}</a><a href="/services" className="studio-text-link">{es ? "Servicios" : "Services"}</a><a href="/projects" className="studio-text-link">{es ? "Proyectos" : "Projects"}</a></div></section></main>;
}
