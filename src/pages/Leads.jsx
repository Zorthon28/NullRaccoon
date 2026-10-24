import React, { useState, useMemo, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/HeaderHero";
import {
  Search,
  ExternalLink,
  Copy,
  Check,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Star,
  Sparkles,
  Send,
  FileSpreadsheet,
  ChevronDown,
  ChevronUp,
  Target,
  ArrowUpDown
} from "lucide-react";

const CLINICS = [
  {
    id: 1,
    name: "Nova Orthodontic",
    zone: "Zona Río",
    address: "Torre Quatro, Frida Kahlo #10410 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+52 664 684 9494",
    whatsapp: "+526649064458",
    email: "smile@novaorthodontic.com",
    rating: 5.0,
    reviews: 168,
    type: "Ortodoncia y Estética Dental",
    highlight: "Alta afluencia de pacientes privados y ortodoncia correctiva"
  },
  {
    id: 2,
    name: "Dental Álvarez",
    zone: "Zona Río",
    address: "Av. Misión de Loreto #3045, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 664 900 7282",
    whatsapp: "+526643031284",
    email: "smile@dentalalvarez.com",
    rating: 4.8,
    reviews: 210,
    type: "Implantes & Cirugía Maxilofacial",
    highlight: "Turismo médico y equipo de especialistas quirúrgicos"
  },
  {
    id: 3,
    name: "Dental Brush",
    zone: "Plaza Viva Tijuana",
    address: "Av. de la Amistad #1305, Col. Federal, 22010 Tijuana",
    phone: "+1 619 930 9214",
    whatsapp: "+16199309214",
    email: "patientcare@mydentalbrush.com",
    rating: 4.9,
    reviews: 280,
    type: "Odontología Integral & Turismo Médico",
    highlight: "Ubicación inmediata en garita fronteriza con pacientes binacionales"
  },
  {
    id: 4,
    name: "Trust Dental Care",
    zone: "Zona Río",
    address: "Diego Rivera 2386, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 866 6060",
    whatsapp: "+16198666060",
    email: "info@trustdentalcare.com",
    rating: 4.9,
    reviews: 350,
    type: "Implantes & Cosmética Avanzada",
    highlight: "Tratamientos de alto valor y alta exigencia en puntualidad"
  },
  {
    id: 5,
    name: "Washington Dental Clinic",
    zone: "Zona Centro",
    address: "Av. Revolución #1673, Zona Centro, 22000 Tijuana",
    phone: "+1 619 308 7098",
    whatsapp: "+16193087098",
    email: "wdctj@yahoo.com",
    rating: 4.8,
    reviews: 190,
    type: "Clínica Dental Internacional",
    highlight: "Más de 30 años de operación con volumen continuo de pacientes"
  },
  {
    id: 6,
    name: "Del Rio Dental Care",
    zone: "Zona Río",
    address: "The F Tower, Circuito Bursatil 9043 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+52 664 684 9789",
    whatsapp: "+526646849789",
    email: "contacto@clinicadentaldelrio.com",
    rating: 5.0,
    reviews: 168,
    type: "Odontología Integral & Estética",
    highlight: "Torre médica corporativa premium en Zona Río"
  },
  {
    id: 7,
    name: "NewCity Dental Group",
    zone: "NewCity Medical Plaza",
    address: "NewCity Medical Plaza, Ave. Paseo del Centenario 9580, Zona Río, 22010 Tijuana",
    phone: "+52 664 871 0000",
    whatsapp: "+526648710000",
    email: "info@newcitymed.com",
    rating: 4.9,
    reviews: 320,
    type: "Especialistas & Torre Médica",
    highlight: "El complejo de turismo médico más moderno de Baja California"
  },
  {
    id: 8,
    name: "Clínica Médica Dental de Tijuana",
    zone: "Zona Río",
    address: "Condominio Plaza California, José Clemente Orozco 2340-304, Zona Río, 22010 Tijuana",
    phone: "+52 664 684 8822",
    whatsapp: "+526646848822",
    email: "citas@medicadental.com.mx",
    rating: 5.0,
    reviews: 142,
    type: "Clínica Dental Familiar & Prótesis",
    highlight: "Base de familias locales recurrentes con agendas frecuentes"
  },
  {
    id: 9,
    name: "Baja Dental Smile",
    zone: "Zona Río",
    address: "Misión de San Javier 10631, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 780 8671",
    whatsapp: "+16197808671",
    email: "info@bajadentalsmile.com",
    rating: 4.9,
    reviews: 175,
    type: "Diseño Digital de Sonrisa",
    highlight: "Especialidad en estética con consultas programadas de largo tiempo"
  },
  {
    id: 10,
    name: "My Baja Dental",
    zone: "Zona Río",
    address: "Paseo de los Héroes 9365, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 272 9060",
    whatsapp: "+16192729060",
    email: "mybajadental@gmail.com",
    rating: 4.8,
    reviews: 195,
    type: "Odontología Restaurativa",
    highlight: "Flujo balanceado de pacientes de San Diego y locales"
  },
  {
    id: 11,
    name: "La Casa de las Sonrisas",
    zone: "Agua Caliente",
    address: "Libramiento Oriente 6237-6, Jardines de Agua Caliente, 22194 Tijuana",
    phone: "+52 664 638 7070",
    whatsapp: "+526646387070",
    email: "contacto@casadelassonrisas.com",
    rating: 5.0,
    reviews: 168,
    type: "Odontopediatría & Ortodoncia",
    highlight: "Enfoque pediátrico donde el ausentismo de padres es crítico"
  },
  {
    id: 12,
    name: "Dental Solutions Tijuana",
    zone: "Zona Río",
    address: "Calle 11 #8691-A, 22010 Tijuana",
    phone: "+1 858 333 4532",
    whatsapp: null,
    email: "web@dentalsolutionstijuana.com",
    rating: 4.8,
    reviews: 140,
    type: "Rehabilitación Oral & Cosmética",
    highlight: "Recepción bilingüe activa con citas de evaluación previa"
  }
];

const STATUS_CONFIG = {
  new: { label: "Nuevo", dotClass: "bg-slate-400", badgeClass: "text-slate-300 bg-slate-800/60 border-slate-700/60" },
  contacted: { label: "Contactado", dotClass: "bg-amber-400", badgeClass: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
  replied: { label: "Respondió", dotClass: "bg-sky-400", badgeClass: "text-sky-300 bg-sky-500/10 border-sky-500/20" },
  scheduled: { label: "Demo Agendada", dotClass: "bg-emerald-400 animate-pulse", badgeClass: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30" }
};

export default function Leads({ lang = "es", t = {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating"); // "rating" | "reviews" | "name"
  const [activeTab, setActiveTab] = useState("pitch");
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedClinicId, setCopiedClinicId] = useState(null);
  const searchInputRef = useRef(null);

  // Status storage per clinic ID
  const [clinicStatuses, setClinicStatuses] = useState(() => {
    try {
      const saved = localStorage.getItem("nulldental_clinic_statuses");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const updateStatus = (clinicId, newStatus) => {
    setClinicStatuses((prev) => {
      const next = { ...prev, [clinicId]: newStatus };
      try {
        localStorage.setItem("nulldental_clinic_statuses", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Keyboard shortcut listener (Cmd+K or Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filtered and sorted clinics
  const filteredClinics = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    let list = CLINICS;

    if (term) {
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.address.toLowerCase().includes(term) ||
          c.type.toLowerCase().includes(term) ||
          c.zone.toLowerCase().includes(term) ||
          c.phone.toLowerCase().includes(term)
      );
    }

    return [...list].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating || b.reviews - a.reviews;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchTerm, sortBy]);

  // CRM Progress metrics
  const totalClinics = CLINICS.length;
  const contactedCount = Object.values(clinicStatuses).filter(
    (s) => s === "contacted" || s === "replied" || s === "scheduled"
  ).length;
  const scheduledCount = Object.values(clinicStatuses).filter((s) => s === "scheduled").length;

  const pitchWhatsApp = (clinicName = "[Nombre de la clínica]") =>
    `Hola buenas tardes ${clinicName}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;

  const pitchEmailSubject = (clinicName = "[Nombre de la clínica]") =>
    `Reducción de ausentismo y citas no asistidas en ${clinicName} - Propuesta Piloto`;

  const pitchEmailBody = (clinicName = "[Nombre de la clínica]") => `Estimado equipo de ${clinicName},

Espero que se encuentren muy bien.

Le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada específicamente para consultorios y clínicas dentales de alto flujo.

Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo de pacientes entre un 25% y 35%, además de ahorrarle entre 10 y 15 horas semanales a recepción en llamadas y mensajes manuales.

Actualmente estamos seleccionando a 3 clínicas en Tijuana para una prueba piloto sin costo, donde implementamos el sistema de confirmaciones automáticas para comprobar y documentar los resultados en citas recuperadas.

¿Tendrían disponibilidad esta semana para una breve demostración de 10 minutos (por videollamada o presencial) y evaluar si su clínica califica para el piloto?

Quedo a su entera disposición.

Atentamente,

Gustavo Tello
Fundador & Lead Engineer | NullRaccoon
Ingeniero Biomédico & Software Engineer
Tel / WhatsApp: +52 (664) 578-9729
Web: https://nullraccoon.com | https://dental.nullraccoon.com
Tijuana, B.C., México`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const copyPersonalizedScript = (clinic) => {
    const text = activeTab === "pitch" ? pitchWhatsApp(clinic.name) : pitchEmailBody(clinic.name);
    navigator.clipboard.writeText(text);
    setCopiedClinicId(clinic.id);
    setTimeout(() => setCopiedClinicId(null), 2000);
  };

  const downloadCSV = () => {
    const headers = [
      "ID",
      "Nombre de Clínica",
      "Zona",
      "Dirección",
      "Google Maps URL",
      "Email Verificado",
      "WhatsApp Móvil",
      "Teléfono Oficina",
      "Calificación",
      "Reseñas",
      "Especialidad",
      "Estado de Prospección",
      "Demo NullDental"
    ];

    const rows = CLINICS.map((c) => [
      c.id,
      `"${c.name}"`,
      `"${c.zone}"`,
      `"${c.address}"`,
      `"https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ' ' + c.address)}"`,
      `"${c.email || ''}"`,
      `"${c.whatsapp || ''}"`,
      `"${c.phone}"`,
      c.rating,
      c.reviews,
      `"${c.type}"`,
      `"${STATUS_CONFIG[clinicStatuses[c.id] || "new"].label}"`,
      `"https://dental.nullraccoon.com"`
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `prospectos_dentales_tijuana_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white pb-24 font-sans">
      <Helmet>
        <title>Lead & Outreach Hub | NullRaccoon B2B</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Global Header */}
      <Header t={t} pageType="leads" />

      {/* Hero Header with subtle radial glow */}
      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
        {/* Faint radial gradient behind header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-500/15 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0"></span>
                <span>Prospección B2B &middot; Clínicas Dentales Privadas Tijuana</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Hub de Prospección NullDental
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Directorio curado para el programa piloto de automatización de citas y reducción de no-shows con{" "}
                <a
                  href="https://dental.nullraccoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline font-semibold inline-flex items-center gap-1.5"
                >
                  <span>NullDental</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>.
              </p>
            </div>

            {/* Actions: Ghost CSV Export + Dominant Primary Demo */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <button
                onClick={downloadCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 rounded-xl font-semibold text-xs sm:text-sm transition-all active:scale-95"
              >
                <FileSpreadsheet className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Exportar CSV ({CLINICS.length})</span>
              </button>
              <a
                href="https://dental.nullraccoon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-indigo-200 shrink-0" />
                <span>Ver Demo NullDental</span>
              </a>
            </div>
          </div>

          {/* CRM Pilot Goal Tracker */}
          <div className="bg-[#0b1020] border border-white/[0.08] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Meta del Piloto: 3 Clínicas Agendadas
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {contactedCount} de {totalClinics} contactadas &middot;{" "}
                <span className="text-emerald-400 font-semibold">{scheduledCount} de 3 agendadas</span>
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full md:w-64 bg-[#05070f] rounded-full h-2.5 border border-white/10 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((scheduledCount / 3) * 100))}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Pitch Script Card (Tamed, collapsible, body font) */}
        <div className="bg-[#0b1020] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Send className="w-4 h-4 shrink-0" />
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white">Guión de Prospección (Opción A)</h2>
                <span className="text-[11px] text-slate-400 block">Personalizable por clínica con un solo clic</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Segmented control with high-contrast active state */}
              <div className="bg-[#05070f] p-1 rounded-xl border border-white/10 flex text-xs font-medium">
                <button
                  onClick={() => setActiveTab("pitch")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "pitch"
                      ? "bg-[#25D366] text-slate-950 font-bold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => setActiveTab("email")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "email"
                      ? "bg-indigo-600 text-white font-bold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Correo Formal
                </button>
              </div>

              {/* Copy default template */}
              <button
                onClick={() =>
                  copyToClipboard(
                    activeTab === "pitch"
                      ? pitchWhatsApp("[Nombre de la clínica]")
                      : pitchEmailBody("[Nombre de la clínica]")
                  )
                }
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white rounded-lg text-xs font-semibold border border-white/10 transition-all active:scale-95"
                title="Copiar plantilla general"
              >
                {copiedScript ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
                <span>{copiedScript ? "¡Copiado!" : "Copiar Guión"}</span>
              </button>
            </div>
          </div>

          {/* Script Content (Body font, not monospace) */}
          <div className="bg-[#05070f] rounded-xl p-4 border border-white/[0.06] text-sm text-slate-300 leading-relaxed relative">
            {activeTab === "email" && (
              <div className="text-indigo-300 font-semibold mb-2.5 pb-2 border-b border-white/10 text-xs sm:text-sm">
                <span className="text-slate-400 font-normal">Asunto: </span>
                Reducción de ausentismo y citas no asistidas en{" "}
                <span className="text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                  [Nombre de la clínica]
                </span>{" "}
                - Propuesta Piloto
              </div>
            )}

            <div className={`transition-all ${isScriptExpanded ? "" : "max-h-20 overflow-hidden relative"}`}>
              {activeTab === "pitch" ? (
                <p>
                  Hola buenas tardes{" "}
                  <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                    [Nombre de la clínica]
                  </span>
                  , le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.
                </p>
              ) : (
                <div className="whitespace-pre-wrap">
                  Estimado equipo de{" "}
                  <span className="text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 font-semibold">
                    [Nombre de la clínica]
                  </span>
                  ,
                  {"\n\n"}Espero que se encuentren muy bien.
                  {"\n\n"}Le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada específicamente para consultorios y clínicas dentales de alto flujo.
                  {"\n\n"}Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo de pacientes entre un 25% y 35%, además de ahorrarle entre 10 y 15 horas semanales a recepción en llamadas y mensajes manuales.
                  {"\n\n"}Actualmente estamos seleccionando a 3 clínicas en Tijuana para una prueba piloto sin costo, donde implementamos el sistema de confirmaciones automáticas para comprobar y documentar los resultados en citas recuperadas.
                  {"\n\n"}¿Tendrían disponibilidad esta semana para una breve demostración de 10 minutos (por videollamada o presencial) y evaluar si su clínica califica para el piloto?
                  {"\n\n"}Quedo a su entera disposición.
                  {"\n\n"}Atentamente,
                  {"\n"}Gustavo Tello &middot; Fundador & Lead Engineer | NullRaccoon
                </div>
              )}

              {/* Fade gradient overlay when collapsed */}
              {!isScriptExpanded && (
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#05070f] to-transparent pointer-events-none"></div>
              )}
            </div>

            {/* Expand / Collapse Button */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setIsScriptExpanded(!isScriptExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>{isScriptExpanded ? "Mostrar menos" : "Mostrar guión completo"}</span>
                {isScriptExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 shrink-0" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar + Sort Tool (Surface #0f1424, ⌘K hint, purple focus ring) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#0b1020] p-3 sm:p-4 rounded-2xl border border-white/[0.08] shadow-lg">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar clínica, calle, zona o teléfono..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 bg-[#0f1424] border border-white/10 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400/50 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/[0.06] border border-white/10">
              ⌘K
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-xs text-slate-400">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0f1424] text-slate-200 text-xs font-medium py-2 px-3 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="rating">Calificación (Estrellas)</option>
              <option value="reviews">Mayor número de reseñas</option>
              <option value="name">Nombre alfabético</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Mostrando {filteredClinics.length} de {CLINICS.length} clínicas privadas</span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredClinics.length === 0 && (
          <div className="bg-[#0b1020] border border-white/[0.08] rounded-2xl p-12 text-center space-y-3">
            <Search className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No se encontraron clínicas</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No hay clínicas que coincidan con &ldquo;{searchTerm}&rdquo;. Intenta buscar por otra palabra clave o limpia el filtro.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl"
            >
              Restablecer lista
            </button>
          </div>
        )}

        {/* Clinics Grid (Cards surface #0b1020 with soft lift & accent border glow on hover) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredClinics.map((c) => {
            const currentStatus = clinicStatuses[c.id] || "new";
            const statusInfo = STATUS_CONFIG[currentStatus];

            const clinicWhatsAppMsg = pitchWhatsApp(c.name);
            const cleanWaNumber = c.whatsapp ? c.whatsapp.replace(/[^0-9]/g, "") : null;
            const waUrl = cleanWaNumber
              ? `https://api.whatsapp.com/send?phone=${cleanWaNumber}&text=${encodeURIComponent(clinicWhatsAppMsg)}`
              : null;

            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ', ' + c.address)}`;

            const emailSub = pitchEmailSubject(c.name);
            const emailBody = pitchEmailBody(c.name);
            const mailtoUrl = c.email
              ? `mailto:${c.email}?subject=${encodeURIComponent(emailSub)}&body=${encodeURIComponent(emailBody)}`
              : null;

            return (
              <div
                key={c.id}
                className="bg-[#0b1020] border border-white/[0.08] hover:border-indigo-400/50 hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] hover:-translate-y-0.5 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 group"
              >
                <div className="space-y-3.5">
                  {/* Top Bar: Zone Pill + Star Rating + Status Switcher */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* Fixed horizontal padding on Zone pill */}
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {c.zone}
                      </span>
                      {/* Rating Gold star + Number + Gray review count */}
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                        <span className="font-bold text-white">{c.rating.toFixed(1)}</span>
                        <span className="text-slate-500 font-normal">({c.reviews} reseñas)</span>
                      </span>
                    </div>

                    {/* Interactive CRM Status Pill */}
                    <div className="relative">
                      <select
                        value={currentStatus}
                        onChange={(e) => updateStatus(c.id, e.target.value)}
                        className={`text-[11px] font-semibold py-1 pl-2.5 pr-6 rounded-lg border appearance-none cursor-pointer focus:outline-none transition-colors ${statusInfo.badgeClass}`}
                      >
                        <option value="new" className="bg-[#0b1020] text-slate-200">⚪ Nuevo</option>
                        <option value="contacted" className="bg-[#0b1020] text-amber-300">🟡 Contactado</option>
                        <option value="replied" className="bg-[#0b1020] text-sky-300">🔵 Respondió</option>
                        <option value="scheduled" className="bg-[#0b1020] text-emerald-300">🟢 Demo Agendada</option>
                      </select>
                      <ChevronDown className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60 shrink-0" />
                    </div>
                  </div>

                  {/* Header: Clinic Name (prominent) + Specialty subtitle */}
                  <div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-white hover:text-indigo-300 transition-colors inline-flex items-center gap-2 group/title"
                      title="Abrir en Google Maps"
                    >
                      <span className="tracking-tight">{c.name}</span>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover/title:text-indigo-300 transition-colors shrink-0" />
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">{c.type}</p>
                  </div>

                  {/* Clickable Address with gap-2 */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-xs text-slate-400 hover:text-indigo-300 transition-colors group/addr"
                    title="Ver en Google Maps"
                  >
                    <MapPin className="w-4 h-4 text-slate-500 group-hover/addr:text-indigo-400 mt-0.5 shrink-0" />
                    <span className="line-clamp-2 underline-offset-2 group-hover/addr:underline">
                      {c.address}
                    </span>
                  </a>

                  {/* Contact Info (Clean 3-row list, no heavy box) */}
                  <div className="pt-2 border-t border-white/[0.06] space-y-2 text-xs">
                    {/* Row 1: Email */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-slate-400 w-24 shrink-0">
                        <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Email:</span>
                      </span>
                      {c.email ? (
                        <a
                          href={`mailto:${c.email}`}
                          className="font-mono text-indigo-300 hover:underline truncate max-w-[220px]"
                        >
                          {c.email}
                        </a>
                      ) : (
                        <span className="text-slate-500 italic">No disponible</span>
                      )}
                    </div>

                    {/* Row 2: WhatsApp */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-slate-400 w-24 shrink-0">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>WhatsApp:</span>
                      </span>
                      {c.whatsapp ? (
                        <span className="font-mono text-[#25D366] font-semibold">{c.whatsapp}</span>
                      ) : (
                        <span className="text-slate-500 italic">Solo teléfono fijo</span>
                      )}
                    </div>

                    {/* Row 3: Landline phone */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-slate-400 w-24 shrink-0">
                        <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Tel. fijo:</span>
                      </span>
                      <a href={`tel:${c.phone}`} className="font-mono text-slate-300 hover:underline">
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  {/* Why this clinic (Target tag) */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs">
                    <Target className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>
                      <strong className="font-semibold text-indigo-200">Por qué esta clínica:</strong>{" "}
                      {c.highlight}
                    </span>
                  </div>
                </div>

                {/* Actions Bottom Bar */}
                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2">
                    {/* Primary Action: Solid WhatsApp green */}
                    {c.whatsapp ? (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all active:scale-95"
                      >
                        <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-white/[0.03] text-slate-500 font-semibold text-xs rounded-xl cursor-not-allowed border border-white/5"
                      >
                        <span>Sin WhatsApp</span>
                      </button>
                    )}

                    {/* Secondary Ghost Action: Email or Call */}
                    {c.email ? (
                      <a
                        href={mailtoUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-white/10 transition-all active:scale-95"
                      >
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Correo</span>
                      </a>
                    ) : (
                      <a
                        href={`tel:${c.phone}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-white/10 transition-all active:scale-95"
                      >
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Llamar</span>
                      </a>
                    )}

                    {/* Ghost Maps button with gap-2 */}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-white/10 transition-all active:scale-95"
                      title="Abrir en Google Maps"
                    >
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="hidden sm:inline">Maps</span>
                    </a>
                  </div>

                  {/* Personalize Pitch copy button per clinic */}
                  <button
                    onClick={() => copyPersonalizedScript(c)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-1.5 text-xs text-slate-400 hover:text-indigo-300 hover:bg-white/[0.02] rounded-lg transition-colors border border-transparent hover:border-white/5"
                  >
                    {copiedClinicId === c.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                    <span>
                      {copiedClinicId === c.id
                        ? "¡Guión personalizado copiado al portapapeles!"
                        : `Copiar guión personalizado para ${c.name}`}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
