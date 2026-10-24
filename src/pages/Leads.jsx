import React, { useState, useMemo } from "react";
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
  FileSpreadsheet
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
    highlight: "Alta afluencia de pacientes privados"
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
    highlight: "Turismo médico y especialistas"
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
    highlight: "Frontera directa / Pacientes binacionales"
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
    highlight: "Clínica de alto ticket"
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
    highlight: "Más de 30 años de operación continua"
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
    highlight: "Torre médica corporativa"
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
    highlight: "Plaza de turismo médico más moderna de BC"
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
    highlight: "Base de pacientes recurrentes"
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
    highlight: "Enfoque en estética dental"
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
    highlight: "Pacientes locales y de California"
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
    highlight: "Especialidad en niños y adolescentes"
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
    highlight: "Atención bilingüe continua"
  }
];

export default function Leads({ lang = "es", t = {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedScript, setCopiedScript] = useState(false);
  const [activeTab, setActiveTab] = useState("pitch");

  const filteredClinics = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return CLINICS;
    return CLINICS.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.address.toLowerCase().includes(term) ||
        c.type.toLowerCase().includes(term) ||
        c.zone.toLowerCase().includes(term) ||
        c.phone.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const pitchWhatsApp = `Hola buenas tardes, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;

  const pitchEmailSubject = "Reducción de ausentismo y citas no asistidas - Propuesta Piloto";
  const pitchEmailBody = `Estimado equipo,

Espero que se encuentren muy bien.

Le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada específicamente para consultorios y clínicas dentales de alto flujo.

Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo de pacientes entre un 25% y 35%, además de ahorrarle entre 10 y 15 horas semanales a recepción en llamadas y mensajes manuales.

Actualmente estamos seleccionando a 3 clínicas en Tijuana para una prueba piloto sin costo, donde implementamos el sistema de confirmaciones automáticas para comprobar y documentar los resultados en citas recuperadas.

¿Tendrían disponibilidad esta semana para una breve demostración de 10 minutos (por videollamada o presencial) y evaluar si su clínica califica para el piloto?

Quedo a su entera disposición.

Atentamente,

--
Gustavo Tello
Fundador & Lead Engineer | NullRaccoon
Ingeniero Biomédico & Software Engineer
Tel / WhatsApp: +52 (664) 578-9729
Web: https://nullraccoon.com | https://dental.nullraccoon.com
Tijuana, B.C., México`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2200);
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
      `"https://dental.nullraccoon.com"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,﻿" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `prospectos_dentales_tijuana_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white pb-20">
      <Helmet>
        <title>Lead & Outreach Hub | NullRaccoon B2B</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Global Header */}
      <Header t={t} pageType="leads" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 border-b border-slate-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                Directorio B2B Verificado &middot; Clínicas Dentales Tijuana
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Prospección de Clínicas Dentales
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Directorio de clínicas privadas seleccionadas para el programa piloto de{" "}
                <a
                  href="https://dental.nullraccoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline font-semibold inline-flex items-center gap-1"
                >
                  NullDental <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <button
                onClick={downloadCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
              >
                <FileSpreadsheet className="w-4 h-4" />
                Exportar CSV ({CLINICS.length})
              </button>
              <a
                href="https://dental.nullraccoon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition-all hover:text-white"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Ver Demo NullDental
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Pitch Script Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Send className="w-4 h-4" />
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">Guión de Contacto (Opción A &middot; Piloto Tijuana)</h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("pitch")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "pitch" ? "bg-[#25D366] text-slate-950 font-bold shadow-sm" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => setActiveTab("email")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "email" ? "bg-indigo-600 text-white font-bold shadow-sm" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Correo Formal
                </button>
              </div>

              <button
                onClick={() => copyToClipboard(activeTab === "pitch" ? pitchWhatsApp : pitchEmailBody)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-xs font-bold border border-slate-700 transition-all active:scale-95"
              >
                {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                {copiedScript ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap select-all">
            {activeTab === "email" && (
              <div className="text-indigo-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Asunto: {pitchEmailSubject}</span>
              </div>
            )}
            {activeTab === "pitch" ? pitchWhatsApp : pitchEmailBody}
          </div>
        </div>

        {/* Search Bar (No Filter Pills) */}
        <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-800 shadow-xl">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre de clínica, calle, teléfono o especialidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Mostrando {filteredClinics.length} de {CLINICS.length} clínicas</span>
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="text-indigo-400 hover:underline">
              Limpiar búsqueda
            </button>
          )}
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredClinics.map((c) => {
            const clinicWhatsAppMsg = `Hola buenas tardes ${c.name}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;

            const cleanWaNumber = c.whatsapp ? c.whatsapp.replace(/[^0-9]/g, "") : null;
            const waUrl = cleanWaNumber
              ? `https://api.whatsapp.com/send?phone=${cleanWaNumber}&text=${encodeURIComponent(clinicWhatsAppMsg)}`
              : null;

            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ', ' + c.address)}`;

            const emailSubject = `Reducción de ausentismo y citas no asistidas en ${c.name} - Propuesta Piloto`;
            const emailBody = `Estimado equipo de ${c.name},

Espero que se encuentren muy bien.

Le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada específicamente para consultorios y clínicas dentales.

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

            const mailtoUrl = c.email
              ? `mailto:${c.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
              : null;

            return (
              <div
                key={c.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between transition-all duration-200 group"
              >
                <div className="space-y-3">
                  {/* Card Header with Google Maps Link */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          {c.zone}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {c.rating.toFixed(1)}
                          <span className="text-slate-400 font-normal">({c.reviews})</span>
                        </span>
                      </div>

                      {/* Clickable Clinic Name -> Google Maps */}
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-bold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group/title"
                        title="Abrir clínica en Google Maps"
                      >
                        <span>{c.name}</span>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover/title:text-emerald-400 transition-colors" />
                      </a>
                      <p className="text-xs text-indigo-400 font-medium mt-0.5">{c.type}</p>
                    </div>
                  </div>

                  {/* Clickable Address -> Google Maps */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-xs text-slate-400 hover:text-emerald-300 transition-colors pt-1 group/addr"
                    title="Ver ubicación en Google Maps"
                  >
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2 underline-offset-2 group-hover/addr:underline">{c.address}</span>
                  </a>

                  {/* Channels Meta */}
                  <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-2 text-xs">
                    {c.email ? (
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Mail className="w-3.5 h-3.5 text-indigo-400" /> Email:
                        </span>
                        <a href={`mailto:${c.email}`} className="font-mono text-indigo-300 hover:underline truncate max-w-[200px]">
                          {c.email}
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5" /> Email:
                        </span>
                        <span className="italic">No publicado</span>
                      </div>
                    )}

                    {c.whatsapp ? (
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp:
                        </span>
                        <span className="font-mono text-[#25D366] font-semibold">{c.whatsapp}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" /> WhatsApp:
                        </span>
                        <span className="italic">Solo teléfono fijo</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Phone className="w-3.5 h-3.5 text-slate-400" /> Teléfono fijo:
                      </span>
                      <a href={`tel:${c.phone}`} className="font-mono text-slate-300 hover:underline">
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  {/* Highlight Tag */}
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{c.highlight}</span>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-4 mt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  {/* Green Send WhatsApp Button */}
                  {c.whatsapp ? (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#25D366]/20 transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                      <span>Enviar WhatsApp</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-800/50 text-slate-500 font-semibold text-xs rounded-xl cursor-not-allowed border border-slate-800"
                    >
                      Sin WhatsApp
                    </button>
                  )}

                  {/* Send Email or Call */}
                  {c.email ? (
                    <a
                      href={mailtoUrl}
                      className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all"
                    >
                      <Mail className="w-4 h-4 text-indigo-400" />
                      <span>Enviar Correo</span>
                    </a>
                  ) : (
                    <a
                      href={`tel:${c.phone}`}
                      className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all"
                    >
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>Llamar Oficina</span>
                    </a>
                  )}

                  {/* Dedicated Google Maps Button */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all"
                    title="Abrir en Google Maps"
                  >
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">Google Maps</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
