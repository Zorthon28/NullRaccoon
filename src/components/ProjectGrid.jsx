import { ArrowRight } from "lucide-react";
import { projectType } from "../utils/projects";
export default function ProjectGrid({ projects, lang }) {
  return <div className="studio-project-grid">{projects.map(project => <article key={project.id} className="studio-project">
    <a href={project.href} aria-label={(lang === "es" ? "Ver proyecto: " : "View project: ") + project.title}><img src={project.image} alt={project.title} loading="lazy" width="800" height="440" /></a>
    <div><span className="studio-tag">{projectType(project.type, lang)}</span><h3>{project.title}</h3><p className="studio-project-problem">{project.problem}</p><p>{project.description}</p><a className="studio-text-link" href={project.href}>{lang === "es" ? "Ver proyecto" : "View project"}<ArrowRight size={16} aria-hidden="true" /></a></div>
  </article>)}</div>;
}
