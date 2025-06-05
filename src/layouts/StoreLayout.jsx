import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import translations from "../utils/translations";

export default function StoreLayout({ lang = "en" }) {
  // Get the translations object for current lang
  const t = translations[lang]?.header || translations.en.header;

  return (
    <>
      <Header lang={lang} t={t} />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
