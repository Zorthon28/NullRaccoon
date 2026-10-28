import products from "./products";
import translations from "./translations";

export const showroomIds = [12, 4, 7, 9, 8, 10];
export const showroomProducts = showroomIds.map(id => products.find(product => product.id === id));
const copy = {
  12: { en: ["Over-ear headphones", "Personal audio", "A little less noise. A lot more you.", "An over-ear silhouette for the moments you want to settle in, tune out, and make something your own.", ["Over-ear design", "Noise-cancelling audio", "A space for your soundtrack"]], es: ["Audífonos over-ear", "Audio personal", "Menos ruido. Más de ti.", "Una silueta envolvente para esos momentos en los que quieres concentrarte, desconectarte y seguir tu propio ritmo.", ["Diseño over-ear", "Audio con cancelación de ruido", "Espacio para tu música"]] },
  4: { en: ["Everyday earbuds", "Personal audio", "Good sound. Less to carry.", "A compact pair of wireless earbuds, ready to move between your desk and the rest of your day.", ["Wireless design", "Compact format", "An everyday companion"]], es: ["Audífonos de diario", "Audio personal", "Buen sonido. Menos equipaje.", "Un par de audífonos inalámbricos compactos para acompañarte del escritorio al resto de tu día.", ["Diseño inalámbrico", "Formato compacto", "Un compañero para cada día"]] },
  7: { en: ["Portable speaker", "Home audio", "Your soundtrack, wherever you settle.", "Bring a little atmosphere to your desk, your shelf, or your next change of scene.", ["Bluetooth audio", "Portable format", "Sound for your space"]], es: ["Bocina portátil", "Audio en casa", "Tu música, donde estés.", "Dale ambiente al escritorio, a tu rincón favorito o a tu próximo cambio de escenario.", ["Audio Bluetooth", "Formato portátil", "Sonido para tu espacio"]] },
  9: { en: ["Charging dock", "Desk essentials", "A place for everything you recharge.", "A considered addition to your workspace, keeping your daily devices together in one convenient spot.", ["Wireless charging", "A place for your devices", "A more considered desk"]], es: ["Estación de carga", "Para tu escritorio", "Un lugar para recargar tu día.", "Un detalle para tu espacio de trabajo que reúne tus dispositivos cotidianos en un mismo lugar.", ["Carga inalámbrica", "Espacio para tus dispositivos", "Un escritorio más organizado"]] },
  8: { en: ["Laptop sleeve", "Everyday carry", "Take your workspace with you.", "A simple, useful layer for carrying your laptop between the places where your day happens.", ["An everyday essential", "A simple silhouette", "Made for your routine"]], es: ["Funda para laptop", "Para llevar", "Tu espacio de trabajo va contigo.", "Una capa sencilla y útil para llevar tu laptop entre los lugares que forman parte de tu día.", ["Un esencial cotidiano", "Una silueta sencilla", "Parte de tu rutina"]] },
  10: { en: ["Ambient desk light", "Desk essentials", "A softer end to a busy day.", "A warm point of light that brings a little character to the corner you call your own.", ["Ambient lighting", "A sculptural detail", "Warmth for your space"]], es: ["Luz de ambiente", "Para tu escritorio", "Una pausa cálida para tu día.", "Un punto de luz que le da carácter al rincón que haces tuyo.", ["Luz de ambiente", "Un detalle escultórico", "Calidez para tu espacio"]] },
};
export function showroomCopy(product, lang = "en") {
  const item = copy[product.id]?.[lang];
  if (item) return { name: item[0], category: item[1], headline: item[2], description: item[3], details: item[4] };
  const t = translations[lang] || translations.en;
  return { name: t.products[product.nameKey], category: lang === "es" ? "Archivo de la demo" : "Demo archive", headline: t.products[product.nameKey], description: t.products[product.descriptionKey], details: [] };
}
export const showroomPrice = value => "$" + value.toFixed(2);
