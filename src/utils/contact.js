export function whatsappUrl(lang = "es", message) {
  const text = message || (lang === "es" ? "Hola, me gustaría conversar sobre un proyecto para mi negocio." : "Hi, I'd like to discuss a project for my business.");
  return "https://wa.me/526645789729?text=" + encodeURIComponent(text);
}
export const studioEmail = "null.raccoon.tj@gmail.com";
