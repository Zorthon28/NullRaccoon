import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import translations from "./utils/translations";

function renderPage(Component, lang = "es") {
  return render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Component lang={lang} t={translations[lang]} /></MemoryRouter>);
}

test("Home routes visitors to services and selected proof without a full guarantees section", () => {
  renderPage(Hero);
  expect(screen.getByRole("link", { name: /Explorar servicios/i })).toHaveAttribute("href", "/services");
  expect(screen.getByRole("heading", { name: "MedTech Premier" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "NullDental" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Garantías NullRaccoon" })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Todos los proyectos/i })).toHaveAttribute("href", "/projects");
});

test("Projects distinguishes client work, owned platforms, and demos in English", () => {
  renderPage(Projects, "en");
  for (const name of ["Client projects", "Our platforms", "Demonstrations"]) {
    expect(screen.getByRole("heading", { name })).toBeInTheDocument();
  }
  expect(screen.getAllByRole("article")).toHaveLength(5);
  expect(screen.queryByRole("link", { name: /Founder/i })).not.toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: "View project" }).map(link => link.getAttribute("href"))).toContain("/case-study/medtech-premier");
  expect(screen.getAllByRole("link", { name: "View project" }).every(link => link.getAttribute("href").startsWith("/"))).toBe(true);
});
