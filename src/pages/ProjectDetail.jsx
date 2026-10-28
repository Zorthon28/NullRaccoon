import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Header from "../components/HeaderHero";
import NotFound from "./NotFound";
import { getProjects, projectType } from "../utils/projects";
import { whatsappUrl } from "../utils/contact";
export default function ProjectDetail({ lang, t }) {
  const { projectId } = useParams();
  const project = getProjects(lang).find(item => item.id === projectId && item.liveUrl);
  const es = lang === "es";
  if (!project) return <NotFound lang={lang} t={t} />;
  return <main className="studio-page"><Helmet><title>{project.title} | NullRaccoon</title><meta name="description" content={project.description} /><meta property="og:title" content={project.title + " | NullRaccoon"} /><meta property="og:description" content={project.description} /><link rel="canonical" href={"https://www.nullraccoon.com" + project.href} /><meta name="robots" content={project.type === "demo" ? "noindex, follow" : "index, follow"} /></Helmet><Header t={t} />
    <section className="studio-container studio-page-intro"><a className="studio-text-link" href="/projects">← {es ? "Todos los proyectos" : "All projects"}</a><p className="studio-eyebrow">{projectType(project.type, lang)}</p><h1>{project.title}</h1><p className="studio-lead">{project.description}</p><div className="studio-actions"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="studio-button"><ExternalLink size={18} aria-hidden="true" />{project.type === "demo" ? (es ? "Probar demo" : "Try live demo") : (es ? "Abrir plataforma" : "Open platform")}</a><span className="project-destination-note">{es ? "Se abre en una nueva pestaña. Permaneces aquí para conocer el proyecto." : "Opens in a new tab. Keep this page open to explore the project."}</span></div></section>
    <section className="studio-container studio-section project-detail-story"><div><h2>{es ? "La necesidad" : "The need"}</h2><p>{project.problem}</p></div><div><h2>{es ? "La solución" : "The solution"}</h2><p>{project.description}</p><p>{es ? "Explora la plataforma para conocer sus pantallas y funciones. Si necesitas adaptarla a tu operación, podemos definir el alcance contigo." : "Explore the platform to see its screens and capabilities. If you need it adapted to your operations, we can define the scope with you."}</p></div></section>
    <figure className="studio-container project-detail-preview"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} width="1400" height="760" /><span>{es ? "Abrir sitio en una nueva pestaña" : "Open website in a new tab"}<ArrowUpRight size={18} /></span></a></figure>
    <section className="studio-container studio-section studio-final"><h2>{es ? "¿Una solución así para tu negocio?" : "A solution like this for your business?"}</h2><a className="studio-button" href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer">{es ? "Hablemos de tu proyecto" : "Let’s discuss your project"}</a></section>
  </main>;
}
