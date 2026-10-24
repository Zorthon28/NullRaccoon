import React, { useState, useMemo, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/HeaderHero";
import "../leads.css";
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
    reviews: 148,
    type: "Ortodoncia y Estética Dental",
    highlight: "Alta afluencia de pacientes privados y tratamientos de ortodoncia correctiva"
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
    highlight: "Turismo médico con equipo multidisciplinario de especialistas"
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
    highlight: "Ubicación estratégica en frontera con alto volumen de pacientes binacionales"
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
    highlight: "Tratamientos de alto ticket con agendas densas de evaluación"
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
    highlight: "Más de 30 años de operación continua con flujo de pacientes diario"
  },
  {
    id: 6,
    name: "Del Rio Dental Care",
    zone: "Zona Río",
    address: "The F Tower, Circuito Bursatil 9043 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+52 664 684 9789",
    whatsapp: "+526649064458",
    email: "contacto@clinicadentaldelrio.com",
    rating: 4.9,
    reviews: 94,
    type: "Odontología Integral & Estética",
    highlight: "Ubicada en torre corporativa de alta plusvalía en Zona Río"
  },
  {
    id: 7,
    name: "NewCity Dental Group",
    zone: "NewCity Medical Plaza",
    address: "NewCity Medical Plaza, Ave. Paseo del Centenario 9580, Zona Río, 22010 Tijuana",
    phone: "+52 664 871 0000",
    whatsapp: "+526643031284",
    email: "info@newcitymed.com",
    rating: 4.8,
    reviews: 320,
    type: "Especialistas & Torre Médica",
    highlight: "El complejo de turismo médico más vanguardista del noroeste del país"
  },
  {
    id: 8,
    name: "Clínica Médica Dental de Tijuana",
    zone: "Zona Río",
    address: "Condominio Plaza California, José Clemente Orozco 2340-304, Zona Río, 22010 Tijuana",
    phone: "+52 664 684 8822",
    whatsapp: null,
    email: "citas@medicadental.com.mx",
    rating: 4.9,
    reviews: 142,
    type: "Clínica Dental Familiar & Prótesis",
    highlight: "Base consolidada de familias locales con citas programadas continuas"
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
    highlight: "Procedimientos de estética dental con sesiones prolongadas de sillón"
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
    highlight: "Atención bilingüe para pacientes del sur de California"
  },
  {
    id: 11,
    name: "La Casa de las Sonrisas",
    zone: "Agua Caliente",
    address: "Libramiento Oriente 6237-6, Jardines de Agua Caliente, 22194 Tijuana",
    phone: "+52 664 638 7070",
    whatsapp: null,
    email: "contacto@casadelassonrisas.com",
    rating: 4.9,
    reviews: 116,
    type: "Odontopediatría & Ortodoncia",
    highlight: "Enfoque pediátrico donde el ausentismo de los padres impacta el horario"
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
    highlight: "Recepción bilingüe activa con agendas de valoración previa"
  },
  {
    id: 13,
    name: "All Dental Clinic",
    zone: "Zona Río",
    address: "Circuito Bursátil 9043-703, The F Tower, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 664 683 1251",
    whatsapp: "+526648501676",
    email: "customer.service@alldentalclinic.com",
    rating: 4.8,
    reviews: 185,
    type: "Rehabilitación Oral & Estética",
    highlight: "Ubicada en The F Tower con alto volumen de turismo dental de California"
  },
  {
    id: 14,
    name: "Dental Rio Tijuana",
    zone: "Zona Río",
    address: "Leona Vicario 1450 Int 204-A, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 664 634 0869",
    whatsapp: "+526643213663",
    email: "info@dentalriotijuana.com",
    rating: 4.9,
    reviews: 132,
    type: "Endodoncia & Odontología Integral",
    highlight: "Atención personalizada y flujo continuo de citas semanales"
  },
  {
    id: 15,
    name: "BioDental Care",
    zone: "Zona Río",
    address: "Paseo del Centenario 10310 Piso 11, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 664 200 2488",
    whatsapp: "+16197548508",
    email: "info@biodentalcare.com",
    rating: 4.9,
    reviews: 220,
    type: "Odontología Holística & Estética",
    highlight: "Clínica de alto ticket en torre corporativa con pacientes de alta exigencia"
  },
  {
    id: 16,
    name: "Smile 4 Life Dental Clinic",
    zone: "Col. Cacho / Madero",
    address: "Calle España 2320-Int 101-B, Col. Madero (Cacho), 22040 Tijuana",
    phone: "+52 663 321 0700",
    whatsapp: "+526633210700",
    email: "smile4lifedentalclinic@gmail.com",
    rating: 4.9,
    reviews: 115,
    type: "Estética & Diseño de Sonrisa",
    highlight: "Consultorio boutique en zona residencial y gastronómica de la Cacho"
  },
  {
    id: 17,
    name: "Centro Odontológico Infantil (COI)",
    zone: "Col. Cacho / Madero",
    address: "Av. Jalisco #2695-A, Col. Madero Sur (Cacho), 22040 Tijuana",
    phone: "+52 664 524 6008",
    whatsapp: "+526643937983",
    email: "citas@coitijuana.com",
    rating: 4.9,
    reviews: 160,
    type: "Odontopediatría & Ortodoncia Infantil",
    highlight: "Consultas pediátricas continuas donde los recordatorios a los padres son vitales"
  },
  {
    id: 18,
    name: "Clínica Dental Tj",
    zone: "Zona Río",
    address: "Torre 21, Av. Río Tijuana 2440, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 663 200 7012",
    whatsapp: "+526632007012",
    email: "clinicadentaltj@outlook.com",
    rating: 4.8,
    reviews: 145,
    type: "Ortodoncia y Cirugía Oral",
    highlight: "Sucursal en Torre 21 con alto número de revisiones periódicas"
  },
  {
    id: 19,
    name: "Advanced Smiles Dentistry",
    zone: "Zona Río",
    address: "German Gedovius 10489 Local 102, Zona Río, 22010 Tijuana",
    phone: "+1 619 488 1557",
    whatsapp: "+16194881557",
    email: "info@advancedsmilesdentistry.com",
    rating: 4.8,
    reviews: 290,
    type: "Implantes & Rehabilitación Completa",
    highlight: "Clínica de referencia con alto volumen de turismo médico"
  },
  {
    id: 20,
    name: "Tijuana Clinic for Cosmetic Dentistry",
    zone: "Zona Río",
    address: "Torre Zentrum, Dr. Atl 2084, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 971 2297",
    whatsapp: "+16199712297",
    email: "contact@tccdentistry.com",
    rating: 4.9,
    reviews: 175,
    type: "Cosmética Dental & Carillas",
    highlight: "Ubicada en Torre Zentrum con tratamientos de odontología estética premium"
  },
  {
    id: 21,
    name: "Dental Image (Sucursal Otay)",
    zone: "Otay",
    address: "Blvd. Lázaro Cárdenas 18102, Otay Constituyentes, 22457 Tijuana",
    phone: "+52 664 954 6485",
    whatsapp: "+526649546485",
    email: "info@dentalimage.com",
    rating: 4.7,
    reviews: 230,
    type: "Odontología Integral & Rayos X",
    highlight: "Hub odontológico con alto tráfico junto a la zona industrial de Otay"
  },
  {
    id: 22,
    name: "Zenzao Smile Studio",
    zone: "Otay",
    address: "Calzada del Tecnológico 14527, Otay Universidad, 22427 Tijuana",
    phone: "+52 664 190 0800",
    whatsapp: "+16192098504",
    email: "hello@zenzaosmile.com",
    rating: 4.9,
    reviews: 105,
    type: "Ortodoncia Invisible & Cosmética",
    highlight: "Estudio moderno con público joven y profesionistas de la zona de Otay"
  },
  {
    id: 23,
    name: "Montalvo Dental",
    zone: "Playas de Tijuana",
    address: "Av. Paseo Ensenada 1195, Playas de Tijuana, 22504 Tijuana",
    phone: "+52 664 609 4060",
    whatsapp: "+526646944188",
    email: "contacto@montalvodental.mx",
    rating: 4.8,
    reviews: 130,
    type: "Odontología Familiar & Cirugía",
    highlight: "Clínica privada consolidada en Playas con pacientes locales y extranjeros"
  },
  {
    id: 24,
    name: "Dental Clinic Tijuana",
    zone: "Zona Río",
    address: "David Alfaro Siqueiros 2800, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 814 160 5467",
    whatsapp: "+16196506565",
    email: "info@dentalclinictijuana.io",
    rating: 4.8,
    reviews: 210,
    type: "Prótesis & Blanqueamiento",
    highlight: "Alta afluencia de pacientes privados frente a plazas de Zona Río"
  }
];

export default function Leads({ lang = "es", t = {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [activeTab, setActiveTab] = useState("pitch");
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);
  const [copiedGeneralScript, setCopiedGeneralScript] = useState(false);
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

  // Keyboard shortcut listener (Ctrl+K or Cmd+K or /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
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
    `Hola, buenas tardes ${clinicName}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;

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
    setCopiedGeneralScript(true);
    setTimeout(() => setCopiedGeneralScript(false), 2000);
  };

  const copyPersonalizedScript = (clinic) => {
    const text = activeTab === "pitch" ? pitchWhatsApp(clinic.name) : pitchEmailBody(clinic.name);
    navigator.clipboard.writeText(text);
    setCopiedClinicId(clinic.id);
    setTimeout(() => setCopiedClinicId(null), 2000);
  };

  const downloadCSV = () => {
    const statusLabels = {
      new: "Nuevo",
      contacted: "Contactado",
      replied: "Respondió",
      scheduled: "Demo Agendada"
    };

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
      `"${statusLabels[clinicStatuses[c.id] || "new"]}"`,
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
    <div className="leads-hub-page">
      <Helmet>
        <title>Hub de Prospección B2B | NullDental</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Global Header */}
      <Header t={t} pageType="leads" />

      {/* Hero Header */}
      <section className="leads-hero-section">
        <div className="leads-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div className="leads-badge-tag">
                <span className="leads-badge-dot"></span>
                <span>Prospección B2B &middot; Clínicas Dentales Tijuana</span>
              </div>
              <h1 className="leads-hero-title">
                Hub de Prospección NullDental
              </h1>
              <p className="leads-hero-desc">
                Directorio curado de clínicas privadas para el programa piloto de automatización de citas y reducción de ausentismo con{" "}
                <a
                  href="https://dental.nullraccoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#818cf8", fontWeight: 600, textDecoration: "underline" }}
                >
                  NullDental <ExternalLink size={14} style={{ display: "inline", verticalAlign: "middle" }} />
                </a>.
              </p>
            </div>

            <div className="leads-hero-actions">
              <button onClick={downloadCSV} className="leads-btn-ghost">
                <FileSpreadsheet size={16} />
                <span>Exportar CSV ({CLINICS.length})</span>
              </button>
              <a
                href="https://dental.nullraccoon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="leads-btn-primary"
              >
                <Sparkles size={16} />
                <span>Ver Demo NullDental</span>
              </a>
            </div>
          </div>

          {/* Pilot Goal Tracker */}
          <div className="leads-tracker-card">
            <div className="leads-tracker-info">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Target size={16} style={{ color: "#818cf8" }} />
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2e8f0" }}>
                  Meta del Piloto: 3 Clínicas Agendadas
                </span>
              </div>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                {contactedCount} de {totalClinics} contactadas &middot;{" "}
                <strong style={{ color: "#34d399" }}>{scheduledCount} de 3 agendadas</strong>
              </span>
            </div>

            <div className="leads-tracker-bar-bg">
              <div
                className="leads-tracker-bar-fill"
                style={{ width: `${Math.min(100, Math.round((scheduledCount / 3) * 100))}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="leads-container" style={{ paddingBottom: "80px" }}>
        
        {/* Pitch Script Card */}
        <div className="leads-script-card">
          <div className="leads-script-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ padding: "8px", background: "rgba(99, 102, 241, 0.12)", borderRadius: "10px", color: "#818cf8" }}>
                <Send size={16} />
              </div>
              <div>
                <h2 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                  Guión de Prospección (Opción A)
                </h2>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                  Personalizable por clínica con un solo clic
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="leads-script-toggle-group">
                <button
                  onClick={() => setActiveTab("pitch")}
                  className={`leads-script-tab-btn ${activeTab === "pitch" ? "active-wa" : ""}`}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => setActiveTab("email")}
                  className={`leads-script-tab-btn ${activeTab === "email" ? "active-email" : ""}`}
                >
                  Correo Formal
                </button>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    activeTab === "pitch"
                      ? pitchWhatsApp("[Nombre de la clínica]")
                      : pitchEmailBody("[Nombre de la clínica]")
                  )
                }
                className="leads-btn-ghost"
                style={{ padding: "8px 14px", fontSize: "12px" }}
              >
                {copiedGeneralScript ? <Check size={14} style={{ color: "#34d399" }} /> : <Copy size={14} />}
                <span>{copiedGeneralScript ? "¡Copiado!" : "Copiar"}</span>
              </button>
            </div>
          </div>

          <div className={`leads-script-body-box ${isScriptExpanded ? "" : "collapsed"}`}>
            {activeTab === "email" && (
              <div style={{ fontWeight: 600, color: "#cbd5e1", marginBottom: "10px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "#94a3b8", fontWeight: 400 }}>Asunto: </span>
                Reducción de ausentismo y citas no asistidas en{" "}
                <span className="leads-chip-accent">[Nombre de la clínica]</span> - Propuesta Piloto
              </div>
            )}

            {activeTab === "pitch" ? (
              <p style={{ margin: 0 }}>
                Hola, buenas tardes <span className="leads-chip-accent">[Nombre de la clínica]</span>, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.
              </p>
            ) : (
              <div style={{ whiteSpace: "pre-wrap" }}>
                Estimado equipo de <span className="leads-chip-accent">[Nombre de la clínica]</span>,
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
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setIsScriptExpanded(!isScriptExpanded)}
              className="leads-toggle-expand-btn"
            >
              <span>{isScriptExpanded ? "Mostrar menos" : "Mostrar guión completo"}</span>
              {isScriptExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* Search and Sort Toolbar */}
        <div className="leads-toolbar">
          <div className="leads-search-wrapper">
            <Search className="leads-search-icon" size={16} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar clínica por nombre, calle, zona o teléfono..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="leads-search-input"
            />
            <span className="leads-search-shortcut">Ctrl K</span>
          </div>

          <div className="leads-sort-wrapper">
            <ArrowUpDown size={14} style={{ color: "#94a3b8" }} />
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="leads-sort-select"
            >
              <option value="rating">Calificación (Mayor a menor)</option>
              <option value="reviews">Número de reseñas</option>
              <option value="name">Nombre alfabético</option>
            </select>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="leads-results-bar">
          <span style={{ fontWeight: 500 }}>
            Mostrando <strong style={{ color: "#ffffff" }}>{filteredClinics.length}</strong> de {CLINICS.length} clínicas privadas
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              style={{ background: "none", border: "none", color: "#818cf8", cursor: "pointer", fontSize: "12px", textDecoration: "underline" }}
            >
              Limpiar filtro de búsqueda
            </button>
          )}
        </div>

        {/* Empty Search Result State */}
        {filteredClinics.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 20px", background: "#0b1020", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", marginTop: "16px" }}>
            <Search size={32} style={{ color: "#64748b", margin: "0 auto 12px auto" }} />
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", margin: "0 0 6px 0" }}>
              No se encontraron clínicas
            </h3>
            <p style={{ fontSize: "13px", color: "#94a3b8", margin: "0 0 16px 0" }}>
              No hay coincidencias con &ldquo;{searchTerm}&rdquo;. Intenta con otra palabra clave.
            </p>
            <button onClick={() => setSearchTerm("")} className="leads-btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
              Ver todas las clínicas
            </button>
          </div>
        )}

        {/* Clinic Cards Grid */}
        <div className="leads-cards-grid">
          {filteredClinics.map((c) => {
            const currentStatus = clinicStatuses[c.id] || "new";
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
              <div key={c.id} className="leads-card">
                <div>
                  {/* Card Header: Zone + Rating + Status Dropdown */}
                  <div className="leads-card-header">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span className="leads-pill-zone">{c.zone}</span>
                      <div className="leads-rating-group">
                        <Star size={14} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
                        <span className="leads-rating-num">{c.rating.toFixed(1)}</span>
                        <span className="leads-rating-reviews">({c.reviews} reseñas)</span>
                      </div>
                    </div>

                    <select
                      value={currentStatus}
                      onChange={(e) => updateStatus(c.id, e.target.value)}
                      className={`leads-status-select leads-status-${currentStatus}`}
                    >
                      <option value="new" style={{ background: "#0b1020", color: "#cbd5e1" }}>⚪ Nuevo</option>
                      <option value="contacted" style={{ background: "#0b1020", color: "#fbbf24" }}>🟡 Contactado</option>
                      <option value="replied" style={{ background: "#0b1020", color: "#38bdf8" }}>🔵 Respondió</option>
                      <option value="scheduled" style={{ background: "#0b1020", color: "#34d399" }}>🟢 Demo Agendada</option>
                    </select>
                  </div>

                  {/* Clinic Name & Specialty */}
                  <h3 className="leads-card-title">{c.name}</h3>
                  <div className="leads-card-specialty">{c.type}</div>

                  {/* Address link */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leads-card-address-link"
                    title="Ver en Google Maps"
                  >
                    <MapPin size={15} style={{ color: "#818cf8", flexShrink: 0, marginTop: "2px" }} />
                    <span>{c.address}</span>
                  </a>

                  {/* Contact Info (Fixed 2-Column Grid) */}
                  <div className="leads-contact-grid">
                    {/* Row 1: Email */}
                    <div className="leads-contact-label">
                      <Mail size={15} style={{ color: "#94a3b8" }} />
                      <span>Email:</span>
                    </div>
                    <div className="leads-contact-value">
                      {c.email ? (
                        <a href={`mailto:${c.email}`} title={c.email}>
                          {c.email}
                        </a>
                      ) : (
                        <span className="muted-italic">No disponible</span>
                      )}
                    </div>

                    {/* Row 2: WhatsApp */}
                    <div className="leads-contact-label">
                      <MessageSquare size={15} style={{ color: "#25d366" }} />
                      <span>WhatsApp:</span>
                    </div>
                    <div className="leads-contact-value">
                      {c.whatsapp ? (
                        <span className="whatsapp-num">{c.whatsapp}</span>
                      ) : (
                        <span className="muted-italic">Solo teléfono fijo</span>
                      )}
                    </div>

                    {/* Row 3: Office Phone */}
                    <div className="leads-contact-label">
                      <Phone size={15} style={{ color: "#94a3b8" }} />
                      <span>Tel. fijo:</span>
                    </div>
                    <div className="leads-contact-value">
                      <a href={`tel:${c.phone}`} style={{ color: "#e2e8f0" }}>
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  {/* Why this clinic */}
                  <div className="leads-why-box">
                    <Target size={16} className="leads-why-icon" />
                    <div>
                      <strong style={{ color: "#e0e7ff" }}>Por qué esta clínica:</strong> {c.highlight}
                    </div>
                  </div>
                </div>

                {/* Card Actions Bottom */}
                <div>
                  <div className="leads-card-actions">
                    {/* Primary WhatsApp Action */}
                    {c.whatsapp ? (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leads-btn-wa-action"
                      >
                        <MessageSquare size={16} style={{ fill: "#020617" }} />
                        <span>WhatsApp</span>
                      </a>
                    ) : (
                      <div className="leads-btn-wa-disabled">
                        <span>Sin WhatsApp</span>
                      </div>
                    )}

                    {/* Secondary Ghost Email */}
                    {c.email ? (
                      <a href={mailtoUrl} className="leads-btn-card-ghost">
                        <Mail size={15} style={{ color: "#94a3b8" }} />
                        <span>Correo</span>
                      </a>
                    ) : (
                      <a href={`tel:${c.phone}`} className="leads-btn-card-ghost">
                        <Phone size={15} style={{ color: "#94a3b8" }} />
                        <span>Llamar</span>
                      </a>
                    )}

                    {/* Secondary Ghost Maps */}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leads-btn-card-ghost"
                      title="Abrir en Google Maps"
                    >
                      <MapPin size={15} style={{ color: "#818cf8" }} />
                      <span>Maps</span>
                    </a>
                  </div>

                  {/* Per-Clinic Quick Copy Button */}
                  <button
                    onClick={() => copyPersonalizedScript(c)}
                    className={`leads-btn-copy-quick ${copiedClinicId === c.id ? "copied" : ""}`}
                  >
                    {copiedClinicId === c.id ? (
                      <Check size={14} style={{ color: "#34d399" }} />
                    ) : (
                      <Copy size={14} />
                    )}
                    <span>
                      {copiedClinicId === c.id
                        ? "¡Mensaje personalizado copiado!"
                        : `Copiar mensaje para ${c.name}`}
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
