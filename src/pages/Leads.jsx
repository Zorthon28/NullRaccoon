import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CLINICS = [
  {
    name: "Nova Orthodontic",
    zone: "Zona Río",
    address: "Torre Quatro, Frida Kahlo #10410 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+52 664 684 9494",
    whatsapp: "+526649064458",
    email: "smile@novaorthodontic.com",
    rating: 5.0,
    reviews: 168,
    type: "Ortodoncia y Estética"
  },
  {
    name: "Dental Álvarez",
    zone: "Zona Río",
    address: "Av. Misión de Loreto #3045, Zona Urbana Río, 22010 Tijuana",
    phone: "+52 664 900 7282",
    whatsapp: "+526643031284",
    email: "smile@dentalalvarez.com",
    rating: 4.8,
    reviews: 210,
    type: "Implantes y Cirugía Maxilofacial"
  },
  {
    name: "Dental Brush",
    zone: "Plaza Viva Tijuana",
    address: "Av. de la Amistad #1305, Col. Federal, 22010 Tijuana",
    phone: "+1 619 930 9214",
    whatsapp: "+16199309214",
    email: "patientcare@mydentalbrush.com",
    rating: 4.9,
    reviews: 280,
    type: "Odontología Integral / Turismo Médico"
  },
  {
    name: "Trust Dental Care",
    zone: "Zona Urbana Río",
    address: "Diego Rivera 2386, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 866 6060",
    whatsapp: "+16198666060",
    email: "info@trustdentalcare.com",
    rating: 4.9,
    reviews: 350,
    type: "Implantes & Odontología Cosmética"
  },
  {
    name: "Washington Dental Clinic",
    zone: "Zona Centro",
    address: "Av. Revolución #1673, Zona Centro, 22000 Tijuana",
    phone: "+1 619 308 7098",
    whatsapp: "+16193087098",
    email: "wdctj@yahoo.com",
    rating: 4.8,
    reviews: 190,
    type: "Clínica Dental Internacional"
  },
  {
    name: "Dental Solutions Tijuana",
    zone: "Zona Río / Este",
    address: "Calle 11 #8691-A, 22010 Tijuana",
    phone: "+1 858 333 4532",
    whatsapp: null,
    email: "web@dentalsolutionstijuana.com",
    rating: 4.8,
    reviews: 140,
    type: "Rehabilitación Oral y Cosmética"
  },
  {
    name: "Del Rio Dental Care",
    zone: "Zona Río",
    address: "The F Tower, Circuito Bursatil 9043 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    phone: "+52 664 684 9789",
    whatsapp: "+526646849789",
    email: "contacto@clinicadentaldelrio.com",
    rating: 5.0,
    reviews: 168,
    type: "Odontología Integral"
  },
  {
    name: "NewCity Dental Group",
    zone: "Zona Río (NewCity)",
    address: "NewCity Medical Plaza, Ave. Paseo del Centenario 9580, Zona Río, 22010 Tijuana",
    phone: "+52 664 871 0000",
    whatsapp: "+526648710000",
    email: "info@newcitymed.com",
    rating: 4.9,
    reviews: 320,
    type: "Especialistas / Implantes"
  },
  {
    name: "Clínica Médica Dental de Tijuana",
    zone: "Zona Río",
    address: "Condominio Plaza California, José Clemente Orozco 2340-304, Zona Río, 22010 Tijuana",
    phone: "+52 664 684 8822",
    whatsapp: "+526646848822",
    email: "citas@medicadental.com.mx",
    rating: 5.0,
    reviews: 142,
    type: "Clínica Dental Familiar"
  },
  {
    name: "My Baja Dental",
    zone: "Zona Río",
    address: "Paseo de los Héroes 9365, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 272 9060",
    whatsapp: "+16192729060",
    email: "mybajadental@gmail.com",
    rating: 4.8,
    reviews: 195,
    type: "Turismo Médico Dental"
  },
  {
    name: "Baja Dental Smile",
    zone: "Zona Urbana Río",
    address: "Misión de San Javier 10631, Zona Urbana Río, 22010 Tijuana",
    phone: "+1 619 780 8671",
    whatsapp: "+16197808671",
    email: "info@bajadentalsmile.com",
    rating: 4.9,
    reviews: 175,
    type: "Diseño Digital de Sonrisa"
  },
  {
    name: "La Casa de las Sonrisas",
    zone: "Jardines de Agua Caliente",
    address: "Libramiento Oriente 6237-interior 6, Jardines de Agua Caliente, 22194 Tijuana",
    phone: "+52 664 638 7070",
    whatsapp: "+526646387070",
    email: "contacto@casadelassonrisas.com",
    rating: 5.0,
    reviews: 168,
    type: "Odontopediatría y Ortodoncia"
  }
];

export default function Leads() {
  const [copied, setCopied] = useState(false);

  const pitchText = `Hola buenas tardes, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;

  const downloadCSV = () => {
    const headers = ["Nombre de Clínica", "Zona", "Dirección", "Email Verificado", "WhatsApp Móvil", "Teléfono Oficina", "Calificación", "Reseñas", "Especialidad", "Link Demo"];
    const rows = CLINICS.map(c => [
      `"${c.name}"`,
      `"${c.zone}"`,
      `"${c.address}"`,
      `"${c.email || ''}"`,
      `"${c.whatsapp || ''}"`,
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
    link.setAttribute("download", "prospectos_dentales_verificados_tijuana.csv");
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
        <title>Prospectos Verificados | NullRaccoon Outreach</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ● Contacto Multicanal Verificado
                </span>
                <span className="text-xs text-slate-400">Emails Directos + WhatsApp Móviles</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Directorio de Contacto Directo</h1>
              <p className="text-slate-400 text-sm mt-1">
                Clínicas con correos electrónicos y líneas de WhatsApp activas para demostración de{" "}
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
                📥 Descargar CSV ({CLINICS.length})
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
            <span>⚡ Pitch Listo (WhatsApp y Correo)</span>
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
            Clínicas con Canales Directos ({CLINICS.length})
          </h2>
          <span className="text-xs text-slate-500">Tijuana, B.C.</span>
        </div>

        {/* Clinics Cards */}
        <div className="space-y-3">
          {CLINICS.map((c, i) => {
            const clinicMsg = `Hola buenas tardes ${c.name}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`;
            const waUrl = c.whatsapp ? `https://wa.me/${c.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(clinicMsg)}` : null;
            
            const emailSubject = `Reducción de ausentismo de pacientes en ${c.name} - Propuesta Piloto`;
            const mailtoUrl = c.email ? `mailto:${c.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(clinicMsg)}` : null;

            return (
              <div key={i} className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{c.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {c.zone}
                      </span>
                      <span className="text-xs text-amber-400 font-semibold flex items-center gap-0.5">
                        ★ {c.rating} <span className="text-slate-500">({c.reviews})</span>
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-400">{c.address}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                      {c.email && (
                        <span className="flex items-center gap-1 text-slate-200">
                          ✉️ <a href={`mailto:${c.email}`} className="text-indigo-400 hover:underline">{c.email}</a>
                        </span>
                      )}
                      {c.whatsapp && (
                        <span className="flex items-center gap-1 text-emerald-400">
                          📱 WhatsApp: <strong>{c.whatsapp}</strong>
                        </span>
                      )}
                      <span>📞 Tel: {c.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-2 md:pt-0">
                    {c.email && (
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                        title="Enviar correo con el pitch pre-llenado"
                      >
                        ✉️ Enviar Correo
                      </a>
                    )}
                    {c.whatsapp && (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-900/30 transition-all"
                        title="Abrir chat de WhatsApp con el pitch"
                      >
                        💬 WhatsApp
                      </a>
                    )}
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
