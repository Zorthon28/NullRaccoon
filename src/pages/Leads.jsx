import React, { useState, useMemo, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/HeaderHero";
import "../leads.css";
import {
  Search,
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

const VERTICALS = {
  dental: {
    id: "dental",
    label: "Odontología",
    icon: "🦷",
    title: "Clínicas Dentales",
    tagline: "Consultorios dentales y ortodoncia con alto ausentismo",
    demoUrl: "https://dental.nullraccoon.com",
    demoLabel: "Ver Demo NullDental",
    pitchWa: (name) =>
      `Hola, buenas tardes ${name}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollé NullDental (https://dental.nullraccoon.com), una plataforma diseñada para clínicas dentales. Estudios en clínicas privadas demuestran que los recordatorios automatizados por WhatsApp reducen el ausentismo entre un 25% y 35%. Nuestro objetivo es comprobar y medir ese impacto directamente en su clínica. Actualmente estamos seleccionando 3 clínicas en Tijuana para una prueba piloto sin costo para automatizar sus confirmaciones y documentar citas recuperadas. ¿Con quién de administración o dirección médica podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`,
    pitchSubject: (name) =>
      `Reducción de ausentismo y citas no asistidas en ${name} - Propuesta Piloto`,
    pitchBody: (name) => `Estimado equipo de ${name},

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
Tijuana, B.C., México`
  },
  aesthetics: {
    id: "aesthetics",
    label: "Medicina Estética & Cirugía",
    icon: "💉",
    title: "Medicina Estética & Cirugía Plástica",
    tagline: "Cirugía plástica, medicina antiedad y spas médicos de alto valor",
    demoUrl: "https://dental.nullraccoon.com",
    demoLabel: "Ver Plataforma Demo",
    pitchWa: (name) =>
      `Hola, buenas tardes ${name}, le escribe Gustavo Tello, ingeniero de software local en Tijuana. Desarrollamos una solución de confirmaciones automáticas por WhatsApp para clínicas de medicina estética y cirugía plástica. Sabemos que en consultas de valoración y tratamientos de alto valor, un paciente que no asiste deja un espacio de cabina o quirófano sin ingresos. Nuestro sistema reduce el ausentismo hasta un 35% y ahorra horas a recepción en seguimiento. Estamos ofreciendo una prueba piloto sin costo para 3 clínicas en Tijuana. ¿Con quién de dirección o administración podríamos ver una demostración rápida de 10 minutos? Saludos cordiales.`,
    pitchSubject: (name) =>
      `Control de ausentismo en valoraciones y tratamientos en ${name} - Piloto sin costo`,
    pitchBody: (name) => `Estimado equipo de ${name},

Espero que se encuentren muy bien.

Le escribe Gustavo Tello, ingeniero de software local aquí en Tijuana. Desarrollamos una plataforma de gestión de citas y recordatorios inteligentes por WhatsApp enfocada en clínicas de medicina estética y cirugía plástica.

En procedimientos de alto valor y valoraciones especializadas, un ausentismo representa miles de pesos en tiempo muerto de médicos y cabinas. Nuestro sistema automatiza las confirmaciones 24h y 2h antes por WhatsApp, reduciendo cancelaciones de último minuto entre un 25% y 35%.

Estamos seleccionando 3 clínicas en Tijuana para un programa piloto sin costo durante este mes, documentando en tiempo real las citas recuperadas.

¿Tendrían 10 minutos disponibles esta semana para una demostración breve y validar si su clínica califica para el piloto?

Atentamente,

Gustavo Tello &middot; NullRaccoon
Tel / WhatsApp: +52 (664) 578-9729
Tijuana, B.C., México`
  },
  physio: {
    id: "physio",
    label: "Fisioterapia & Quiropráctica",
    icon: "🏃",
    title: "Fisioterapia & Rehabilitación",
    tagline: "Centros de rehabilitación física y terapia deportiva",
    demoUrl: "https://dental.nullraccoon.com",
    demoLabel: "Ver Plataforma Demo",
    pitchWa: (name) =>
      `Hola, buenas tardes ${name}, le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Diseñamos una herramienta para clínicas de fisioterapia y rehabilitación que asegura que los pacientes concluyan sus paquetes completos de 5 a 15 sesiones y no abandonen el tratamiento a la mitad, automatizando recordatorios y reagendamiento amigable por WhatsApp. Actualmente estamos ofreciendo una prueba piloto sin costo para 3 clínicas en Tijuana. ¿Con quién podríamos coordinar una breve demostración de 10 minutos esta semana? Saludos cordiales.`,
    pitchSubject: (name) =>
      `Continuidad de tratamientos y confirmación de sesiones en ${name} - Piloto`,
    pitchBody: (name) => `Estimado equipo de ${name},

Le escribe Gustavo Tello, ingeniero biomédico y de software local aquí en Tijuana. Desarrollamos un sistema especializado para clínicas de terapia física y rehabilitación enfocado en la adherencia del paciente.

El mayor reto en fisioterapia es que los pacientes dejan de asistir a partir de la 3ra sesión al sentir alivio temporal. Nuestra plataforma automatiza los recordatorios por WhatsApp para mantener la agenda llena y asegurar que los paquetes de rehabilitación se completen puntualmente.

Estamos activando una prueba piloto sin costo para 3 clínicas en Tijuana. ¿Tendrían 10 minutos para una llamada o visita corta esta semana?

Saludos cordiales,
Gustavo Tello &middot; NullRaccoon`
  },
  auto: {
    id: "auto",
    label: "Car Detailing & Wrapping",
    icon: "🚗",
    title: "Car Detailing & Wrapping",
    tagline: "Estudios de estética automotriz, PPF y talleres de personalización",
    demoUrl: "https://dental.nullraccoon.com",
    demoLabel: "Ver Plataforma Demo",
    pitchWa: (name) =>
      `Hola, buenas tardes equipo de ${name}, le escribe Gustavo Tello, desarrollador de software local aquí en Tijuana. Creamos un sistema para estudios de car detailing y wrapping que automatiza las alertas de estatus por WhatsApp a los clientes ('Vehículo ingresado', 'En proceso de pulido', 'Listo para entrega'), eliminando llamadas repetitivas a recepción y asegurando que los clientes recojan sus autos a tiempo. Estamos activando una prueba piloto sin costo para 3 negocios en la zona. ¿Con quién podríamos platicar 10 minutos para mostrártelo? Saludos cordiales.`,
    pitchSubject: (name) =>
      `Automatización de estatus de entrega y citas en ${name} - Piloto sin costo`,
    pitchBody: (name) => `Estimado equipo de ${name},

Les escribe Gustavo Tello, desarrollador de software local en Tijuana. 

Diseñamos una plataforma que envía notificaciones automáticas por WhatsApp a los dueños de los vehículos sobre el avance de su servicio (ingreso, proceso de detallado/PPF y confirmación de entrega). Esto reduce drásticamente las llamadas de clientes preguntando por su auto y agiliza la entrega y cobro.

Estamos ofreciendo una prueba piloto sin costo para 3 talleres o estudios de detailing en Tijuana. ¿Creen que podamos platicar 10 minutos esta semana?

Atentamente,
Gustavo Tello &middot; NullRaccoon`
  },
  beauty: {
    id: "beauty",
    label: "Spas, Pestañas & Barberías",
    icon: "💅",
    title: "Spas, Pestañas & Barberías",
    tagline: "Estudios de pestañas, uñas esculturales y barberías premium",
    demoUrl: "https://dental.nullraccoon.com",
    demoLabel: "Ver Plataforma Demo",
    pitchWa: (name) =>
      `Hola, buenas tardes ${name}, le escribe Gustavo Tello, desarrollador local aquí en Tijuana. Diseñamos un sistema para salones y estudios que automatiza la confirmación de citas de 1 a 2 horas por WhatsApp 24 horas antes, evitando que te dejen plantada o que el sillón se quede vacío. Si la clienta cancela, el sistema te permite reasignar el turno de inmediato. Estamos ofreciendo una prueba piloto sin costo para 3 estudios en Tijuana. ¿Podríamos coordinar una llamada rápida de 10 minutos para mostrártelo? Saludos cordiales.`,
    pitchSubject: (name) =>
      `Eliminar ausentismo y proteger horarios de sillón en ${name} - Piloto`,
    pitchBody: (name) => `Hola equipo de ${name},

En servicios de 1.5 a 2 horas (como extensiones de pestañas o uñas), un cliente que no llega representa tiempo y dinero irrecuperables.

Desarrollamos una herramienta que envía confirmaciones interactivas por WhatsApp a tus clientas para confirmar su asistencia 24h antes y liberar espacios cancelados al instante.

Estamos ofreciendo el piloto gratuito a 3 estudios en Tijuana. ¿Les interesaría verlo en 10 minutos?

Saludos cordiales,
Gustavo Tello &middot; NullRaccoon`
  },
  wellness: {
    id: "wellness",
    label: "Psicología & Nutrición",
    icon: "🧠",
    title: "Psicología & Nutrición",
    tagline: "Consultorios de terapia psicológica y planes de nutrición",
    demoUrl: "https://dental.nullraccoon.com",
    demoLabel: "Ver Plataforma Demo",
    pitchWa: (name) =>
      `Hola, buenas tardes ${name}, le escribe Gustavo Tello, ingeniero de software local aquí en Tijuana. Desarrollamos un sistema para consultorios de psicología y nutrición enfocado en proteger el horario de consulta: envía recordatorios amables y confirmaciones automáticas por WhatsApp, reduciendo las citas olvidadas y facilitando el reagendamiento anticipado. Estamos seleccionando 3 consultorios para una prueba piloto sin costo en Tijuana. ¿Con quién podríamos coordinar una demostración rápida de 10 minutos? Saludos cordiales.`,
    pitchSubject: (name) =>
      `Confirmación automática de consultas en ${name} - Piloto sin costo`,
    pitchBody: (name) => `Estimado equipo de ${name},

En la consulta privada de psicología y nutrición, cada hora desaprovechada por inasistencia representa un ingreso nulo que no se recupera.

Nuestro sistema automatiza los recordatorios por WhatsApp con un tono profesional y empático, permitiendo a los pacientes confirmar o solicitar cambio de horario con 24 horas de antelación.

Estamos ofreciendo una prueba piloto sin costo para 3 consultorios en Tijuana. ¿Tendrían disponibilidad de 10 minutos para una breve videollamada esta semana?

Saludos cordiales,
Gustavo Tello &middot; NullRaccoon`
  }
};

const LEADS_DATABASE = [
  {
    "id": 1,
    "vertical": "dental",
    "name": "Nova Orthodontic",
    "zone": "Zona Río",
    "address": "Torre Quatro, Frida Kahlo #10410 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    "phone": "+52 664 684 9494",
    "whatsapp": "+526649064458",
    "email": "smile@novaorthodontic.com",
    "rating": 5.0,
    "reviews": 148,
    "type": "Ortodoncia y Estética Dental",
    "highlight": "Alta afluencia de pacientes privados y tratamientos de ortodoncia correctiva"
  },
  {
    "id": 2,
    "vertical": "dental",
    "name": "Dental Álvarez",
    "zone": "Zona Río",
    "address": "Av. Misión de Loreto #3045, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 900 7282",
    "whatsapp": "+526643031284",
    "email": "smile@dentalalvarez.com",
    "rating": 4.8,
    "reviews": 210,
    "type": "Implantes & Cirugía Maxilofacial",
    "highlight": "Turismo médico con equipo multidisciplinario de especialistas"
  },
  {
    "id": 3,
    "vertical": "dental",
    "name": "Dental Brush",
    "zone": "Plaza Viva Tijuana",
    "address": "Av. de la Amistad #1305, Col. Federal, 22010 Tijuana",
    "phone": "+1 619 930 9214",
    "whatsapp": "+16199309214",
    "email": "patientcare@mydentalbrush.com",
    "rating": 4.9,
    "reviews": 280,
    "type": "Odontología Integral & Turismo Médico",
    "highlight": "Ubicación estratégica en frontera con alto volumen de pacientes binacionales"
  },
  {
    "id": 4,
    "vertical": "dental",
    "name": "Trust Dental Care",
    "zone": "Zona Río",
    "address": "Diego Rivera 2386, Zona Urbana Río, 22010 Tijuana",
    "phone": "+1 619 866 6060",
    "whatsapp": "+16198666060",
    "email": "info@trustdentalcare.com",
    "rating": 4.9,
    "reviews": 350,
    "type": "Implantes & Cosmética Avanzada",
    "highlight": "Tratamientos de alto ticket con agendas densas de evaluación"
  },
  {
    "id": 5,
    "vertical": "dental",
    "name": "Washington Dental Clinic",
    "zone": "Zona Centro",
    "address": "Av. Revolución #1673, Zona Centro, 22000 Tijuana",
    "phone": "+1 619 308 7098",
    "whatsapp": "+16193087098",
    "email": "wdctj@yahoo.com",
    "rating": 4.8,
    "reviews": 190,
    "type": "Clínica Dental Internacional",
    "highlight": "Más de 30 años de operación continua con flujo de pacientes diario"
  },
  {
    "id": 6,
    "vertical": "dental",
    "name": "Del Rio Dental Care",
    "zone": "Zona Río",
    "address": "The F Tower, Circuito Bursatil 9043 Piso 4, Zona Urbana Rio, 22010 Tijuana",
    "phone": "+52 664 684 9789",
    "whatsapp": "+526649064458",
    "email": "contacto@clinicadentaldelrio.com",
    "rating": 4.9,
    "reviews": 94,
    "type": "Odontología Integral & Estética",
    "highlight": "Ubicada en torre corporativa de alta plusvalía en Zona Río"
  },
  {
    "id": 7,
    "vertical": "dental",
    "name": "NewCity Dental Group",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza, Ave. Paseo del Centenario 9580, Zona Río, 22010 Tijuana",
    "phone": "+52 664 871 0000",
    "whatsapp": "+526643031284",
    "email": "info@newcitymed.com",
    "rating": 4.8,
    "reviews": 320,
    "type": "Especialistas & Torre Médica",
    "highlight": "El complejo de turismo médico más vanguardista del noroeste del país"
  },
  {
    "id": 8,
    "vertical": "dental",
    "name": "Clínica Médica Dental de Tijuana",
    "zone": "Zona Río",
    "address": "Condominio Plaza California, José Clemente Orozco 2340-304, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 8822",
    "whatsapp": null,
    "email": "citas@medicadental.com.mx",
    "rating": 4.9,
    "reviews": 142,
    "type": "Clínica Dental Familiar & Prótesis",
    "highlight": "Base consolidada de familias locales con citas programadas continuas"
  },
  {
    "id": 9,
    "vertical": "dental",
    "name": "Baja Dental Smile",
    "zone": "Zona Río",
    "address": "Misión de San Javier 10631, Zona Urbana Río, 22010 Tijuana",
    "phone": "+1 619 780 8671",
    "whatsapp": "+16197808671",
    "email": "info@bajadentalsmile.com",
    "rating": 4.9,
    "reviews": 175,
    "type": "Diseño Digital de Sonrisa",
    "highlight": "Procedimientos de estética dental con sesiones prolongadas de sillón"
  },
  {
    "id": 10,
    "vertical": "dental",
    "name": "My Baja Dental",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 9365, Zona Urbana Río, 22010 Tijuana",
    "phone": "+1 619 272 9060",
    "whatsapp": "+16192729060",
    "email": "mybajadental@gmail.com",
    "rating": 4.8,
    "reviews": 195,
    "type": "Odontología Restaurativa",
    "highlight": "Atención bilingüe para pacientes del sur de California"
  },
  {
    "id": 11,
    "vertical": "dental",
    "name": "La Casa de las Sonrisas",
    "zone": "Agua Caliente",
    "address": "Libramiento Oriente 6237-6, Jardines de Agua Caliente, 22194 Tijuana",
    "phone": "+52 664 638 7070",
    "whatsapp": null,
    "email": "contacto@casadelassonrisas.com",
    "rating": 4.9,
    "reviews": 116,
    "type": "Odontopediatría & Ortodoncia",
    "highlight": "Enfoque pediátrico donde el ausentismo de los padres impacta el horario"
  },
  {
    "id": 12,
    "vertical": "dental",
    "name": "Dental Solutions Tijuana",
    "zone": "Zona Río",
    "address": "Calle 11 #8691-A, 22010 Tijuana",
    "phone": "+1 858 333 4532",
    "whatsapp": null,
    "email": "web@dentalsolutionstijuana.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Rehabilitación Oral & Cosmética",
    "highlight": "Recepción bilingüe activa con agendas de valoración previa"
  },
  {
    "id": 13,
    "vertical": "dental",
    "name": "All Dental Clinic",
    "zone": "Zona Río",
    "address": "Circuito Bursátil 9043-703, The F Tower, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 683 1251",
    "whatsapp": "+526648501676",
    "email": "customer.service@alldentalclinic.com",
    "rating": 4.8,
    "reviews": 185,
    "type": "Rehabilitación Oral & Estética",
    "highlight": "Ubicada en The F Tower con alto volumen de turismo dental de California"
  },
  {
    "id": 14,
    "vertical": "dental",
    "name": "Dental Rio Tijuana",
    "zone": "Zona Río",
    "address": "Leona Vicario 1450 Int 204-A, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 634 0869",
    "whatsapp": "+526643213663",
    "email": "info@dentalriotijuana.com",
    "rating": 4.9,
    "reviews": 132,
    "type": "Endodoncia & Odontología Integral",
    "highlight": "Atención personalizada y flujo continuo de citas semanales"
  },
  {
    "id": 15,
    "vertical": "dental",
    "name": "BioDental Care",
    "zone": "Zona Río",
    "address": "Paseo del Centenario 10310 Piso 11, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 200 2488",
    "whatsapp": "+16197548508",
    "email": "info@biodentalcare.com",
    "rating": 4.9,
    "reviews": 220,
    "type": "Odontología Holística & Estética",
    "highlight": "Clínica de alto ticket en torre corporativa con pacientes de alta exigencia"
  },
  {
    "id": 16,
    "vertical": "dental",
    "name": "Smile 4 Life Dental Clinic",
    "zone": "Col. Cacho / Madero",
    "address": "Calle España 2320-Int 101-B, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 663 321 0700",
    "whatsapp": "+526633210700",
    "email": "smile4lifedentalclinic@gmail.com",
    "rating": 4.9,
    "reviews": 115,
    "type": "Estética & Diseño de Sonrisa",
    "highlight": "Consultorio boutique en zona residencial y gastronómica de la Cacho"
  },
  {
    "id": 17,
    "vertical": "dental",
    "name": "Centro Odontológico Infantil (COI)",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Jalisco #2695-A, Col. Madero Sur (Cacho), 22040 Tijuana",
    "phone": "+52 664 524 6008",
    "whatsapp": "+526643937983",
    "email": "citas@coitijuana.com",
    "rating": 4.9,
    "reviews": 160,
    "type": "Odontopediatría & Ortodoncia Infantil",
    "highlight": "Consultas pediátricas continuas donde los recordatorios a los padres son vitales"
  },
  {
    "id": 18,
    "vertical": "dental",
    "name": "Clínica Dental Tj",
    "zone": "Zona Río",
    "address": "Torre 21, Av. Río Tijuana 2440, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 663 200 7012",
    "whatsapp": "+526632007012",
    "email": "clinicadentaltj@outlook.com",
    "rating": 4.8,
    "reviews": 145,
    "type": "Ortodoncia y Cirugía Oral",
    "highlight": "Sucursal en Torre 21 con alto número de revisiones periódicas"
  },
  {
    "id": 19,
    "vertical": "dental",
    "name": "Advanced Smiles Dentistry",
    "zone": "Zona Río",
    "address": "German Gedovius 10489 Local 102, Zona Río, 22010 Tijuana",
    "phone": "+1 619 488 1557",
    "whatsapp": "+16194881557",
    "email": "info@advancedsmilesdentistry.com",
    "rating": 4.8,
    "reviews": 290,
    "type": "Implantes & Rehabilitación Completa",
    "highlight": "Clínica de referencia con alto volumen de turismo médico"
  },
  {
    "id": 20,
    "vertical": "dental",
    "name": "Tijuana Clinic for Cosmetic Dentistry",
    "zone": "Zona Río",
    "address": "Torre Zentrum, Dr. Atl 2084, Zona Urbana Río, 22010 Tijuana",
    "phone": "+1 619 971 2297",
    "whatsapp": "+16199712297",
    "email": "contact@tccdentistry.com",
    "rating": 4.9,
    "reviews": 175,
    "type": "Cosmética Dental & Carillas",
    "highlight": "Ubicada en Torre Zentrum con tratamientos de odontología estética premium"
  },
  {
    "id": 21,
    "vertical": "dental",
    "name": "Dental Image (Sucursal Otay)",
    "zone": "Otay",
    "address": "Blvd. Lázaro Cárdenas 18102, Otay Constituyentes, 22457 Tijuana",
    "phone": "+52 664 954 6485",
    "whatsapp": "+526649546485",
    "email": "info@dentalimage.com",
    "rating": 4.7,
    "reviews": 230,
    "type": "Odontología Integral & Rayos X",
    "highlight": "Hub odontológico con alto tráfico junto a la zona industrial de Otay"
  },
  {
    "id": 22,
    "vertical": "dental",
    "name": "Zenzao Smile Studio",
    "zone": "Otay",
    "address": "Calzada del Tecnológico 14527, Otay Universidad, 22427 Tijuana",
    "phone": "+52 664 190 0800",
    "whatsapp": "+16192098504",
    "email": "hello@zenzaosmile.com",
    "rating": 4.9,
    "reviews": 105,
    "type": "Ortodoncia Invisible & Cosmética",
    "highlight": "Estudio moderno con público joven y profesionistas de la zona de Otay"
  },
  {
    "id": 23,
    "vertical": "dental",
    "name": "Montalvo Dental",
    "zone": "Playas de Tijuana",
    "address": "Av. Paseo Ensenada 1195, Playas de Tijuana, 22504 Tijuana",
    "phone": "+52 664 609 4060",
    "whatsapp": "+526646944188",
    "email": "contacto@montalvodental.mx",
    "rating": 4.8,
    "reviews": 130,
    "type": "Odontología Familiar & Cirugía",
    "highlight": "Clínica privada consolidada en Playas con pacientes locales y extranjeros"
  },
  {
    "id": 24,
    "vertical": "dental",
    "name": "Dental Clinic Tijuana",
    "zone": "Zona Río",
    "address": "David Alfaro Siqueiros 2800, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 814 160 5467",
    "whatsapp": "+16196506565",
    "email": "info@dentalclinictijuana.io",
    "rating": 4.8,
    "reviews": 210,
    "type": "Prótesis & Blanqueamiento",
    "highlight": "Alta afluencia de pacientes privados frente a plazas de Zona Río"
  },
  {
    "id": 25,
    "vertical": "aesthetics",
    "name": "Plástica Tijuana (Dr. Juan Pablo Cervantes)",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza, Piso 19, Suite 1901, Zona Río, 22010 Tijuana",
    "phone": "+52 664 650 7898",
    "whatsapp": "+16199557224",
    "email": "contact@plasticatijuana.com",
    "rating": 4.9,
    "reviews": 180,
    "type": "Cirugía Plástica & Reconstructiva",
    "highlight": "Piso 19 de NewCity con alto volumen de cirugías estéticas en dólares"
  },
  {
    "id": 26,
    "vertical": "aesthetics",
    "name": "Dr. Nicolás Leyva Cirugía Plástica",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza, Oficina 2405, Zona Río, 22010 Tijuana",
    "phone": "+52 663 105 0377",
    "whatsapp": "+526631050377",
    "email": "info@drnicolasleyva.com",
    "rating": 5.0,
    "reviews": 95,
    "type": "Cirugía Plástica Facial & Corporal",
    "highlight": "Especialista certificado con agenda completa de valoraciones presenciales y virtuales"
  },
  {
    "id": 27,
    "vertical": "aesthetics",
    "name": "Beauty Enhance Spa",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza, Suite 1803, Zona Río, 22010 Tijuana",
    "phone": "+1 619 399 7449",
    "whatsapp": "+16193997449",
    "email": "info@beauty-enhance.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Medicina Estética & Spa Médico",
    "highlight": "Procedimientos no invasivos (Bótox, rellenos) con alto flujo de citas semanales"
  },
  {
    "id": 28,
    "vertical": "aesthetics",
    "name": "Plastiks (Dr. Rafael Camberos)",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza, Suite 1003, Zona Río, 22010 Tijuana",
    "phone": "+52 664 686 2500",
    "whatsapp": "+526643685244",
    "email": "info@plasticsurgery-tijuana.com",
    "rating": 4.9,
    "reviews": 210,
    "type": "Cirugía Estética de Contorno Corporal",
    "highlight": "Pacientes binacionales que requieren confirmación rigurosa de estancia"
  },
  {
    "id": 29,
    "vertical": "aesthetics",
    "name": "Dra. Brenda Barba - Belleza y Salud",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 10050, Piso 3, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 634 3290",
    "whatsapp": "+526644081290",
    "email": "citas@drabrendabarba.com",
    "rating": 4.9,
    "reviews": 115,
    "type": "Medicina Estética & Armonización Facial",
    "highlight": "Cabinas continuas de aparatología y rellenos con tiempos estrictos por paciente"
  },
  {
    "id": 30,
    "vertical": "aesthetics",
    "name": "CERO Cirugía Plástica",
    "zone": "Zona Río",
    "address": "Dr. Atl 2084, Torre Zentrum Piso 5, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 0122",
    "whatsapp": "+526645521940",
    "email": "contacto@cerocirugiaplastica.com",
    "rating": 4.9,
    "reviews": 130,
    "type": "Cirugía Plástica & Medicina Anti-edad",
    "highlight": "Torre Zentrum con citas de valoración de 45 minutos individuales"
  },
  {
    "id": 31,
    "vertical": "aesthetics",
    "name": "Dr. Marco Soto Cirugía Plástica",
    "zone": "NewCity Medical Plaza",
    "address": "Paseo del Centenario 9580 Int. 701-B, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 200 0894",
    "whatsapp": "+16198920023",
    "email": "info@drmarcosoto.com",
    "rating": 4.9,
    "reviews": 160,
    "type": "Cirugía Estética Avanzada",
    "highlight": "Turismo quirúrgico con pacientes de California y Canadá"
  },
  {
    "id": 32,
    "vertical": "aesthetics",
    "name": "Dr. Ángel Castro Urquizo",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Oficina 1804-A, Zona Río, 22010 Tijuana",
    "phone": "+52 663 402 2164",
    "whatsapp": "+526634022164",
    "email": "citas@drcastrorhinoplasty.com",
    "rating": 4.9,
    "reviews": 125,
    "type": "Rinoplastia & Cirugía Facial",
    "highlight": "Especialista en rinoplastia estética y funcional con citas de alta demanda"
  },
  {
    "id": 33,
    "vertical": "aesthetics",
    "name": "Dr. José Luis Flores Valdivia",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Consultorio 501-B, Zona Río, 22010 Tijuana",
    "phone": "+52 664 200 3875",
    "whatsapp": "+526642003875",
    "email": "doctor@floresvaldivia.com",
    "rating": 5.0,
    "reviews": 88,
    "type": "Cirugía Plástica Certificada",
    "highlight": "Consultorio acreditado por CMCPER con valoraciones previas por videollamada"
  },
  {
    "id": 34,
    "vertical": "aesthetics",
    "name": "Vivezza Medical Spa",
    "zone": "Zona Río",
    "address": "Erasmo Castellanos Q. #1874 Int 102, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 974 9264",
    "whatsapp": "+526649749264",
    "email": "citas@vivezzamedicalspa.com",
    "rating": 4.8,
    "reviews": 145,
    "type": "Medicina Estética & Dermoestética",
    "highlight": "Tratamientos láser, depilación y bioestimuladores con alto flujo diario"
  },
  {
    "id": 35,
    "vertical": "aesthetics",
    "name": "Cammel Plastic Surgery (Dr. Daniel Camacho)",
    "zone": "Zona Río",
    "address": "Diego Rivera 2351 Suite 705, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 686 2600",
    "whatsapp": "+526646862600",
    "email": "info@cammelplasticsurgery.com",
    "rating": 4.8,
    "reviews": 170,
    "type": "Cirugía Plástica & Reconstructiva",
    "highlight": "Clínica consolidada en Zona Río con agendas de quirófano programadas"
  },
  {
    "id": 36,
    "vertical": "aesthetics",
    "name": "Cirugía Plástica Ideal (Dr. Ariel Nieblas)",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Consultorio 2407, Zona Río, 22010 Tijuana",
    "phone": "+52 664 678 7302",
    "whatsapp": "+526646787302",
    "email": "info@idealsurgery.com",
    "rating": 4.9,
    "reviews": 110,
    "type": "Contorno Corporal & Mamoplastia",
    "highlight": "Piso 24 de NewCity con atención bilingüe personalizada"
  },
  {
    "id": 37,
    "vertical": "aesthetics",
    "name": "Rios MD Plastics (Dr. Andrei Ríos)",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 10488, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 670 3359",
    "whatsapp": "+526646703359",
    "email": "info@riosmdplastics.com",
    "rating": 4.9,
    "reviews": 135,
    "type": "Cirugía Plástica & Procedimientos Estéticos",
    "highlight": "Clínica privada en Sánchez Taboada con alta presencia en redes sociales"
  },
  {
    "id": 38,
    "vertical": "aesthetics",
    "name": "Gardel Plastic Surgery (Dr. Gastón De la Garza)",
    "zone": "Agua Caliente",
    "address": "Blvd. Agua Caliente 4558-1503, Torres de Agua Caliente, 22014 Tijuana",
    "phone": "+52 664 686 5156",
    "whatsapp": "+526642041573",
    "email": "drgaston@gardelplastic.com",
    "rating": 4.8,
    "reviews": 190,
    "type": "Instituto de Cirugía Plástica",
    "highlight": "Torres de Agua Caliente con más de 20 años de trayectoria"
  },
  {
    "id": 39,
    "vertical": "aesthetics",
    "name": "Dr. Gilberto Montfort Margain",
    "zone": "Zona Río",
    "address": "Centro Médico Premier, Antonio Caso 2055 Suite 304, 22010 Tijuana",
    "phone": "+52 664 684 0958",
    "whatsapp": "+526644801400",
    "email": "gilmontmd@gmail.com",
    "rating": 4.9,
    "reviews": 140,
    "type": "Cirugía Plástica & Microcirugía",
    "highlight": "Centro Médico Premier con pacientes de cirugía mayor y revisiones"
  },
  {
    "id": 40,
    "vertical": "aesthetics",
    "name": "Dermatológica Tijuana",
    "zone": "Zona Río",
    "address": "Leona Vicario 1451, Edificio Río Médica, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 684 2400",
    "whatsapp": "+526631974610",
    "email": "tijuana@dermatologica.org",
    "rating": 4.7,
    "reviews": 320,
    "type": "Dermatología Clínica & Láser Estético",
    "highlight": "Edificio Río Médica con el mayor volumen de consultas de piel de Tijuana"
  },
  {
    "id": 41,
    "vertical": "aesthetics",
    "name": "AmeriDerma Clínica Dermatológica",
    "zone": "Zona Río",
    "address": "Edificio San José, Leona Vicario 1450 Suite 106, 22010 Tijuana",
    "phone": "+52 664 684 0410",
    "whatsapp": "+526646840410",
    "email": "adelaidomd@gmail.com",
    "rating": 4.8,
    "reviews": 115,
    "type": "Dermatología Cosmética & Rejuvenecimiento",
    "highlight": "Consultas dermatológicas estéticas y procedimientos de consultorio"
  },
  {
    "id": 42,
    "vertical": "aesthetics",
    "name": "Kumano Clínica Estética",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Int. 1507, Zona Río, 22010 Tijuana",
    "phone": "+52 664 492 8010",
    "whatsapp": "+526644928010",
    "email": "kumanospa@gmail.com",
    "rating": 4.9,
    "reviews": 98,
    "type": "Medicina Estética de Precisión",
    "highlight": "Piso 15 de NewCity con tecnología avanzada antienvejecimiento"
  },
  {
    "id": 43,
    "vertical": "aesthetics",
    "name": "Wellnic Cirugía Plástica",
    "zone": "Zona Río",
    "address": "Dr. Atl 2084 Piso 3 Of. 303, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 302 0133",
    "whatsapp": "+526643020133",
    "email": "contacto@wellnictijuana.com",
    "rating": 4.8,
    "reviews": 125,
    "type": "Cirugía Estética & Moldeado Corporal",
    "highlight": "Enfoque en procedimientos ambulatorios y tratamientos estéticos sin bisturí"
  },
  {
    "id": 44,
    "vertical": "aesthetics",
    "name": "Moldearte La Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Blvd. Agua Caliente 9333 Int. 2C, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 435 4627",
    "whatsapp": "+526645768665",
    "email": "citas@moldearte.com",
    "rating": 4.7,
    "reviews": 280,
    "type": "Clínica de Moldeado Corporal & Bótox",
    "highlight": "Cadena líder de medicina estética con cientos de citas semanales"
  },
  {
    "id": 45,
    "vertical": "aesthetics",
    "name": "Moldearte Zona Río",
    "zone": "Zona Río",
    "address": "David Alfaro Siqueiros 2789 Local 103, Zona Río, 22010 Tijuana",
    "phone": "+52 664 634 1120",
    "whatsapp": "+526645768665",
    "email": "zonario@moldearte.com",
    "rating": 4.8,
    "reviews": 310,
    "type": "Aparatología Estética & Toxina Botulínica",
    "highlight": "Sucursal de alta afluencia frente a centros comerciales en Zona Río"
  },
  {
    "id": 46,
    "vertical": "aesthetics",
    "name": "About Me TJ Aesthetic Medicine",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 10093, Zona Urbana Río, 22010 Tijuana",
    "phone": "+1 619 706 0205",
    "whatsapp": "+526633218306",
    "email": "hello@aboutmetj.com",
    "rating": 4.9,
    "reviews": 85,
    "type": "Endolift, Rellenos & Armonización",
    "highlight": "Clínica boutique a 5 minutos de la garita de San Ysidro"
  },
  {
    "id": 47,
    "vertical": "aesthetics",
    "name": "Bellphoria Medical Spa",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Piso 12, Zona Urbana Río, 22010 Tijuana",
    "phone": "+1 619 350 1488",
    "whatsapp": "+16193501488",
    "email": "info@bellphoria.com",
    "rating": 4.9,
    "reviews": 175,
    "type": "Medical Spa & Tratamientos Faciales",
    "highlight": "Instalaciones de lujo en NewCity con citas programadas continuas"
  },
  {
    "id": 48,
    "vertical": "aesthetics",
    "name": "Chapultepec Surgery Center",
    "zone": "Chapultepec",
    "address": "Sonora 3734, Col. Chapultepec, 22020 Tijuana",
    "phone": "+52 664 686 5400",
    "whatsapp": "+526646865400",
    "email": "info@chapultepecsurgery.com",
    "rating": 4.8,
    "reviews": 160,
    "type": "Centro Quirúrgico Estético",
    "highlight": "Centro quirúrgico privado en la exclusiva colonia Chapultepec"
  },
  {
    "id": 49,
    "vertical": "physio",
    "name": "FisioDoctors / KinesioMed",
    "zone": "La Mesa",
    "address": "Blvd. Díaz Ordaz #14072, Local 3, Col. José Sandoval, 22105 Tijuana",
    "phone": "+52 664 386 7244",
    "whatsapp": "+526643867244",
    "email": "contacto@fisiodoctors.com",
    "rating": 4.9,
    "reviews": 165,
    "type": "Fisioterapia, Rehabilitación & Kinesiología",
    "highlight": "Programas continuos de 8 a 15 sesiones donde la adherencia del paciente es clave"
  },
  {
    "id": 50,
    "vertical": "physio",
    "name": "Centro Quiropráctico de Tijuana",
    "zone": "Zona Río",
    "address": "Guadalupe Victoria 9308 Piso 2, Cons. 204, Zona Río, 22010 Tijuana",
    "phone": "+52 664 634 6124",
    "whatsapp": "+526646346124",
    "email": "citas@quiropracticatijuana.com",
    "rating": 4.9,
    "reviews": 140,
    "type": "Ajuste Vertebral & Quiropráctica",
    "highlight": "Consultas de seguimiento periódico semanal para alivio de dolor crónico"
  },
  {
    "id": 51,
    "vertical": "physio",
    "name": "FisioClinic Tijuana",
    "zone": "20 de Noviembre",
    "address": "Plaza San José, Av. 20 de Noviembre #315-5, 22100 Tijuana",
    "phone": "+52 664 136 1398",
    "whatsapp": "+526641361398",
    "email": "contacto@fisioclinictijuana.com",
    "rating": 4.8,
    "reviews": 98,
    "type": "Terapia Física Deportiva & Readaptación",
    "highlight": "Pacientes deportistas con horarios de tarde de alta demanda y cancelaciones de última hora"
  },
  {
    "id": 52,
    "vertical": "physio",
    "name": "PhysioPro Tijuana",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 9365, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 720 1890",
    "whatsapp": "+526634875859",
    "email": "info@physioprotijuana.com",
    "rating": 5.0,
    "reviews": 85,
    "type": "Fisioterapia de Alto Rendimiento",
    "highlight": "Citas de 1 hora individualizada donde una inasistencia detiene por completo el cubículo"
  },
  {
    "id": 53,
    "vertical": "physio",
    "name": "FORT Terapia Física y Rehabilitación",
    "zone": "Zona Río",
    "address": "José María Velasco 2664, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 510 1337",
    "whatsapp": "+526645101337",
    "email": "citas@fortrehab.com",
    "rating": 4.9,
    "reviews": 110,
    "type": "Rehabilitación Traumatológica & Postquirúrgica",
    "highlight": "Centro especializado en rehabilitación de rodilla y columna con terapias seriadas"
  },
  {
    "id": 54,
    "vertical": "physio",
    "name": "Quiropráctico Alvarado & Massage Spa",
    "zone": "Zona Río",
    "address": "Francisco Javier Mina 1623, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 279 1656",
    "whatsapp": "+526642791656",
    "email": "alvaradoquiropractico@gmail.com",
    "rating": 4.8,
    "reviews": 130,
    "type": "Alineación Quiropráctica & Terapia Descontracturante",
    "highlight": "Consultas continuas de pacientes de oficina de Zona Río"
  },
  {
    "id": 55,
    "vertical": "physio",
    "name": "ROA Tijuana Rehabilitación",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 10050 Int. 201, Zona Río, 22010 Tijuana",
    "phone": "+52 664 210 9211",
    "whatsapp": "+526643341718",
    "email": "contacto@roatijuana.com",
    "rating": 4.9,
    "reviews": 145,
    "type": "Ondas de Choque & Terapia Musculoesquelética",
    "highlight": "Tratamientos de choque con citas programadas cada 5 días"
  },
  {
    "id": 56,
    "vertical": "physio",
    "name": "CTM Centro de Terapias Musculares",
    "zone": "Otay",
    "address": "Av. Las Plazas 10-A, Rinconada de Otay, 22430 Tijuana",
    "phone": "+52 664 438 8948",
    "whatsapp": "+526644388948",
    "email": "ctmotay@gmail.com",
    "rating": 4.8,
    "reviews": 85,
    "type": "Fisioterapia Laboral & Masaje Terapéutico",
    "highlight": "Convenios con empresas maquiladoras de Otay para rehabilitación de personal"
  },
  {
    "id": 57,
    "vertical": "physio",
    "name": "FisioSalud Deportiva Otay",
    "zone": "Otay",
    "address": "Plaza Cimarrón Otay, Calz. del Tecnológico, 22427 Tijuana",
    "phone": "+52 664 487 8419",
    "whatsapp": "+526644878419",
    "email": "fisiosaludotay@gmail.com",
    "rating": 4.9,
    "reviews": 92,
    "type": "Rehabilitación Deportiva & Fisioterapia",
    "highlight": "Ubicada junto a UABC Otay con estudiantes y atletas locales"
  },
  {
    "id": 58,
    "vertical": "physio",
    "name": "Kinefit Fisioterapia y Entrenamiento",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Colima 2380, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 686 1120",
    "whatsapp": "+526646861120",
    "email": "info@kinefittj.com",
    "rating": 4.9,
    "reviews": 115,
    "type": "Fisioterapia Funcional & Readaptación",
    "highlight": "Clínica boutique en la Cacho con pacientes ejecutivos"
  },
  {
    "id": 59,
    "vertical": "physio",
    "name": "Centro Quiropráctico de las Californias",
    "zone": "Zona Río",
    "address": "Diego Rivera 2338 Piso 3, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 7720",
    "whatsapp": "+526646847720",
    "email": "quiropracticacalifornias@gmail.com",
    "rating": 4.8,
    "reviews": 160,
    "type": "Quiropráctica Específica & Descompresión",
    "highlight": "Pacientes transfronterizos con agendas matutinas de alta puntualidad"
  },
  {
    "id": 60,
    "vertical": "physio",
    "name": "Rehab Total Playas",
    "zone": "Playas de Tijuana",
    "address": "Paseo Playas de Tijuana 450, Playas, 22500 Tijuana",
    "phone": "+52 664 630 1920",
    "whatsapp": "+526646301920",
    "email": "citas@rehabtotalplayas.com",
    "rating": 4.9,
    "reviews": 78,
    "type": "Fisioterapia Geriátrica & Adultos Mayores",
    "highlight": "Pacientes jubilados en Playas con requerimiento de recordatorios telefónicos y por WhatsApp"
  },
  {
    "id": 61,
    "vertical": "physio",
    "name": "FisioElite Tijuana",
    "zone": "Zona Río",
    "address": "Misión de San Javier 10640, Zona Río, 22010 Tijuana",
    "phone": "+52 664 686 3390",
    "whatsapp": "+526646863390",
    "email": "contacto@fisioelitetj.com",
    "rating": 5.0,
    "reviews": 82,
    "type": "Electrolisis Percutánea & Neuromodulación",
    "highlight": "Terapias avanzadas de dolor crónico con sesiones semanales exactas"
  },
  {
    "id": 62,
    "vertical": "physio",
    "name": "QuiroVida Tijuana",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 9410, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 0090",
    "whatsapp": "+526646840090",
    "email": "quirovidatijuana@gmail.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Quiropráctica Integral",
    "highlight": "Flujo continuo de pacientes que requieren confirmación para no perder su turno"
  },
  {
    "id": 63,
    "vertical": "physio",
    "name": "NeuroFisio Tijuana",
    "zone": "Zona Río",
    "address": "Leona Vicario 1450, Edificio San José Piso 3, 22010 Tijuana",
    "phone": "+52 664 684 5510",
    "whatsapp": "+526646845510",
    "email": "info@neurofisiotj.com",
    "rating": 4.9,
    "reviews": 95,
    "type": "Fisioterapia Neurológica & Pediátrica",
    "highlight": "Atención a niños y adultos con secuelas neurológicas que asisten con acompañante"
  },
  {
    "id": 64,
    "vertical": "physio",
    "name": "Clínica de la Columna Tijuana",
    "zone": "Zona Río",
    "address": "Paseo del Centenario 10310 Piso 7, Zona Río, 22010 Tijuana",
    "phone": "+52 664 200 4410",
    "whatsapp": "+526642004410",
    "email": "citas@columnatijuana.com",
    "rating": 4.8,
    "reviews": 110,
    "type": "Tratamiento de Hernias Discales sin Cirugía",
    "highlight": "Sesiones continuas de descompresión espinal con alta tasa de éxito"
  },
  {
    "id": 65,
    "vertical": "physio",
    "name": "FisioActiva La Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Calle España 2120, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 663 320 8840",
    "whatsapp": "+526633208840",
    "email": "contacto@fisioactivatj.com",
    "rating": 4.9,
    "reviews": 88,
    "type": "Terapia Física Postural & Ergonomía",
    "highlight": "Consultas dirigidas a profesionistas con dolores de cuello y espalda"
  },
  {
    "id": 66,
    "vertical": "physio",
    "name": "OsteoClinic Tijuana",
    "zone": "Zona Río",
    "address": "Dr. Atl 2084, Torre Zentrum Piso 2, 22010 Tijuana",
    "phone": "+52 664 684 1990",
    "whatsapp": "+526646841990",
    "email": "osteoclinictj@gmail.com",
    "rating": 4.9,
    "reviews": 105,
    "type": "Osteopatía & Terapia Manual Ortopédica",
    "highlight": "Consultas individuales de 50 minutos sin retrasos"
  },
  {
    "id": 67,
    "vertical": "physio",
    "name": "FisioSport Otay",
    "zone": "Otay",
    "address": "Blvd. Industrial 1820, Otay Constituyentes, 22457 Tijuana",
    "phone": "+52 664 970 2230",
    "whatsapp": "+526649702230",
    "email": "fisiosportotay@gmail.com",
    "rating": 4.7,
    "reviews": 120,
    "type": "Fisioterapia Deportiva y Descarga Muscular",
    "highlight": "Paquetes mensuales de descargas musculares para corredores y crossfitters"
  },
  {
    "id": 68,
    "vertical": "physio",
    "name": "QuiroHealth Playas",
    "zone": "Playas de Tijuana",
    "address": "Av. del Pacífico 880, Playas de Tijuana, 22504 Tijuana",
    "phone": "+52 664 680 7710",
    "whatsapp": "+526646807710",
    "email": "quirohealthplayas@gmail.com",
    "rating": 4.8,
    "reviews": 70,
    "type": "Quiropráctica Familiar",
    "highlight": "Comunidad binacional de Playas con citas recurrentes de fin de semana"
  },
  {
    "id": 69,
    "vertical": "physio",
    "name": "Rehabilita TJ",
    "zone": "La Mesa",
    "address": "Av. Guadalajara 3110, Las Palmas, La Mesa, 22106 Tijuana",
    "phone": "+52 664 626 4490",
    "whatsapp": "+526646264490",
    "email": "contacto@rehabilitatj.com",
    "rating": 4.8,
    "reviews": 135,
    "type": "Terapia Física Integral & Estimulación Temprana",
    "highlight": "Terapia física para todas las edades con agendas muy concurridas"
  },
  {
    "id": 70,
    "vertical": "physio",
    "name": "Spine & Joint Tijuana",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Piso 16 Suite 1602, 22010 Tijuana",
    "phone": "+1 619 450 8820",
    "whatsapp": "+16194508820",
    "email": "info@spinejointtj.com",
    "rating": 4.9,
    "reviews": 92,
    "type": "Medicina Física y Rehabilitación Intervencionista",
    "highlight": "Piso 16 de NewCity enfocado en pacientes extranjeros de dolor articular"
  },
  {
    "id": 71,
    "vertical": "physio",
    "name": "FisioTherapy Center Río",
    "zone": "Zona Río",
    "address": "Circuito Bursátil 9043 Piso 2, The F Tower, 22010 Tijuana",
    "phone": "+52 664 683 9910",
    "whatsapp": "+526646839910",
    "email": "citas@fisiotherapycenter.mx",
    "rating": 4.9,
    "reviews": 105,
    "type": "Fisioterapia Integral",
    "highlight": "The F Tower con servicios de terapia física para pacientes operados en la torre"
  },
  {
    "id": 72,
    "vertical": "physio",
    "name": "MoveWell Fisioterapia",
    "zone": "Zona Río",
    "address": "Av. Antonio Caso 2055, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 684 3380",
    "whatsapp": "+526646843380",
    "email": "movewelltijuana@gmail.com",
    "rating": 5.0,
    "reviews": 65,
    "type": "Readaptación al Movimiento",
    "highlight": "Sesiones uno a uno con terapeutas certificados"
  },
  {
    "id": 73,
    "vertical": "auto",
    "name": "Aquatunel Auto Detail",
    "zone": "Zona Río",
    "address": "Av. Independencia 1753, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 634 0213",
    "whatsapp": "+526646340213",
    "email": "contacto@aquatunel.mx",
    "rating": 4.6,
    "reviews": 310,
    "type": "Detallado Profesional, Pulido & Cerámico",
    "highlight": "Alto flujo de vehículos en Zona Río que requieren alertas automáticas de entrega"
  },
  {
    "id": 74,
    "vertical": "auto",
    "name": "Goncho Garage Autodetallado",
    "zone": "Otay",
    "address": "Calzada del Tecnológico 1380, Otay, 22427 Tijuana",
    "phone": "+52 664 814 3177",
    "whatsapp": "+526648143177",
    "email": "gonchogarage@gmail.com",
    "rating": 4.9,
    "reviews": 90,
    "type": "Corrección de Pintura & Wrapping",
    "highlight": "Servicios de 2 a 3 días donde el dueño quiere saber el avance sin llamar a recepción"
  },
  {
    "id": 75,
    "vertical": "auto",
    "name": "Otay Shield Detailing",
    "zone": "Otay",
    "address": "Blvd. Bellas Artes 20110, Ciudad Industrial Otay, 22444 Tijuana",
    "phone": "+52 664 750 3344",
    "whatsapp": "+526647503344",
    "email": "citas@otayshielddetailing.com",
    "rating": 4.9,
    "reviews": 110,
    "type": "PPF (Paint Protection Film) & Detallado",
    "highlight": "Clientes de alto ticket que cruzan de California para proteger sus autos nuevos"
  },
  {
    "id": 76,
    "vertical": "auto",
    "name": "Wrap & Detail Studio TJ",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 9210, Zona Río, 22010 Tijuana",
    "phone": "+52 664 420 8910",
    "whatsapp": "+526644208910",
    "email": "contacto@wrapdetailtj.com",
    "rating": 4.8,
    "reviews": 85,
    "type": "Vinil Wrapping & Personalización",
    "highlight": "Citas programadas de recepción con autos deportivos y de lujo"
  },
  {
    "id": 77,
    "vertical": "auto",
    "name": "Car Wrap Tijuana",
    "zone": "Playas de Tijuana",
    "address": "Paseo Playas de Tijuana 120, Playas, 22500 Tijuana",
    "phone": "+52 664 539 9162",
    "whatsapp": "+526645399162",
    "email": "info@carwraptijuana.com",
    "rating": 4.9,
    "reviews": 125,
    "type": "Rotulación Automotriz & Cambio de Color",
    "highlight": "Taller reconocido en Playas para wraps completos y gráficos comerciales"
  },
  {
    "id": 78,
    "vertical": "auto",
    "name": "Tijuana Wraps",
    "zone": "Zona Centro",
    "address": "Av. Niños Héroes 890, Zona Centro, 22000 Tijuana",
    "phone": "+1 619 616 5869",
    "whatsapp": "+16196165869",
    "email": "contact@tijuanawraps.com",
    "rating": 4.9,
    "reviews": 180,
    "type": "PPF & Vinyl Wrap Binacional",
    "highlight": "Clientela constante de San Diego y sur de California para rotulación de autos"
  },
  {
    "id": 79,
    "vertical": "auto",
    "name": "Las Americas Auto Detallado",
    "zone": "Agua Caliente",
    "address": "Blvd. de Las Americas 4322, Lomas de Agua Caliente, 22030 Tijuana",
    "phone": "+52 664 104 1728",
    "whatsapp": "+526641041728",
    "email": "lasamericasdetail@gmail.com",
    "rating": 4.8,
    "reviews": 95,
    "type": "Detallado Premium & Tratamiento Cerámico",
    "highlight": "Zona residencial de alta gama en Agua Caliente con clientes recurrentes"
  },
  {
    "id": 80,
    "vertical": "auto",
    "name": "Tijuana Body Shop & Detail",
    "zone": "El Florido",
    "address": "Blvd. Florido #3104, Fracc. Jardín Dorado, 22214 Tijuana",
    "phone": "+52 664 429 2761",
    "whatsapp": "+526644292761",
    "email": "info@tijuanabodyshop.com",
    "rating": 4.7,
    "reviews": 140,
    "type": "Hojalatería, Pintura & Detallado Completo",
    "highlight": "Taller automotriz integral con procesos de varios días y notificaciones de avance"
  },
  {
    "id": 81,
    "vertical": "auto",
    "name": "Servicio Automotriz Mundial",
    "zone": "Zona Río",
    "address": "Blvd. Rodolfo Sánchez Taboada 2093, Zona Río, 22010 Tijuana",
    "phone": "+52 664 688 7780",
    "whatsapp": "+526646887780",
    "email": "zonario@automotrizmundial.com",
    "rating": 4.7,
    "reviews": 210,
    "type": "Mantenimiento Preventivo & Mecánica",
    "highlight": "Taller corporativo en Zona Río con recepción de flotillas de empresas"
  },
  {
    "id": 82,
    "vertical": "auto",
    "name": "Autoproductos Servicio Zona Río",
    "zone": "Zona Río",
    "address": "Av. Eusebio Kino 4308, Zona Río, 22010 Tijuana",
    "phone": "+52 664 969 1900",
    "whatsapp": "+526649691900",
    "email": "servicio@autoproductos.com",
    "rating": 4.6,
    "reviews": 195,
    "type": "Centro de Servicio Automotriz & Diagnóstico",
    "highlight": "Recepción continua de vehículos para afinaciones y frenos con citas previas"
  },
  {
    "id": 83,
    "vertical": "auto",
    "name": "Detailer Zone La Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Colima 2450, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 380 9910",
    "whatsapp": "+526643809910",
    "email": "detailerzonecacho@gmail.com",
    "rating": 4.9,
    "reviews": 85,
    "type": "Lavado de Detalle & Protección Cerámica 9H",
    "highlight": "Espacio exclusivo para autos europeos y clásicos en la Cacho"
  },
  {
    "id": 84,
    "vertical": "auto",
    "name": "Diamond Car Wash & Detail Studio",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 9900, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 4490",
    "whatsapp": "+526646844490",
    "email": "diamonddetailtj@gmail.com",
    "rating": 4.8,
    "reviews": 160,
    "type": "Descontaminado de Pintura & Interiores",
    "highlight": "Alto tránsito en Paseo de los Héroes con clientes que dejan el auto y van a oficinas"
  },
  {
    "id": 85,
    "vertical": "auto",
    "name": "Speedy Wrap & Signs TJ",
    "zone": "Otay",
    "address": "Calz. del Tecnológico 1400, Otay Universidad, 22427 Tijuana",
    "phone": "+52 664 607 8820",
    "whatsapp": "+526646078820",
    "email": "speedywraptj@gmail.com",
    "rating": 4.8,
    "reviews": 110,
    "type": "Rotulación Comercial & Car Wrapping",
    "highlight": "Rotulación de vehículos comerciales y camionetas de reparto"
  },
  {
    "id": 86,
    "vertical": "auto",
    "name": "ProDetail Tijuana",
    "zone": "Zona Río",
    "address": "Dr. Atl 2050, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 684 1150",
    "whatsapp": "+526646841150",
    "email": "prodetailtijuana@gmail.com",
    "rating": 4.9,
    "reviews": 130,
    "type": "Corrección de Swirls & Abrillantado",
    "highlight": "Especialistas en eliminación de micro-rayas en autos oscuros"
  },
  {
    "id": 87,
    "vertical": "auto",
    "name": "Black Diamond Detailing",
    "zone": "Playas de Tijuana",
    "address": "Av. del Agua 820, Playas de Tijuana, 22504 Tijuana",
    "phone": "+52 664 630 4420",
    "whatsapp": "+526646304420",
    "email": "blackdiamondplayas@gmail.com",
    "rating": 4.8,
    "reviews": 75,
    "type": "Lavado Premium & Sellador Marino",
    "highlight": "Servicios con protección anti-salitre para residentes de Playas"
  },
  {
    "id": 88,
    "vertical": "auto",
    "name": "Ceramic Pro Tijuana",
    "zone": "Zona Río",
    "address": "Diego Rivera 2320, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 686 9910",
    "whatsapp": "+526646869910",
    "email": "info@ceramicprotijuana.com",
    "rating": 5.0,
    "reviews": 95,
    "type": "Recubrimientos Cerámicos Certificados",
    "highlight": "Taller certificado oficial para garantías de cerámica automotriz"
  },
  {
    "id": 89,
    "vertical": "auto",
    "name": "Garage 664 Autodetallado",
    "zone": "La Mesa",
    "address": "Blvd. Federico Benítez 3400, La Mesa, 22105 Tijuana",
    "phone": "+52 664 621 5580",
    "whatsapp": "+526646215580",
    "email": "garage664tj@gmail.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Restauración de Faros & Tapicería",
    "highlight": "Citas programadas para lavado de interiores profundos sin químicos dañinos"
  },
  {
    "id": 90,
    "vertical": "auto",
    "name": "Elite Wraps & Tint TJ",
    "zone": "Zona Río",
    "address": "Blvd. Cuauhtémoc Sur 2400, 22010 Tijuana",
    "phone": "+52 664 684 8830",
    "whatsapp": "+526646848830",
    "email": "elitewrapstj@gmail.com",
    "rating": 4.9,
    "reviews": 105,
    "type": "Polarizado Nanocerámico & Vinil",
    "highlight": "Instalación de películas térmicas y cambio de vista en techo y cofres"
  },
  {
    "id": 91,
    "vertical": "auto",
    "name": "Llantas y Servicio Río",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 10100, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 2210",
    "whatsapp": "+526646842210",
    "email": "servicios@llantasrio.com",
    "rating": 4.7,
    "reviews": 240,
    "type": "Alineación, Balanceo & Suspensión",
    "highlight": "Servicios de 45 minutos donde la confirmación evita cuellos de botella en rampas"
  },
  {
    "id": 92,
    "vertical": "auto",
    "name": "Kustom Garage Tijuana",
    "zone": "Otay",
    "address": "Av. Calzada América 400, Otay Constituyentes, 22457 Tijuana",
    "phone": "+52 664 900 1190",
    "whatsapp": "+526649001190",
    "email": "kustomgaragetj@gmail.com",
    "rating": 4.9,
    "reviews": 85,
    "type": "Modificaciones & Detallado de Motor",
    "highlight": "Taller para proyectos de autos modificados y restauración"
  },
  {
    "id": 93,
    "vertical": "auto",
    "name": "Clean Car Studio",
    "zone": "Col. Cacho / Madero",
    "address": "Calle Durango 2100, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 663 210 4450",
    "whatsapp": "+526632104450",
    "email": "cleancarstudiotj@gmail.com",
    "rating": 4.9,
    "reviews": 70,
    "type": "Detallado Express & Vapor",
    "highlight": "Desinfección con vapor y detallado rápido para autos ejecutivos"
  },
  {
    "id": 94,
    "vertical": "auto",
    "name": "Wrap Master Tijuana",
    "zone": "Zona Centro",
    "address": "Calle 4ta #1890, Zona Centro, 22000 Tijuana",
    "phone": "+1 619 820 7710",
    "whatsapp": "+16198207710",
    "email": "wrapmastertijuana@gmail.com",
    "rating": 4.8,
    "reviews": 115,
    "type": "Rotulación Total & Diseños Personalizados",
    "highlight": "Diseño en computadora y aplicación de vinil en autos particulares y comerciales"
  },
  {
    "id": 95,
    "vertical": "auto",
    "name": "UltraDetail TJ",
    "zone": "Zona Río",
    "address": "Av. Francisco Javier Mina 1700, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 9900",
    "whatsapp": "+526646849900",
    "email": "ultradetailtj@gmail.com",
    "rating": 5.0,
    "reviews": 60,
    "type": "Corrección de Pintura Multietapa",
    "highlight": "Solo 2 autos por día para garantizar acabado de concurso"
  },
  {
    "id": 96,
    "vertical": "auto",
    "name": "Taller Mecánico Especializado Zona Río",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 10120, Zona Río, 22010 Tijuana",
    "phone": "+52 664 634 8870",
    "whatsapp": "+526646348870",
    "email": "tallersancheztaboada@gmail.com",
    "rating": 4.7,
    "reviews": 180,
    "type": "Diagnóstico por Computadora & Frenos",
    "highlight": "Citas de diagnóstico matutino con entregas el mismo día"
  },
  {
    "id": 97,
    "vertical": "beauty",
    "name": "Lash & Brow Studio Tijuana",
    "zone": "Col. Cacho / Madero",
    "address": "Calle Brasil 2240, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 512 8890",
    "whatsapp": "+526645128890",
    "email": "citas@lashstudiotj.com",
    "rating": 4.9,
    "reviews": 135,
    "type": "Extensiones de Pestañas & Micropigmentación",
    "highlight": "Citas de 2 horas continuas donde un no-show deja a la lashista sin ingresos"
  },
  {
    "id": 98,
    "vertical": "beauty",
    "name": "The Grooming Club Barbería",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 10231, Plaza Río Local 14, 22010 Tijuana",
    "phone": "+52 664 684 7712",
    "whatsapp": "+526643198840",
    "email": "info@thegroomingclub.mx",
    "rating": 4.8,
    "reviews": 210,
    "type": "Barbería Premium & Tratamientos Capilares",
    "highlight": "Sillones ocupados por reservación previa de profesionistas de Zona Río"
  },
  {
    "id": 99,
    "vertical": "beauty",
    "name": "Nail Lounge Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Colima 2150, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 663 118 9020",
    "whatsapp": "+526631189020",
    "email": "contacto@nailloungetj.com",
    "rating": 4.8,
    "reviews": 160,
    "type": "Uñas Esculturales & Manicura Rusa",
    "highlight": "Alto volumen de citas recurrentes cada 3 semanas con espacios limitados"
  },
  {
    "id": 100,
    "vertical": "beauty",
    "name": "Masaje Milagroso Spa",
    "zone": "Col. Dávila / Cacho",
    "address": "Av. Abelardo L. Rodríguez #2801 Piso 2, Col. Dávila, 22044 Tijuana",
    "phone": "+52 664 980 0675",
    "whatsapp": "+526644943331",
    "email": "citas@milagrosomasajespa.com",
    "rating": 4.9,
    "reviews": 240,
    "type": "Spa de Masajes Terapéuticos & Relajantes",
    "highlight": "Cabinas de masaje en pareja y sauna con alta tasa de reservación anticipada"
  },
  {
    "id": 101,
    "vertical": "beauty",
    "name": "Masaje y Bienestar Spa Tijuana",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 4499 Local 19, Zona Río, 22010 Tijuana",
    "phone": "+52 664 906 9481",
    "whatsapp": "+526647840459",
    "email": "citas@masajeybienestar.mx",
    "rating": 4.9,
    "reviews": 185,
    "type": "Masaje Descontracturante & Spa",
    "highlight": "Clientes corporativos de Zona Río que reservan en horario de comida y tarde"
  },
  {
    "id": 102,
    "vertical": "beauty",
    "name": "Beauty Zone Spa La Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Calle Durango #2337 Int. B, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 650 7320",
    "whatsapp": "+526634288655",
    "email": "info@beautyzonespa.com",
    "rating": 4.8,
    "reviews": 130,
    "type": "Faciales Avanzados & Moldeado Corporal",
    "highlight": "Protocolos faciales de 90 minutos en cabinas de alta demanda"
  },
  {
    "id": 103,
    "vertical": "beauty",
    "name": "The Barbershop La Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Plaza Brasil, Av. Brasil #9115 Local 8, Col. Madero, 22040 Tijuana",
    "phone": "+52 664 200 2991",
    "whatsapp": "+526642002991",
    "email": "cacho@thebarbershop.mx",
    "rating": 4.8,
    "reviews": 190,
    "type": "Cortes Tradicionales & Cuidado de Barba",
    "highlight": "Peluquería emblemática de la Cacho con citas consecutivas cada 45 minutos"
  },
  {
    "id": 104,
    "vertical": "beauty",
    "name": "Chop Shop Barbería & Salón",
    "zone": "Col. Dávila / Cacho",
    "address": "Calle Sonora 3100, Col. Dávila, 22044 Tijuana",
    "phone": "+52 664 980 0910",
    "whatsapp": "+526645742660",
    "email": "citas@chopshoptijuana.com",
    "rating": 4.9,
    "reviews": 220,
    "type": "Barbería & Spa Masculino",
    "highlight": "Ambiente vintage con alta demanda de citas en fines de semana"
  },
  {
    "id": 105,
    "vertical": "beauty",
    "name": "Alducin Barber Spa",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 16004, Zona Río, 22010 Tijuana",
    "phone": "+52 664 104 6228",
    "whatsapp": "+526641046228",
    "email": "alducinbarber@gmail.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Afeitado Clásico con Toalla Caliente & Corte",
    "highlight": "Ubicación en zona comercial con citas agendadas por WhatsApp"
  },
  {
    "id": 106,
    "vertical": "beauty",
    "name": "Pretty Eyebrows Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Jalisco 2390, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 238 4473",
    "whatsapp": "+526642384473",
    "email": "contacto@prettyeyebrows.com.mx",
    "rating": 4.9,
    "reviews": 175,
    "type": "Microblading, Lifting & Laminado",
    "highlight": "Especialistas en cejas con citas con depósito previo que requieren recordatorio"
  },
  {
    "id": 107,
    "vertical": "beauty",
    "name": "D'Pestañas Studio Tijuana",
    "zone": "Zona Río",
    "address": "Antonio Caso 2055 Piso 2, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 1920",
    "whatsapp": "+526646841920",
    "email": "dpestanasstudiotj@gmail.com",
    "rating": 4.9,
    "reviews": 145,
    "type": "Extensiones Volumen Ruso & Mega Volumen",
    "highlight": "Citas de aplicación y retoque quincenal con clientas transfronterizas"
  },
  {
    "id": 108,
    "vertical": "beauty",
    "name": "Gentlemen's Lounge Barber",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 9500, Zona Río, 22010 Tijuana",
    "phone": "+52 664 634 5510",
    "whatsapp": "+526646345510",
    "email": "info@gentlemensloungetj.com",
    "rating": 4.8,
    "reviews": 180,
    "type": "Barbería Ejecutiva & Tratamientos Faciales",
    "highlight": "Servicios con bebida de cortesía y sillones de piel que requieren confirmación"
  },
  {
    "id": 109,
    "vertical": "beauty",
    "name": "Glitz & Glam Nail Bar",
    "zone": "Zona Río",
    "address": "Diego Rivera 2350, Plaza Financiera, 22010 Tijuana",
    "phone": "+52 664 686 4410",
    "whatsapp": "+526646864410",
    "email": "glitzglamtj@gmail.com",
    "rating": 4.7,
    "reviews": 210,
    "type": "Uñas Acrílicas & Gelish",
    "highlight": "8 mesas de manicura continuas con citas cada hora"
  },
  {
    "id": 110,
    "vertical": "beauty",
    "name": "Velvet Lash & Brow Bar",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Piso 10, 22010 Tijuana",
    "phone": "+1 619 450 9910",
    "whatsapp": "+16194509910",
    "email": "citas@velvetlashtj.com",
    "rating": 5.0,
    "reviews": 90,
    "type": "Estudio de Mirada & Estética Facial",
    "highlight": "Clientas de San Diego que programan citas durante sus visitas médicas a NewCity"
  },
  {
    "id": 111,
    "vertical": "beauty",
    "name": "Barbería Tradición 1940",
    "zone": "Zona Centro",
    "address": "Calle 5ta #1940, Zona Centro, 22000 Tijuana",
    "phone": "+52 664 685 1190",
    "whatsapp": "+526646851190",
    "email": "tradicion1940barberia@gmail.com",
    "rating": 4.9,
    "reviews": 160,
    "type": "Cortes Clásicos & Cuidado de Barba",
    "highlight": "Clientela local de años con horarios muy concurridos los viernes y sábados"
  },
  {
    "id": 112,
    "vertical": "beauty",
    "name": "Urban Spa Tijuana",
    "zone": "Zona Río",
    "address": "Blvd. Rodolfo Sánchez Taboada 10090, 22010 Tijuana",
    "phone": "+52 664 684 7790",
    "whatsapp": "+526646847790",
    "email": "citas@urbanspatijuana.com",
    "rating": 4.8,
    "reviews": 130,
    "type": "Spa de Hidroterapia & Envolturas Corporales",
    "highlight": "Paquetes de spa de 3 horas que si se cancelan dejan el área inactiva"
  },
  {
    "id": 113,
    "vertical": "beauty",
    "name": "Studio 21 Nails & Hair",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Brasil 2310, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 686 2280",
    "whatsapp": "+526646862280",
    "email": "studio21cacho@gmail.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Balayage, Tintes & Uñas",
    "highlight": "Servicios de colorimetría de 3 a 4 horas que requieren anticipo y confirmación"
  },
  {
    "id": 114,
    "vertical": "beauty",
    "name": "Elite Barber Club",
    "zone": "Otay",
    "address": "Plaza Otay, Blvd. Lázaro Cárdenas 16000, 22457 Tijuana",
    "phone": "+52 664 970 1140",
    "whatsapp": "+526649701140",
    "email": "elitebarberotay@gmail.com",
    "rating": 4.7,
    "reviews": 175,
    "type": "Barbería Moderna & Diseños Urbanos",
    "highlight": "Ubicada en Otay con jóvenes y profesionistas de maquila"
  },
  {
    "id": 115,
    "vertical": "beauty",
    "name": "Lash Room Tijuana",
    "zone": "Playas de Tijuana",
    "address": "Paseo Playas de Tijuana 620, Playas, 22500 Tijuana",
    "phone": "+52 664 630 8890",
    "whatsapp": "+526646308890",
    "email": "lashroomplayas@gmail.com",
    "rating": 4.9,
    "reviews": 85,
    "type": "Diseño de Mirada en Playas",
    "highlight": "Estudio acogedor en Playas con cartera fiel de clientas recurrentes"
  },
  {
    "id": 116,
    "vertical": "beauty",
    "name": "The Royal Shave Barbería",
    "zone": "Zona Río",
    "address": "Erasmo Castellanos 1880, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 0020",
    "whatsapp": "+526646840020",
    "email": "royalshavetj@gmail.com",
    "rating": 4.8,
    "reviews": 120,
    "type": "Afeitado Imperial & Corte a Tijera",
    "highlight": "Peluqueros maestros con citas de media hora sin tiempos muertos"
  },
  {
    "id": 117,
    "vertical": "beauty",
    "name": "Lotus Spa & Bienestar",
    "zone": "Zona Río",
    "address": "Paseo del Centenario 10250, 22010 Tijuana",
    "phone": "+52 664 200 9940",
    "whatsapp": "+526642009940",
    "email": "lotusspatijuana@gmail.com",
    "rating": 4.9,
    "reviews": 110,
    "type": "Masajes con Piedras Calientes & Faciales",
    "highlight": "Cabinas aromáticas individuales con agenda semanal estricta"
  },
  {
    "id": 118,
    "vertical": "beauty",
    "name": "Mani & Pedi Studio Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Jalisco 2480, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 634 1170",
    "whatsapp": "+526646341170",
    "email": "manipedicacho@gmail.com",
    "rating": 4.8,
    "reviews": 95,
    "type": "Pedicura Spa & Esmaltado Semipermanente",
    "highlight": "Sillones de hidromasaje para pedicura con tiempos controlados"
  },
  {
    "id": 119,
    "vertical": "beauty",
    "name": "King's Barber Shop Playas",
    "zone": "Playas de Tijuana",
    "address": "Av. del Pacífico 1120, Playas de Tijuana, 22504 Tijuana",
    "phone": "+52 664 609 3320",
    "whatsapp": "+526646093320",
    "email": "kingsbarberplayas@gmail.com",
    "rating": 4.8,
    "reviews": 150,
    "type": "Barbería Familiar & Cortes Modernos",
    "highlight": "Peluquería popular en Playas con reservaciones constantes"
  },
  {
    "id": 120,
    "vertical": "beauty",
    "name": "Glow Beauty & Lash Bar",
    "zone": "Zona Río",
    "address": "Leona Vicario 1450, Suite 201, 22010 Tijuana",
    "phone": "+52 664 684 7740",
    "whatsapp": "+526646847740",
    "email": "glowbeautytj@gmail.com",
    "rating": 4.9,
    "reviews": 105,
    "type": "Lash Lifting & Tratamientos Dermoestéticos",
    "highlight": "Citas de embellecimiento facial previas a eventos sociales"
  },
  {
    "id": 121,
    "vertical": "wellness",
    "name": "Centro Integral de Psicología y Nutrición (CIPN)",
    "zone": "Zona Río",
    "address": "Dr. Atl 2084, Torre Zentrum Suite 302, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 3311",
    "whatsapp": "+526645109922",
    "email": "contacto@cipntijuana.com",
    "rating": 4.9,
    "reviews": 95,
    "type": "Terapia Psicológica & Consulta Nutricional",
    "highlight": "Horas exactas de consulta donde el ausentismo no se puede recuperar con otro paciente"
  },
  {
    "id": 122,
    "vertical": "wellness",
    "name": "Clínica de Nutrición y Bienestar Tijuana",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Jalisco 2500, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 634 8810",
    "whatsapp": "+526646348810",
    "email": "info@nutriciontj.com",
    "rating": 4.9,
    "reviews": 120,
    "type": "Planes Nutricionales & Composición Corporal",
    "highlight": "Citas de seguimiento quincenal con alta tasa de olvido de pacientes sin recordatorios"
  },
  {
    "id": 123,
    "vertical": "wellness",
    "name": "CONtacto Psicología Familiar",
    "zone": "Col. Cacho / Madero",
    "address": "Plaza Brasil Piso 2, Calle Brasil #491, Col. Madero, 22040 Tijuana",
    "phone": "+52 664 188 4639",
    "whatsapp": "+526641884639",
    "email": "citas@contactopsicologiafamiliar.com",
    "rating": 5.0,
    "reviews": 75,
    "type": "Psicoterapia Infantil, de Pareja y Familiar",
    "highlight": "Consultas familiares de 60 minutos con agenda completa por las tardes"
  },
  {
    "id": 124,
    "vertical": "wellness",
    "name": "Clínica Sanamente Psicología y Nutrición",
    "zone": "Zona Río",
    "address": "Francisco Javier Mina #1551 Piso 2, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 684 9920",
    "whatsapp": "+526646849920",
    "email": "citas@clinicasanamente.mx",
    "rating": 4.9,
    "reviews": 110,
    "type": "Psicoterapia Clínica & Psiconutrición",
    "highlight": "Enfoque integral que combina salud mental y hábitos alimenticios"
  },
  {
    "id": 125,
    "vertical": "wellness",
    "name": "Nutrimédica Especialistas en Control de Peso",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 9365 Suite 402, Zona Río, 22010 Tijuana",
    "phone": "+52 664 686 4480",
    "whatsapp": "+526646864480",
    "email": "contacto@nutrimedicatj.com",
    "rating": 4.8,
    "reviews": 140,
    "type": "Nutrición Clínica & Tratamiento Metabólico",
    "highlight": "Consultas periódicas de evaluación y bioimpedancia"
  },
  {
    "id": 126,
    "vertical": "wellness",
    "name": "Centro Psicológico de Tijuana (CPT)",
    "zone": "Zona Río",
    "address": "Diego Rivera 2351, Edificio Plaza Río Piso 4, 22010 Tijuana",
    "phone": "+52 664 684 1170",
    "whatsapp": "+526646841170",
    "email": "info@centropsicologicotijuana.org",
    "rating": 4.9,
    "reviews": 130,
    "type": "Terapia Cognitivo-Conductual & Ansiedad",
    "highlight": "Equipo de terapeutas con consultas presenciales y virtuales continuas"
  },
  {
    "id": 127,
    "vertical": "wellness",
    "name": "Nutrióloga Brenda Ramírez - Nutrición & Salud",
    "zone": "NewCity Medical Plaza",
    "address": "NewCity Medical Plaza Piso 14 Suite 1405, 22010 Tijuana",
    "phone": "+1 619 450 7710",
    "whatsapp": "+16194507710",
    "email": "citas@nutriologabrenda.com",
    "rating": 5.0,
    "reviews": 85,
    "type": "Nutrición Bariátrica & Deportiva",
    "highlight": "Pacientes postoperados en NewCity que requieren citas de seguimiento estricto"
  },
  {
    "id": 128,
    "vertical": "wellness",
    "name": "PsicoBienestar Tijuana",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Colima 2240, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 686 5530",
    "whatsapp": "+526646865530",
    "email": "citas@psicobienestartj.com",
    "rating": 4.9,
    "reviews": 90,
    "type": "Terapia Individual & Manejo del Estrés",
    "highlight": "Consultas dirigidas a profesionistas y ejecutivos de empresas"
  },
  {
    "id": 129,
    "vertical": "wellness",
    "name": "Nutrición Inteligente Tijuana",
    "zone": "Zona Río",
    "address": "Antonio Caso 2055 Piso 3, Zona Urbana Río, 22010 Tijuana",
    "phone": "+52 664 684 0045",
    "whatsapp": "+526646840045",
    "email": "nutricioninteligente.tj@gmail.com",
    "rating": 4.8,
    "reviews": 115,
    "type": "Planes Alimenticios Personalizados",
    "highlight": "Seguimiento quincenal de composición corporal con citas de 30 minutos"
  },
  {
    "id": 130,
    "vertical": "wellness",
    "name": "Centro de Salud Mental y Emocional",
    "zone": "Zona Río",
    "address": "Blvd. Sánchez Taboada 10050 Piso 4, 22010 Tijuana",
    "phone": "+52 664 634 2290",
    "whatsapp": "+526646342290",
    "email": "saludmental.tj@gmail.com",
    "rating": 4.9,
    "reviews": 105,
    "type": "Psiquiatría & Psicoterapia Integral",
    "highlight": "Consultas psiquiátricas y terapia de apoyo que requieren confirmación 24h antes"
  },
  {
    "id": 131,
    "vertical": "wellness",
    "name": "Equilibrio Nutricional La Cacho",
    "zone": "Col. Cacho / Madero",
    "address": "Calle España 2300, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 663 320 1190",
    "whatsapp": "+526633201190",
    "email": "equilibrio.cacho@gmail.com",
    "rating": 4.9,
    "reviews": 78,
    "type": "Nutrición Holística & Cambio de Hábitos",
    "highlight": "Consultas de 45 minutos con seguimiento semanal por WhatsApp"
  },
  {
    "id": 132,
    "vertical": "wellness",
    "name": "Psicoterapia Tijuana (Dra. Mónica Vega)",
    "zone": "Zona Río",
    "address": "Leona Vicario 1450, Suite 305, 22010 Tijuana",
    "phone": "+52 664 684 8815",
    "whatsapp": "+526646848815",
    "email": "dramonicavega@psicoterapiatijuana.com",
    "rating": 5.0,
    "reviews": 70,
    "type": "Psicoterapia Psicoanalítica & Duelo",
    "highlight": "Sesiones semanales continuas con pacientes fijos"
  },
  {
    "id": 133,
    "vertical": "wellness",
    "name": "NutriClínica Playas",
    "zone": "Playas de Tijuana",
    "address": "Paseo del Pedregal 400, Playas de Tijuana, 22500 Tijuana",
    "phone": "+52 664 630 2210",
    "whatsapp": "+526646302210",
    "email": "nutriclinicaplayas@gmail.com",
    "rating": 4.8,
    "reviews": 85,
    "type": "Nutrición Clínica & Control de Diabetes",
    "highlight": "Pacientes locales de Playas con citas regulares de seguimiento"
  },
  {
    "id": 134,
    "vertical": "wellness",
    "name": "Espacio Psicológico y Desarrollo",
    "zone": "Zona Río",
    "address": "Dr. Atl 2084, Torre Zentrum Suite 201, 22010 Tijuana",
    "phone": "+52 664 684 6620",
    "whatsapp": "+526646846620",
    "email": "citas@espaciopsicologicotj.com",
    "rating": 4.9,
    "reviews": 82,
    "type": "Orientación Vocacional & Terapia Adolescentes",
    "highlight": "Citas con padres y jóvenes los viernes y sábados"
  },
  {
    "id": 135,
    "vertical": "wellness",
    "name": "Nutrición Deportiva Pro TJ",
    "zone": "Otay",
    "address": "Calz. del Tecnológico 14100, Otay Universidad, 22427 Tijuana",
    "phone": "+52 664 970 8890",
    "whatsapp": "+526649708890",
    "email": "nutrideportivatj@gmail.com",
    "rating": 4.9,
    "reviews": 95,
    "type": "Nutrición para Atletas & Rendimiento Físico",
    "highlight": "Planes de suplementación y macronutrientes para deportistas"
  },
  {
    "id": 136,
    "vertical": "wellness",
    "name": "Centro de Apoyo Psicológico Comunitario",
    "zone": "La Mesa",
    "address": "Blvd. Díaz Ordaz 12600, La Mesa, 22105 Tijuana",
    "phone": "+52 664 621 3340",
    "whatsapp": "+526646213340",
    "email": "apoyopsicologicotj@gmail.com",
    "rating": 4.8,
    "reviews": 110,
    "type": "Terapia Breve & Talleres de Autoestima",
    "highlight": "Horarios matutinos y vespertinos con alta afluencia"
  },
  {
    "id": 137,
    "vertical": "wellness",
    "name": "Nutrióloga Daniela Solís",
    "zone": "Zona Río",
    "address": "Paseo de los Héroes 10093 Suite 204, 22010 Tijuana",
    "phone": "+52 664 684 1133",
    "whatsapp": "+526646841133",
    "email": "danielasolis.nutri@gmail.com",
    "rating": 5.0,
    "reviews": 68,
    "type": "Nutrición Materno-Infantil & Lactancia",
    "highlight": "Citas de asesoría a mamás primerizas que requieren confirmación previa"
  },
  {
    "id": 138,
    "vertical": "wellness",
    "name": "Clínica Emocional Tijuana",
    "zone": "Col. Cacho / Madero",
    "address": "Av. Brasil 2400, Col. Madero (Cacho), 22040 Tijuana",
    "phone": "+52 664 686 7710",
    "whatsapp": "+526646867710",
    "email": "clinicaemocionaltj@gmail.com",
    "rating": 4.9,
    "reviews": 75,
    "type": "Terapia EMDR & Trauma",
    "highlight": "Sesiones especializadas de 60 minutos con agenda estricta"
  },
  {
    "id": 139,
    "vertical": "wellness",
    "name": "NutriFit Tijuana",
    "zone": "Zona Río",
    "address": "Diego Rivera 2338 Piso 2, Zona Río, 22010 Tijuana",
    "phone": "+52 664 684 9980",
    "whatsapp": "+526646849980",
    "email": "nutrifittj@gmail.com",
    "rating": 4.8,
    "reviews": 125,
    "type": "Asesoría Nutricional para Fitness",
    "highlight": "Citas constantes de evaluación de grasa corporal y masa muscular"
  },
  {
    "id": 140,
    "vertical": "wellness",
    "name": "Psicología Infantil y Neurodesarrollo",
    "zone": "Zona Río",
    "address": "Antonio Caso 2055 Suite 102, 22010 Tijuana",
    "phone": "+52 664 684 2288",
    "whatsapp": "+526646842288",
    "email": "neurodesarrollotj@gmail.com",
    "rating": 4.9,
    "reviews": 90,
    "type": "Evaluación Neuropsicológica & TDAH",
    "highlight": "Pruebas diagnósticas que requieren 2 horas de evaluación continua"
  },
  {
    "id": 141,
    "vertical": "wellness",
    "name": "Vital Nutrición y Salud",
    "zone": "Playas de Tijuana",
    "address": "Av. del Pacífico 900, Playas de Tijuana, 22504 Tijuana",
    "phone": "+52 664 630 1150",
    "whatsapp": "+526646301150",
    "email": "vitalnutricionplayas@gmail.com",
    "rating": 4.8,
    "reviews": 65,
    "type": "Planes Nutricionales Personalizados",
    "highlight": "Comunidad de Playas con consultas presenciales y seguimiento online"
  },
  {
    "id": 142,
    "vertical": "wellness",
    "name": "Consultorio Psicológico Integral TJ",
    "zone": "Otay",
    "address": "Blvd. Bellas Artes 19800, Otay, 22444 Tijuana",
    "phone": "+52 664 970 4410",
    "whatsapp": "+526649704410",
    "email": "psicologiaotaytj@gmail.com",
    "rating": 4.8,
    "reviews": 80,
    "type": "Terapia de Pareja & Adultos",
    "highlight": "Atención vespertina para profesionistas de la zona industrial"
  },
  {
    "id": 143,
    "vertical": "wellness",
    "name": "Nutrición Clínica Avanzada",
    "zone": "Zona Río",
    "address": "Paseo del Centenario 10310 Piso 5, 22010 Tijuana",
    "phone": "+52 664 200 6620",
    "whatsapp": "+526642006620",
    "email": "citas@nutricionavanzadatj.com",
    "rating": 4.9,
    "reviews": 110,
    "type": "Manejo Nutricional de Enfermedades Crónicas",
    "highlight": "Pacientes de control de colesterol, tiroides y presión arterial"
  },
  {
    "id": 144,
    "vertical": "wellness",
    "name": "Mente Serena Psicoterapia",
    "zone": "Zona Río",
    "address": "Francisco Javier Mina 1520 Piso 3, 22010 Tijuana",
    "phone": "+52 664 684 7733",
    "whatsapp": "+526646847733",
    "email": "menteserenatj@gmail.com",
    "rating": 5.0,
    "reviews": 60,
    "type": "Mindfulness & Psicoterapia Humanista",
    "highlight": "Consultas individuales con alta retención de pacientes"
  }
];

export default function Leads({ lang = "es", t = {} }) {
  const [selectedVertical, setSelectedVertical] = useState("dental");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [activeTab, setActiveTab] = useState("pitch");
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);
  const [copiedGeneralScript, setCopiedGeneralScript] = useState(false);
  const [copiedClinicId, setCopiedClinicId] = useState(null);
  const searchInputRef = useRef(null);

  // Status storage per lead ID
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

  // Current vertical config
  const currentVertical = VERTICALS[selectedVertical] || VERTICALS.dental;

  // Filtered and sorted leads
  const filteredClinics = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    let list = LEADS_DATABASE.filter((c) => c.vertical === selectedVertical);

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
  }, [selectedVertical, searchTerm, sortBy]);

  // Counts per vertical
  const countsPerVertical = useMemo(() => {
    const counts = {};
    Object.keys(VERTICALS).forEach((k) => {
      counts[k] = LEADS_DATABASE.filter((c) => c.vertical === k).length;
    });
    return counts;
  }, []);

  // CRM Progress metrics for the selected vertical
  const verticalTotal = LEADS_DATABASE.filter((c) => c.vertical === selectedVertical).length;
  const contactedCount = LEADS_DATABASE.filter(
    (c) => c.vertical === selectedVertical && (clinicStatuses[c.id] === "contacted" || clinicStatuses[c.id] === "replied" || clinicStatuses[c.id] === "scheduled")
  ).length;
  const scheduledCount = LEADS_DATABASE.filter(
    (c) => c.vertical === selectedVertical && clinicStatuses[c.id] === "scheduled"
  ).length;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedGeneralScript(true);
    setTimeout(() => setCopiedGeneralScript(false), 2000);
  };

  const copyPersonalizedScript = (clinic) => {
    const text =
      activeTab === "pitch"
        ? currentVertical.pitchWa(clinic.name)
        : currentVertical.pitchBody(clinic.name);
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
      "Vertical",
      "Nombre de Negocio",
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
      "Demo NullRaccoon"
    ];

    const currentLeads = LEADS_DATABASE.filter((c) => c.vertical === selectedVertical);
    const rows = currentLeads.map((c) => [
      c.id,
      `"${currentVertical.label}"`,
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
      `"${currentVertical.demoUrl}"`
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `prospectos_${selectedVertical}_tijuana_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="leads-hub-page">
      <Helmet>
        <title>Hub de Prospección B2B &middot; NullRaccoon</title>
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
                <span>Hub de Prospección B2B Multivertical &middot; Tijuana</span>
              </div>
              <h1 className="leads-hero-title">
                Prospección de Servicios con Citas
              </h1>
              <p className="leads-hero-desc">
                Directorio verificado para ofrecer automatización de confirmaciones por WhatsApp, reducción de no-shows y plataformas de gestión desarrolladas por{" "}
                <a
                  href="/"
                  style={{ color: "#818cf8", fontWeight: 600, textDecoration: "underline" }}
                >
                  NullRaccoon
                </a>.
              </p>
            </div>

            <div className="leads-hero-actions">
              <button onClick={downloadCSV} className="leads-btn-ghost">
                <FileSpreadsheet size={16} />
                <span>Exportar CSV ({verticalTotal})</span>
              </button>
              <a
                href={currentVertical.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leads-btn-primary"
              >
                <Sparkles size={16} />
                <span>{currentVertical.demoLabel}</span>
              </a>
            </div>
          </div>

          {/* Vertical Selector Tabs */}
          <div className="leads-vertical-tabs">
            {Object.values(VERTICALS).map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVertical(v.id);
                  setSearchTerm("");
                }}
                className={`leads-vertical-btn ${selectedVertical === v.id ? "active" : ""}`}
              >
                <span>{v.icon}</span>
                <span>{v.label}</span>
                <span className="leads-vertical-btn-count">{countsPerVertical[v.id] || 0}</span>
              </button>
            ))}
          </div>

          {/* Pilot Goal Tracker */}
          <div className="leads-tracker-card">
            <div className="leads-tracker-info">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Target size={16} style={{ color: "#818cf8" }} />
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2e8f0" }}>
                  Meta del Piloto ({currentVertical.label}): 3 Clientes Agendados
                </span>
              </div>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                {contactedCount} de {verticalTotal} contactados &middot;{" "}
                <strong style={{ color: "#34d399" }}>{scheduledCount} de 3 demos agendadas</strong>
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
        
        {/* Pitch Script Card (Adapts to current vertical) */}
        <div className="leads-script-card">
          <div className="leads-script-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ padding: "8px", background: "rgba(99, 102, 241, 0.12)", borderRadius: "10px", color: "#818cf8" }}>
                <Send size={16} />
              </div>
              <div>
                <h2 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                  Guión Adaptado: {currentVertical.title}
                </h2>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                  {currentVertical.tagline}
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
                      ? currentVertical.pitchWa("[Nombre del negocio]")
                      : currentVertical.pitchBody("[Nombre del negocio]")
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
                {currentVertical.pitchSubject("[Nombre del negocio]")}
              </div>
            )}

            {activeTab === "pitch" ? (
              <p style={{ margin: 0 }}>
                {currentVertical.pitchWa("[Nombre del negocio]")}
              </p>
            ) : (
              <div style={{ whiteSpace: "pre-wrap" }}>
                {currentVertical.pitchBody("[Nombre del negocio]")}
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
              placeholder={`Buscar en ${currentVertical.label} por nombre, calle, zona o teléfono...`}
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
            Mostrando <strong style={{ color: "#ffffff" }}>{filteredClinics.length}</strong> de {verticalTotal} prospectos en{" "}
            <strong style={{ color: "#818cf8" }}>{currentVertical.label}</strong>
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
              No se encontraron resultados
            </h3>
            <p style={{ fontSize: "13px", color: "#94a3b8", margin: "0 0 16px 0" }}>
              No hay coincidencias para &ldquo;{searchTerm}&rdquo; en {currentVertical.label}.
            </p>
            <button onClick={() => setSearchTerm("")} className="leads-btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
              Ver todos los prospectos de {currentVertical.label}
            </button>
          </div>
        )}

        {/* Leads Cards Grid */}
        <div className="leads-cards-grid">
          {filteredClinics.map((c) => {
            const currentStatus = clinicStatuses[c.id] || "new";
            const personalizedMsg = currentVertical.pitchWa(c.name);
            const cleanWaNumber = c.whatsapp ? c.whatsapp.replace(/[^0-9]/g, "") : null;
            const waUrl = cleanWaNumber
              ? `https://api.whatsapp.com/send?phone=${cleanWaNumber}&text=${encodeURIComponent(personalizedMsg)}`
              : null;

            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ', ' + c.address)}`;
            const emailSub = currentVertical.pitchSubject(c.name);
            const emailBody = currentVertical.pitchBody(c.name);
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

                  {/* Name & Specialty */}
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

                  {/* Why this business */}
                  <div className="leads-why-box">
                    <Target size={16} className="leads-why-icon" />
                    <div>
                      <strong style={{ color: "#e0e7ff" }}>Por qué este prospecto:</strong> {c.highlight}
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

                  {/* Per-Business Quick Copy Button */}
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
                        ? "¡Mensaje adaptado copiado!"
                        : `Copiar mensaje adaptado para ${c.name}`}
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
