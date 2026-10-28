import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

const MotionContext = createContext(null);
const preferenceKey = "nullraccoon-motion";
const validModes = ["system", "full", "reduced"];
export const useMotion = () => useContext(MotionContext);
export function MotionProvider({ children }) {
  const [mode, setMode] = useState(() => {
    // The local design preview explicitly enables motion; published pages honor device preferences by default.
    const fallback = process.env.NODE_ENV === "development" ? "full" : "system";
    try { const stored = localStorage.getItem(preferenceKey); return validModes.includes(stored) ? stored : fallback; } catch { return fallback; }
  });
  const [systemReduced, setSystemReduced] = useState(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false);
  const reducedMotion = mode === "reduced" || (mode === "system" && systemReduced);
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return;
    const update = () => setSystemReduced(query.matches);
    query.addEventListener?.("change", update);
    update();
    return () => query.removeEventListener?.("change", update);
  }, []);
  useLayoutEffect(() => {
    document.documentElement.dataset.motion = reducedMotion ? "reduced" : "full";
    return () => { delete document.documentElement.dataset.motion; };
  }, [reducedMotion]);
  const changeMode = value => {
    if (!validModes.includes(value)) return;
    setMode(value);
    try { localStorage.setItem(preferenceKey, value); } catch { /* The current-tab setting still works when storage is unavailable. */ }
  };
  return <MotionContext.Provider value={{ mode, changeMode, reducedMotion, systemReduced }}>{children}</MotionContext.Provider>;
}
export function MotionControl({ lang }) {
  const motion = useMotion();
  if (!motion) return null;
  const es = lang === "es";
  return <div className="studio-motion-control"><label htmlFor="site-motion">{es ? "Animaciones" : "Animations"}</label><select id="site-motion" value={motion.mode} onChange={event => motion.changeMode(event.target.value)}>
    <option value="system">{es ? "Según mi dispositivo" : "Use device preference"}</option>
    <option value="full">{es ? "Activadas" : "On"}</option>
    <option value="reduced">{es ? "Movimiento reducido" : "Reduced motion"}</option>
  </select><span className="studio-motion-state">{motion.mode === "system" ? motion.systemReduced ? (es ? "Tu navegador solicita movimiento reducido." : "Your browser requests reduced motion.") : (es ? "Tu navegador permite animaciones." : "Your browser allows animations.") : motion.reducedMotion ? (es ? "Movimiento reducido en este sitio." : "Reduced motion on this site.") : (es ? "Animaciones activas en este sitio." : "Animations enabled on this site.")}</span></div>;
}
