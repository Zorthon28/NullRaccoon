import { MotionProvider } from "./context/MotionContext";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import SiteMeta from "./components/SiteMeta";
import Services from "./pages/Services";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import StoreHome from "./pages/StoreHome";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import StoreLayout from "./layouts/StoreLayout";
import translations from "./utils/translations";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./pages/Studio.css";

// Prospect data is available only to the local development workspace, not the production bundle.
const LocalLeads = process.env.NODE_ENV === "development" ? lazy(() => import("./pages/Leads")) : null;
function DocumentPage({ path }) {
  useEffect(() => { window.location.replace(path); }, [path]);
  return <p className="studio-container"><a href={path}>Open document / Abrir documento</a></p>;
}
function AppContent() {
  const [lang, setLang] = useState("es"); const { pathname, hash } = useLocation();
  useEffect(() => { setLang((navigator.language || "es").startsWith("es") ? "es" : "en"); }, []);
  useEffect(() => {
    let cancelled = false;
    let frame;
    const position = () => {
      if (cancelled) return;
      let id = "";
      try { id = decodeURIComponent(hash.slice(1)); } catch { id = ""; }
      const target = id && document.getElementById(id);
      if (target) {
        const header = document.querySelector(".studio-header, .shop-header");
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 80) - 24);
        window.scrollTo({ top, behavior: "auto" });
      } else window.scrollTo(0, 0);
    };
    // Wait for initial language/layout changes and image dimensions before resolving a deep link.
    frame = requestAnimationFrame(() => { frame = requestAnimationFrame(position); });
    document.fonts?.ready.then(() => { if (!cancelled && hash) position(); });
    return () => { cancelled = true; cancelAnimationFrame(frame); };
  }, [pathname, hash, lang]);
  const t = translations[lang];
  return <><SiteMeta lang={lang} /><div className="min-h-screen bg-slate-950 text-slate-100"><Routes>
    <Route path="/" element={<Hero lang={lang} t={t} />} />
    <Route path="/services" element={<Services lang={lang} t={t} />} />
    <Route path="/projects" element={<Projects lang={lang} t={t} />} />
    <Route path="/projects/:projectId" element={<ProjectDetail lang={lang} t={t} />} />
    <Route path="/about" element={<Navigate to="/#studio" replace />} />
    <Route path="/contact" element={<Navigate to="/services" replace />} />
    <Route path="/privacy" element={<DocumentPage path="/privacy.html" />} />
    <Route path="/terms" element={<DocumentPage path="/terms.html" />} />
    <Route path="/privacy.html" element={<DocumentPage path="/privacy.html" />} />
    <Route path="/terms.html" element={<DocumentPage path="/terms.html" />} />
    <Route path="/leads" element={LocalLeads ? <Suspense fallback={<p>Loading…</p>}><LocalLeads lang={lang} t={t} /></Suspense> : <NotFound lang={lang} t={t} />} />
    <Route path="/case-study/:caseId" element={<CaseStudy lang={lang} setLang={setLang} t={t} />} />
    <Route path="/store" element={<StoreLayout lang={lang} setLang={setLang} />}>
      <Route index element={<Navigate to="products" replace />} />
      <Route path="products" element={<StoreHome lang={lang} t={t} />} />
      <Route path="product/:productId" element={<Product lang={lang} t={t} />} />
      <Route path="cart" element={<Cart lang={lang} t={t} />} />
    </Route>
    <Route path="*" element={<NotFound lang={lang} t={t} />} />
  </Routes><Footer t={t} /><FloatingButtons lang={lang} setLang={setLang} /></div></>;
}
export default function App() { return <MotionProvider><HelmetProvider><Router><AppContent /><ToastContainer position="top-right" autoClose={2500} hideProgressBar theme="colored" /></Router></HelmetProvider></MotionProvider>; }
