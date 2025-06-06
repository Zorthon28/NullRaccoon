export const fetchExchangeRate = async (base = "USD", target = "MXN") => {
  try {
    const res = await fetch(   `https://api.fxratesapi.com/latest?base=${base}&symbols=${target}&api_key=fxr_live_81b3f8197e3c67d12860665478a1c4ac21a4` ); 

    const data = await res.json();
    console.log("FX API response:", data); // ← Add this

    if (!data.rates || !data.rates[target]) {
      throw new Error("Invalid API response structure");
    }

    return data.rates[target];
  } catch (error) {
    console.error("Failed to fetch exchange rate:", error);
    return null;
  }
};


export const formatCurrency = (lang, price, currency) => {
  const locale = lang === "es" ? "es-MX" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "code", // <- this shows "MXN 425.00"
    minimumFractionDigits: 2,
  }).format(price);
};

