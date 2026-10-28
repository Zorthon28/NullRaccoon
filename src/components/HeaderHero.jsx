import { NavLink } from "react-router-dom";
import { whatsappUrl } from "../utils/contact";
export default function Header({ t, heroLogo = false }) {
  const es = t.home === "Inicio";
  return <header className="studio-header"><a className="studio-brand" href="/">{heroLogo ? <span data-header-logo-slot className="studio-logo-slot" aria-hidden="true" /> : <img src="/logo192.png" alt="" width="40" height="40" />}<span>NullRaccoon</span></a>
    <nav aria-label={es ? "Navegación principal" : "Main navigation"}>
      <NavLink to="/" end>{es ? "Inicio" : "Home"}</NavLink><NavLink to="/services">{es ? "Servicios" : "Services"}</NavLink><NavLink to="/projects">{es ? "Proyectos" : "Projects"}</NavLink>
      <a className="studio-nav-contact" href={whatsappUrl(es ? "es" : "en")} target="_blank" rel="noopener noreferrer">{es ? "Hablemos" : "Let’s talk"} ↗</a>
    </nav></header>;
}
