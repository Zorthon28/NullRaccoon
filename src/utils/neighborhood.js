export function getNeighborhoodKeyFromHostname(
  hostname = window.location.hostname,
) {
  if (!hostname) return null;
  // Example: torrontes.viñasdelmar.club -> "torrontes"
  // Note: IDN domains may appear as punycode in window.location.hostname.
  const [firstLabel] = hostname.split(".");
  return firstLabel || null;
}
