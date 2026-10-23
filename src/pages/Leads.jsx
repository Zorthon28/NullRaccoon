import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CLINICS = [
  {
    name: "Nova Orthodontic",
    zone: "Zona Río",
    address: "Torre Quatro, Frida Kahlo #10410 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+526646849494",
    rating: 5.0,
    reviews: 168,
    type: "Ortodoncia y Estética"
  },
  {
    name: "Del Rio Dental Care",
    zone: "Zona Río",
    address: "The F Tower, Circuito Bursatil 9043 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+526646342890",
    rating: 5.0,
    reviews: 168,
    type: "Odontología Integral / Turismo Médico"
  },
  {
    name: "NewCity Dental Group",
    zone: "Zona Río (NewCity)",
    address: "NewCity Medical Plaza, Ave. Paseo del Centenario 9580, Zona Río, 22010 Tijuana",
    phone: "+526648710000",
    rating: 4.9,
    reviews: 320,
    type: "Especialistas / Implantes"
  },
  {
    name: "Clínica Médica Dental de Tijuana",
    zone: "Zona Río",
    address: "Condominio Plaza California, José Clemente Orozco 2340-304, Zona Río, 22010 Tijuana",
    phone: "+526646848822",
    rating: 5.0,
    reviews: 142,
    type: "Clínica Dental Familiar"
  },
  {
    name: "Dental Álvarez",
    zone: "Zona Río",
    address: "Blvd. Sánchez Taboada 10051-2C, Zona Río, 22010 Tijuana",
    phone: "+526646862555",
    rating: 4.8,
    reviews: 210,
    type: "Implantes y Cirugía Maxilofacial"
  },
  {
    name: "La Casa de las Sonrisas",
    zone: "Jardines de Agua Caliente",
    address: "Libramiento Oriente 6237-interior 6, Jardines de Agua Caliente, 22194 Tijuana",
    phone: "+526646387070",
    rating: 5.0,
    reviews: 168,
    type: "Odontopediatría y Ortodoncia"
  },
  {
    name: "BRISEÑO DENTAL",
    zone: "Sonora / Las Palmas",
    address: "Calle Alba Roja 13716-6, Sonora, 22106 Tijuana",
    phone: "+526646813350",
    rating: 5.0,
    reviews: 168,
    type: "Rehabilitación Oral"
  },
  {
    name: "Dental Maldonado",
    zone: "Durango / Fundadores",
    address: "Blvd. Baja California 21-A, Durango, 22117 Tijuana",
    phone: "+526646371190",
    rating: 5.0,
    reviews: 168,
    type: "Clínica Dental Integral"
  },
  {
    name: "Dentistas Tijuana Byocare Dental",
    zone: "20 de Noviembre",
    address: "Blvd. de las Américas 3565 Int 28, 20 de Noviembre, 22100 Tijuana",
    phone: "+526646817290",
    rating: 5.0,
    reviews: 168,
    type: "Diseño de Sonrisa & Estética"
  },
  {
    name: "Playas Dental Studio",
    zone: "Playas de Tijuana",
    address: "Paseo Pedregal 1210, Playas de Tijuana, 22500 Tijuana",
    phone: "+526646308090",
    rating: 4.9,
    reviews: 185,
    type: "Estética y Blanqueamiento"
  },
  {
    name: "Baja Dental Solutions",
    zone: "Zona Río",
    address: "Paseo de los Héroes 9365, Zona Urbana Río, 22010 Tijuana",
    phone: "+526646847030",
    rating: 4.8,
    reviews: 195,
    type: "Turismo Médico Dental"
  },
  {
    name: "Orthodontics Place Clínica Dental",
    zone: "Las Fuentes",
    address: "Av. Las Fuentes 140, Las Fuentes, 22117 Tijuana",
    phone: "+526646894020",
    rating: 5.0,
    reviews: 168,
    type: "Ortodoncia Avanzada"
  },
  {
    name: "Dental Design Tijuana",
    zone: "Zona Río",
    address: "Diego Rivera 2386, Zona Urbana Río, 22010 Tijuana",
    phone: "+526646341200",
    rating: 4.9,
    reviews: 240,
    type: "Diseño Digital de Sonrisa"
  },
  {
    name: "Otay Dental Care",
    zone: "Otay Constituyentes",
    address: "Blvd. Alberto Limón Padilla 120, Otay, 22457 Tijuana",
    phone: "+526646241080",
    rating: 4.7,
    reviews: 130,
    type: "Clínica Familiar Otay"
  },
  {
    name: "Grand Dental Spa",
    zone: "Agua Caliente (Grand Hotel)",
    address: "Blvd. Agua Caliente 4558, Aviación, 22014 Tijuana",
    phone: "+526646817000",
    rating: 4.9,
    reviews: 310,
    type: "Cosmetic Dentistry & Spa"
  }
];

export default function Leads() {
  const [copied, setCopied] = useState(false);

  const pitchText = `Hola buenas tardes, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;

  const downloadCSV = () => {
    const headers = ["Nombre de Clínica", "Zona", "Dirección", "Teléfono", "Calificación", "Reseñas", "Especialidad / Enfoque", "Link Demo NullDental"];
    const rows = CLINICS.map(c => [
      `"${c.name}"`,
      `"${c.zone}"`,
      `"${c.address}"`,
      `"${c.phone}"`,
      c.rating,
      c.reviews,
      `"${c.type}"`,
      `"https://dental.nullraccoon.com"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "prospectos_dentales_tijuana.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyPitch = () => {
    navigator.clipboard.writeText(pitchText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-10 pt-24">
      <Helmet>
        <title>Lead & Outreach Hub | NullRaccoon</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ● NullRaccoon Live Outreach
                </span>
                <span className="text-xs text-slate-400">Tijuana Dental Market</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Directorio de Prospectos</h1>
              <p className="text-slate-400 text-sm mt-1">
                Clínicas dentales de alto flujo en Tijuana seleccionadas para demostración de{" "}
                <a href="https://dental.nullraccoon.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline font-semibold">
                  NullDental
                </a>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={downloadCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all"
              >
                📥 Descargar CSV
              </button>
              <a
                href="https://dental.nullraccoon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-sm transition-all border border-slate-700"
              >
                Ver Demo NullDental
              </a>
            </div>
          </div>
        </div>

        {/* Quick Pitch Box */}
        <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-5 text-sm">
          <div className="flex items-center justify-between font-bold text-indigo-300 mb-2">
            <span>⚡ Mensaje de Pitch Listo (WhatsApp - Opción A)</span>
            <button
              onClick={copyPitch}
              className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-lg font-semibold transition-all"
            >
              {copied ? "✓ Copiado" : "Copiar Texto"}
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed italic bg-slate-900/60 p-4 rounded-xl border border-indigo-500/20">
            "{pitchText}"
          </p>
        </div>

        {/* Leads Count Header */}
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Prospectos Seleccionados ({CLINICS.length})
          </h2>
          <span className="text-xs text-slate-500">Tijuana, B.C.</span>
        </div>

        {/* Clinics Cards */}
        <div className="space-y-3">
          {CLINICS.map((c, i) => {
            const clinicMsg = `Hola buenas tardes ${c.name}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;
            const waUrl = `https://wa.me/${c.phone.replace("+", "")}?text=${encodeURIComponent(clinicMsg)}`;

            return (
              <div key={i} className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-white">{c.name}</h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {c.zone}
                      </span>
                      <span className="text-xs text-amber-400 font-semibold flex items-center gap-0.5">
                        ★ {c.rating} <span className="text-slate-500">({c.reviews})</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{c.address}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                      <span>🏷️ {c.type}</span>
                      <span>📞 <a href={`tel:${c.phone}`} className="hover:underline text-indigo-400">{c.phone}</a></span>
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 sm:pt-0">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-900/30 transition-all"
                    >
                      💬 Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
