import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { MessageCircle, Languages, Mail } from "lucide-react";
import { whatsappUrl, studioEmail } from "../utils/contact";
export default function FloatingButtons({ lang, setLang }) {
  const es = lang === "es";
  const { pathname } = useLocation();
  const [dock, setDock] = useState(null);
  const [docked, setDocked] = useState(false);
  useEffect(() => {
    const footer = document.querySelector(".studio-footer");
    const slot = document.getElementById("footer-controls-dock");
    if (!footer || !slot) return;
    setDock(slot);
    if (pathname.startsWith("/store") || pathname === "/case-study/medtech-premier") { setDocked(true); return; }
    setDocked(false);
    if (typeof IntersectionObserver === "undefined") { setDocked(true); return; }
    // Dock before the footer enters view so controls never sit over its content.
    const observer = new IntersectionObserver(([entry]) => setDocked(entry.isIntersecting), { rootMargin: "0px 0px 64px 0px" });
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);
  const controls = <aside className={"studio-floating" + (docked ? " studio-floating--docked" : "")} aria-label={es ? "Contacto e idioma" : "Contact and language"}>
    <a className="studio-floating-whatsapp" href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer" aria-label={es ? "Hablemos por WhatsApp" : "Let’s talk on WhatsApp"}><MessageCircle size={20} /><span>WhatsApp</span></a>
    <a href={"mailto:" + studioEmail} aria-label={es ? "Escribir por correo" : "Send an email"}><Mail size={18} /></a>
    <button type="button" onClick={() => setLang(es ? "en" : "es")} aria-label={es ? "View in English" : "Ver en español"}><Languages size={18} /><span>{es ? "EN" : "ES"}</span></button>
  </aside>;
  return docked && dock ? createPortal(controls, dock) : controls;
}
