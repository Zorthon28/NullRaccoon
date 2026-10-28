import Header from "../components/HeaderHero";
import ProjectGrid from "../components/ProjectGrid";
import { getProjects } from "../utils/projects";
import { whatsappUrl } from "../utils/contact";
export default function Projects({ lang, t }) {
  const es = lang === "es";
  const groups = es ? [["client", "Proyectos de clientes", "Sistemas desarrollados para necesidades operativas concretas."], ["platform", "Nuestras plataformas", "Productos propios que puedes explorar para tu organización."], ["demo", "Demostraciones", "Ejemplos interactivos de lo que podemos construir. No son tiendas ni operaciones de clientes."]] : [["client", "Client projects", "Systems developed for specific operational needs."], ["platform", "Our platforms", "Our own products, ready to explore for your organization."], ["demo", "Demonstrations", "Interactive examples of what we can build. These are not client stores or operations."]];
  return <main className="studio-page"><Header t={t} /><div className="studio-container studio-page-intro"><p className="studio-eyebrow">{es ? "Proyectos" : "Projects"}</p><h1>{es ? "Soluciones que puedes explorar." : "Work you can explore."}</h1><p className="studio-lead">{es ? "Conoce nuestro trabajo: proyectos de clientes, plataformas propias y demostraciones." : "Explore our work: client projects, our own platforms, and demonstrations."}</p></div>
    {groups.map(([type, title, description]) => <section key={type} className="studio-container studio-section"><h2>{title}</h2><p className="studio-section-copy">{description}</p><ProjectGrid lang={lang} projects={getProjects(lang).filter(p => p.type === type)} /></section>)}
    <section className="studio-container studio-section studio-final"><h2>{es ? "¿Necesitas algo parecido?" : "Need something similar?"}</h2><a href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer" className="studio-button">{es ? "Hablemos de tu proyecto" : "Let’s discuss your project"} ↗</a><a className="studio-text-link" href="/services">{es ? "Ver servicios" : "Explore services"} ↗</a></section>
  </main>;
}
